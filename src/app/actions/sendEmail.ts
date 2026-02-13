'use server';

import { Resend } from 'resend';
import { SendEmailDto, FormState } from '../dto/send-email.dto';
import { ContactEmail } from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const errors = SendEmailDto.checkEmailData({ fullName, email, message });

  if (errors) {
    return {
      status: 'idle',
      values: {
        fullName,
        email,
        message,
      },
      errors,
    };
  }

  try {
    await resend.emails.send({
      from: `Moilab <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TO_EMAIL || '',
      subject: `Nuevo mensaje de contacto de ${fullName}`,
      react: ContactEmail({ fullName, email, message }),
    });

    return {
      status: 'success',
      message: 'Mensaje enviado correctamente',
    };
  } catch (error) {
    console.error(error);

    return {
      status: 'error-server',
      message: 'Error al enviar el mensaje',
    };
  }
}
