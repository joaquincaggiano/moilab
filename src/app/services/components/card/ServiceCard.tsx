'use client';

import type { IconType } from 'react-icons';
import { useBlurHook } from '@/app/hooks/useBlurHook';
import type { PanelTheme } from '@/app/services/services.constants';

export interface ServiceCardProps {
  service: {
    id: string | number;
    title: string;
    description: string;
    idealFor: string;
  };
  theme: PanelTheme;
  icon: IconType;
  /** Mobile stacking variant: full-height, centered content, no blur hook */
  mobile?: boolean;
}

export default function ServiceCard({
  service,
  theme,
  icon: Icon,
  mobile = false,
}: ServiceCardProps) {
  const blurRef = useBlurHook<HTMLDivElement>({
    mediaQuery: '(max-width: 639px)',
  });

  return (
    <div
      ref={mobile ? undefined : blurRef}
      className={`
        relative overflow-hidden
        bg-slate-950 bg-gradient-to-br ${theme.bg}
        flex items-center justify-center
        ${
          mobile
            ? 'w-full h-full'
            : 'w-full py-24 sm:flex-shrink-0 sm:w-screen sm:h-full sm:py-0'
        }
      `}
    >
      {/* Corner glows */}
      <div
        className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full ${theme.glow} blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full ${theme.glow} blur-3xl pointer-events-none opacity-50`}
      />

      {/* Ghost number */}
      <span
        className={`
          absolute right-8 bottom-0
          text-[30vw] font-black leading-none
          select-none pointer-events-none
          ${theme.ghostNum}
        `}
      >
        {theme.number}
      </span>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col gap-6 px-8 ${
          mobile
            ? 'items-center text-center w-full'
            : 'sm:px-16 md:px-24 max-w-5xl w-full'
        }`}
      >
        {/* Icon */}
        <div
          className={`p-4 rounded-2xl border ${mobile ? '' : 'w-fit'} ${theme.iconBox}`}
        >
          <Icon className='w-8 h-8' />
        </div>

        {/* Title */}
        <h2
          className={`font-black text-white leading-none tracking-tight ${
            mobile ? 'text-5xl' : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
          }`}
        >
          {service.title}
        </h2>

        {/* Divider */}
        <div
          className={`h-0.5 bg-gradient-to-r ${theme.topBar} rounded-full ${
            mobile ? 'w-10' : 'w-16'
          }`}
        />

        {/* Description */}
        <p
          className={`text-slate-400 leading-relaxed ${
            mobile ? 'text-lg max-w-md' : 'text-base sm:text-lg max-w-xl'
          }`}
        >
          {service.description}
        </p>

        {/* Tag */}
        <span
          className={`
            inline-flex items-center gap-2
            px-4 py-2 rounded-full border
            text-sm font-medium
            ${mobile ? '' : 'self-start'}
            ${theme.tag}
          `}
        >
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${theme.dot}`} />
          Ideal para: {service.idealFor}
        </span>
      </div>
    </div>
  );
}
