import type { IconType } from 'react-icons';
import type { PanelTheme } from '@/app/services/services.constants';

interface ServicesMobileCardProps {
  service: {
    id: string | number;
    title: string;
    description: string;
    idealFor: string;
  };
  theme: PanelTheme;
  icon: IconType;
  total: number;
}

export default function ServicesMobileCard({
  service,
  theme,
  icon: Icon,
  total,
}: ServicesMobileCardProps) {
  return (
    <div
      className={`relative w-full h-full bg-slate-950 bg-gradient-to-br ${theme.bg} overflow-hidden`}
    >
      {/* Corner glows */}
      <div
        className={`absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full ${theme.glow} blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute -bottom-24 -left-24 w-[250px] h-[250px] rounded-full ${theme.glow} blur-3xl pointer-events-none opacity-50`}
      />

      {/* Ghost number */}
      <span
        className={`absolute right-3 bottom-0 text-[38vw] font-black leading-none select-none pointer-events-none ${theme.ghostNum}`}
      >
        {theme.number}
      </span>

      {/* Counter top-right */}
      <div className='absolute top-8 right-6 font-mono text-xs text-white/25'>
        {theme.number} / {String(total).padStart(2, '0')}
      </div>

      {/* Centered content */}
      <div className='absolute inset-0 p-6 flex flex-col items-center justify-center text-center z-10'>
        <div className={`mb-5 p-4 rounded-2xl border ${theme.iconBox}`}>
          <Icon className='w-7 h-7' />
        </div>
        <h2 className='text-3xl font-black text-white leading-none tracking-tight mb-3'>
          {service.title}
        </h2>
        <div
          className={`w-10 h-0.5 bg-gradient-to-r ${theme.topBar} rounded-full mb-4`}
        />
        <p className='text-slate-400 text-sm leading-relaxed mb-6 max-w-xs'>
          {service.description}
        </p>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${theme.tag}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${theme.dot}`} />
          Ideal para: {service.idealFor}
        </span>
      </div>
    </div>
  );
}
