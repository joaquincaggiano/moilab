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
    <div className='group relative w-full max-w-xl h-auto xl:h-[80svh] xl:max-h-[540px]'>
      {/* Holographic overlay */}
      <div className='absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl pointer-events-none'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.3),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.2),transparent_50%)]' />
      </div>

      {/* Animated glow effects */}
      <div className='absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none' />
      <div className='absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl group-hover:scale-125 transition-transform duration-1000 pointer-events-none' />

      <form
        action={action}
        className='relative h-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-col gap-6 xl:justify-between border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-700'
      >
        {/* Campos del formulario */}
        <div className='flex flex-col gap-5'>
          {/* Campo de nombre completo */}
          <InputForm
            label='Nombre Completo'
            name='fullName'
            type='text'
            placeholder='John Doe'
            defaultValue={state?.values?.fullName || ''}
            errors={state?.errors?.fullName}
          />

          {/* Campo de email */}
          <InputForm
            label='Email'
            name='email'
            type='email'
            placeholder='john.doe@example.com'
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
        </div>

        {/* Botón de envío */}
        <div className='flex-shrink-0'>
          <ButtonForm
            isLoading={isLoading}
            text='Enviar Mensaje'
            textLoading='Enviando...'
          />
        </div>

        <Toaster richColors />

        {/* Overall glow on hover */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none' />
      </form>
    </div>
  );
};

export default ContactForm;
