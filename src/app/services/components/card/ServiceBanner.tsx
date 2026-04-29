'use client';

import { useBlurHook } from '@/app/hooks/useBlurHook';

export default function ServiceBanner() {
  const ref = useBlurHook<HTMLDivElement>({ mediaQuery: '(max-width: 639px)' });

  return (
    <div
      ref={ref}
      className={`
        relative w-full py-24 sm:flex-shrink-0 sm:w-screen sm:h-full sm:py-0
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
        flex items-center justify-center
        overflow-hidden
      `}
    >
      {/* Background glows */}
      <div className='absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/8 blur-3xl pointer-events-none' />

      {/* Ghost text */}
      <span className='absolute right-8 bottom-0 text-[30vw] font-black leading-none select-none pointer-events-none text-white/[0.02]'>
        S
      </span>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-6 px-8 sm:px-16 md:px-24 max-w-5xl w-full'>
        {/* Eyebrow */}
        <span className='inline-flex items-center gap-2 text-sm font-medium text-slate-400 tracking-widest uppercase'>
          <span className='w-6 h-px bg-slate-600' />
          Lo que hacemos
        </span>

        {/* Headline */}
        <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight'>
          Nuestros
          <br />
          <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent'>
            Servicios
          </span>
        </h2>

        {/* Divider */}
        <div className='w-16 h-0.5 bg-gradient-to-r from-blue-400 to-fuchsia-400 rounded-full' />

        {/* Subtitle */}
        <p className='text-slate-400 text-base sm:text-lg leading-relaxed max-w-md'>
          Transformamos ideas en productos digitales. Desde una landing hasta software a medida.
        </p>
      </div>
    </div>
  );
}
