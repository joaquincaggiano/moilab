import Link from 'next/link';

export const BottomFooterBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-12 pt-8 border-t border-gray-800/50'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
        <p className='text-gray-500 text-sm'>
          © {currentYear} MoiLab. Todos los derechos reservados.
        </p>

        <div className='flex flex-wrap justify-center gap-4 sm:gap-6 text-sm'>
          <Link
            href='/privacy-policy'
            className='text-gray-500 hover:text-blue-400 transition-colors duration-300'
          >
            Política de Privacidad
          </Link>
          <Link
            href='/cookie-policy'
            className='text-gray-500 hover:text-blue-400 transition-colors duration-300'
          >
            Política de Cookies
          </Link>
          <Link
            href='/terms-and-conditions'
            className='text-gray-500 hover:text-blue-400 transition-colors duration-300'
          >
            Términos de Servicio
          </Link>
        </div>
      </div>
    </div>
  );
};
