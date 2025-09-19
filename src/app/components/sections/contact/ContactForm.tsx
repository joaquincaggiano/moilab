'use client';

import { sendEmailAction } from '@/app/actions/sendEmail';
import { FormState } from '@/app/dto/send-email.dto';
import { useActionState, useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import { InputForm } from '../../ui/form/InputForm';
import { TextAreaForm } from '../../ui/form/TextAreaForm';
import { ButtonForm } from '../../ui/form/ButtonForm';

const ContactForm = () => {
  const initialState: FormState = {
    status: 'idle',
  };

  const [state, action, isLoading] = useActionState<FormState, FormData>(
    sendEmailAction,
    initialState
  );

  useEffect(() => {
    if (state?.status === 'success') {
      toast.success(state?.message || 'Mensaje enviado correctamente');
    }
    if (state?.status === 'error-server') {
      toast.error(state?.message || 'Error al enviar el mensaje');
    }
  }, [state]);

  return (
    <form
      action={action}
      className='w-full max-w-xl bg-gray-800 p-6 rounded-lg space-y-4 flex flex-col gap-2'
    >
      {/* Campo de nombre completo */}
      <InputForm
        label='Nombre Completo'
        name='fullName'
        type='text'
        placeholder='Tu nombre completo'
        defaultValue={state?.values?.fullName || ''}
        errors={state?.errors?.fullName}
      />

      {/* Campo de email */}
      <InputForm
        label='Email'
        name='email'
        type='email'
        placeholder='moilab@gmail.com'
        defaultValue={state?.values?.email || ''}
        errors={state?.errors?.email}
      />

      {/* Campo de mensaje */}
      <TextAreaForm
        label='Mensaje'
        name='message'
        placeholder='Escribe tu mensaje aquí...'
        defaultValue={state?.values?.message || ''}
        errors={state?.errors?.message}
      />

      {/* Botón de envío */}
      <ButtonForm
        isLoading={isLoading}
        text='Enviar Mensaje'
        textLoading='Enviando...'
      />

      <Toaster richColors />
    </form>
  );
};

export default ContactForm;
