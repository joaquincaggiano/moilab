'use client';

import { sendEmailAction } from '@/app/actions/sendEmail';
import { ButtonForm } from '@/app/components/ui/form/ButtonForm';
import { InputForm } from '@/app/components/ui/form/InputForm';
import { TextAreaForm } from '@/app/components/ui/form/TextAreaForm';
import { FormState } from '@/app/dto/send-email.dto';
import { useActionState, useEffect } from 'react';
import { toast, Toaster } from 'sonner';

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
    <div className='group relative w-full'>
      {/* Ambient glow */}
      <div className='absolute -top-8 -right-8 w-36 h-36 rounded-full bg-violet-500/10 blur-3xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none' />
      <div className='absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-blue-500/10 blur-2xl group-hover:scale-125 transition-transform duration-1000 pointer-events-none' />

      <form
        action={action}
        className='relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col gap-6 border border-slate-700/30 group-hover:border-slate-600/50 transition-all duration-700'
      >
        {/* Inner glow on hover */}
        <div className='absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] via-transparent to-blue-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none' />

        {/* Campos del formulario */}
        <div className='relative flex flex-col gap-5'>
          <InputForm
            label='Nombre Completo'
            name='fullName'
            type='text'
            placeholder='John Doe'
            defaultValue={state?.values?.fullName || ''}
            errors={state?.errors?.fullName}
          />

          <InputForm
            label='Email'
            name='email'
            type='email'
            placeholder='john.doe@example.com'
            defaultValue={state?.values?.email || ''}
            errors={state?.errors?.email}
          />

          <TextAreaForm
            label='Mensaje'
            name='message'
            placeholder='Cuéntanos sobre tu proyecto...'
            defaultValue={state?.values?.message || ''}
            errors={state?.errors?.message}
          />
        </div>

        {/* Botón de envío */}
        <div className='relative flex-shrink-0'>
          <ButtonForm
            isLoading={isLoading}
            text='Enviar Mensaje'
            textLoading='Enviando...'
          />
        </div>

        <Toaster richColors />
      </form>
    </div>
  );
};

export default ContactForm;
