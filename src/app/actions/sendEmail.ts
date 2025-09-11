'use server';

import { Resend } from 'resend';
import { SendEmailDto, FormState } from '../dto/send-email.dto';

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
      success: false,
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
      from: `Mi App <${process.env.RESEND_FROM_EMAIL}>`, // Debe estar verificado en Resend
      to: process.env.RESEND_TO_EMAIL || '',
      subject: `Nuevo mensaje de contacto de ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de Moilab.</p>
            <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: 'Mensaje enviado correctamente',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Error al enviar el mensaje',
    };
  }
}
