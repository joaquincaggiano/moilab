import { Service } from '@/app/interfaces/services/service.interface';
import {
  LuLayoutTemplate,
  LuSmartphone,
  LuGlobe,
  LuWrench,
  LuCode,
} from 'react-icons/lu';
import type { IconType } from 'react-icons';

const numbers = ['01', '02', '03', '04', '05'];

const serviceIcons: IconType[] = [
  LuLayoutTemplate,
  LuSmartphone,
  LuGlobe,
  LuWrench,
  LuCode,
];

const accentColors = [
  'from-blue-500 via-blue-400 to-cyan-400',
  'from-violet-500 via-purple-400 to-pink-400',
  'from-cyan-500 via-teal-400 to-emerald-400',
  'from-orange-500 via-amber-400 to-yellow-400',
  'from-indigo-500 via-blue-400 to-violet-400',
];

const iconColors = [
  'text-blue-400',
  'text-violet-400',
  'text-cyan-400',
  'text-amber-400',
  'text-indigo-400',
];

const glowColors = [
  'from-blue-600/20 via-transparent to-transparent',
  'from-violet-600/20 via-transparent to-transparent',
  'from-cyan-600/20 via-transparent to-transparent',
  'from-amber-600/20 via-transparent to-transparent',
  'from-indigo-600/20 via-transparent to-transparent',
];

interface Props {
  service: Service;
  index: number;
  className?: string;
  cardHeight?: number;
}

export const ServiceCard = ({
  service,
  index,
  className = '',
  cardHeight,
}: Props) => {
  const Icon = serviceIcons[index];
  const accent = accentColors[index];
  const iconColor = iconColors[index];
  const glow = glowColors[index];

  return (
    <div
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden
        bg-gradient-to-br from-slate-800/80 to-slate-900/95
        border border-white/[0.10] hover:border-white/[0.22]
        shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.55)]
        backdrop-blur-sm
        transition-all duration-300
        ${className}`}
      style={{ height: cardHeight ? `${cardHeight}px` : undefined }}
    >
      {/* Top accent bar — always visible */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent}`}
      />

      {/* Corner glow */}
      <div
        className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${glow} blur-2xl pointer-events-none`}
      />

      {/* Header row: number + icon */}
      <div className='flex items-start justify-between'>
        <span className='text-4xl font-black text-white/[0.10] select-none leading-none tracking-tight'>
          {numbers[index]}
        </span>
        <div
          className={`p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] ${iconColor}`}
        >
          <Icon className='w-5 h-5' />
        </div>
      </div>

      {/* Title */}
      <h3 className='text-lg font-bold text-white leading-snug'>
        {service.title}
      </h3>

      {/* Divider */}
      <div className={`h-px w-10 bg-gradient-to-r ${accent} opacity-60`} />

      {/* Description */}
      <p className='text-slate-400 text-sm leading-relaxed flex-1'>
        {service.description}
      </p>

      {/* Badge */}
      <div className='mt-auto pt-1'>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
          bg-white/[0.06] border border-white/[0.10]
          text-slate-300 text-xs font-medium`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accent} shrink-0`}
          />
          {service.idealFor}
        </span>
      </div>

      {/* Hover overlay */}
      <div className='absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
    </div>
  );
};
