'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center'>
      <p className='mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400'>
        Error inesperado
      </p>
      <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
        Algo salió mal
      </h1>
      <p className='mb-10 max-w-md text-gray-400'>
        Ocurrió un error al cargar esta página. Puedes intentar recargarla o
        volver al inicio.
      </p>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <button
          onClick={reset}
          className='relative inline-flex h-14 w-full max-w-[200px] overflow-hidden rounded-full p-[2px]'
        >
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-gray-50 backdrop-blur-3xl transition-colors duration-300 hover:bg-black'>
            Reintentar
          </span>
        </button>
        <a
          href='/'
          className='inline-flex h-14 w-full max-w-[200px] items-center justify-center rounded-full border border-gray-700 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-gray-500 hover:text-white'
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
