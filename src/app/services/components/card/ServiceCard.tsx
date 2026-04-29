import type { IconType } from 'react-icons';

export interface PanelTheme {
  number: string;
  bg: string;
  topBar: string;
  glow: string;
  iconBox: string;
  tag: string;
  dot: string;
  ghostNum: string;
  label: string;
}

export interface ServiceCardProps {
  service: {
    id: string | number;
    title: string;
    description: string;
    idealFor: string;
  };
  theme: PanelTheme;
  icon: IconType;
}

export default function ServiceCard({
  service,
  theme,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className={`
        relative flex-shrink-0 w-screen h-full
        bg-gradient-to-br ${theme.bg}
        flex items-center justify-center
        overflow-hidden
      `}
    >
      {/* Corner glow */}
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
      <div className='relative z-10 flex flex-col gap-6 px-8 sm:px-16 md:px-24 max-w-5xl w-full'>
        {/* Icon */}
        <div className={`w-fit p-4 rounded-2xl border ${theme.iconBox}`}>
          <Icon className='w-8 h-8' />
        </div>

        {/* Title */}
        <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight'>
          {service.title}
        </h2>

        {/* Divider */}
        <div
          className={`w-16 h-0.5 bg-gradient-to-r ${theme.topBar} rounded-full`}
        />

        {/* Description */}
        <p className='text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl'>
          {service.description}
        </p>

        {/* Tag */}
        <span
          className={`
            self-start inline-flex items-center gap-2
            px-4 py-2 rounded-full border
            text-sm font-medium
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
