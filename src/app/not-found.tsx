import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 text-center'>
      {/* Background glows */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.08)_0%,rgba(96,165,250,0.04)_30%,transparent_70%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.05)_0%,transparent_50%)]' />

      <div className='relative z-10 flex flex-col items-center'>
        <p className='mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400'>
          Error 404
        </p>
        <h1 className='mb-4 text-6xl font-bold text-white md:text-8xl'>404</h1>
        <p className='mb-3 text-2xl font-semibold text-white md:text-3xl'>
          Página no encontrada
        </p>
        <p className='mb-10 max-w-md text-gray-400'>
          La página que buscas no existe o ha sido movida. Vuelve al inicio para
          continuar navegando.
        </p>
        <Link
          href='/'
          className='relative inline-flex h-14 w-full max-w-[200px] overflow-hidden rounded-full p-[2px]'
        >
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-gray-50 backdrop-blur-3xl transition-colors duration-300 hover:bg-black'>
            Volver al inicio
          </span>
        </Link>
      </div>
    </div>
  );
}
