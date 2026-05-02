'use client';

import { useProjectBannerAnimation } from '@/app/hooks/useProjectBannerAnimation';

/** Splits a string into individual letter <span>s with data-banner-letter */
function SplitTitle({ text }: { text: string }) {
  return (
    <span className='inline-flex flex-wrap' aria-label={text}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          <span key={i} className='w-[0.3em]' aria-hidden='true' />
        ) : (
          <span
            key={i}
            data-banner-letter
            className='inline-block'
            aria-hidden='true'
          >
            {char}
          </span>
        )
      )}
    </span>
  );
}

interface ProjectBannerProps {
  mobile?: boolean;
}

export default function ProjectBanner({ mobile = false }: ProjectBannerProps) {
  const { containerRef } = useProjectBannerAnimation<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      className={`
        relative overflow-hidden
        flex items-center justify-center
        ${
          mobile
            ? 'w-full h-full'
            : 'w-full py-24 sm:flex-shrink-0 sm:w-screen sm:h-full sm:py-0'
        }
      `}
    >
      {/* Background glows */}
      <div className='absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-500/8 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-3xl pointer-events-none' />

      {/* Ghost text */}
      <span className='absolute right-8 bottom-0 text-[30vw] font-black leading-none select-none pointer-events-none text-white/[0.02]'>
        P
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
          data-banner-eyebrow
          className={`inline-flex items-center gap-2 text-sm font-medium text-slate-400 tracking-widest uppercase ${
            mobile ? 'justify-center' : ''
          }`}
        >
          <span className='w-6 h-px bg-slate-600' />
          Lo que creamos
          {mobile && <span className='w-6 h-px bg-slate-600' />}
        </span>

        {/* Headline */}
        <h2
          className={`font-black leading-none tracking-tight ${
            mobile ? 'text-6xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
          }`}
        >
          {/* Line 1: white, split letter by letter */}
          <span className='block text-white'>
            <SplitTitle text='Nuestros' />
          </span>

          {/* Line 2: gradient, enters as one word — bg-clip-text needs the full word */}
          <span
            data-banner-title-word
            className='block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'
          >
            proyectos.
          </span>
        </h2>

        {/* Divider */}
        <div
          data-banner-divider
          className={`h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full ${
            mobile ? 'w-10' : 'w-16'
          }`}
        />

        {/* Subtitle */}
        <p
          data-banner-subtitle
          className={`text-slate-400 leading-relaxed ${
            mobile ? 'text-lg max-w-xs' : 'text-base sm:text-lg max-w-md'
          }`}
        >
          Proyectos construidos con propósito y atención al detalle.
        </p>
      </div>
    </div>
  );
}
