'use client';

import { useBlurHook } from '@/app/hooks/useBlurHook';

interface ServiceBannerProps {
  /** Mobile stacking variant: full-height, no blur hook */
  mobile?: boolean;
}

export default function ServiceBanner({ mobile = false }: ServiceBannerProps) {
  const blurRef = useBlurHook<HTMLDivElement>({ mediaQuery: '(max-width: 639px)' });

  return (
    <div
      ref={mobile ? undefined : blurRef}
      className={`
        relative overflow-hidden
        bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
        flex items-center justify-center
        ${mobile
          ? 'w-full h-full'
          : 'w-full py-24 sm:flex-shrink-0 sm:w-screen sm:h-full sm:py-0'}
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
      <div
        className={`relative z-10 flex flex-col gap-6 px-8 ${
          mobile
            ? 'items-center text-center max-w-sm w-full'
            : 'sm:px-16 md:px-24 max-w-5xl w-full'
        }`}
      >
        {/* Eyebrow */}
        <span
          className={`inline-flex items-center gap-2 text-xs font-medium text-slate-400 tracking-widest uppercase ${
            mobile ? 'justify-center' : ''
          }`}
        >
          <span className='w-6 h-px bg-slate-600' />
          Lo que hacemos
          {mobile && <span className='w-6 h-px bg-slate-600' />}
        </span>

        {/* Headline */}
        <h2
          className={`font-black text-white leading-none tracking-tight ${
            mobile ? 'text-4xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
          }`}
        >
          Nuestros
          <br />
          <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent'>
            Servicios
          </span>
        </h2>

        {/* Divider */}
        <div
          className={`h-0.5 bg-gradient-to-r from-blue-400 to-fuchsia-400 rounded-full ${
            mobile ? 'w-10' : 'w-16'
          }`}
        />

        {/* Subtitle */}
        <p
          className={`text-slate-400 leading-relaxed ${
            mobile ? 'text-base max-w-xs' : 'text-base sm:text-lg max-w-md'
          }`}
        >
          Diseño, desarrollo y estrategia bajo un mismo techo. Sin intermediarios, sin fricción.
        </p>
      </div>
    </div>
  );
}
