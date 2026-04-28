import { Service } from '@/app/interfaces/services/service.interface';
import {
  LuLayoutTemplate,
  LuSmartphone,
  LuGlobe,
  LuWrench,
  LuCode,
} from 'react-icons/lu';
import type { IconType } from 'react-icons';

const serviceIcons: IconType[] = [
  LuLayoutTemplate,
  LuSmartphone,
  LuGlobe,
  LuWrench,
  LuCode,
];

// Interpolated between primary (#60a5fa) and secondary (#a855f7)
const cardThemes = [
  {
    number: '01',
    bg: 'from-slate-950 via-blue-950/60 to-slate-950',
    topBar: 'from-blue-400 to-blue-500',
    glow: 'bg-blue-500/12',
    iconBox: 'bg-blue-500/10 border-blue-400/20 text-blue-400',
    tag: 'bg-blue-500/10 border-blue-400/25 text-blue-300',
    dot: 'bg-blue-400',
    ghostNum: 'text-blue-400/[0.07]',
    divider: 'from-blue-400 to-blue-500',
  },
  {
    number: '02',
    bg: 'from-slate-950 via-indigo-950/60 to-slate-950',
    topBar: 'from-indigo-400 to-violet-500',
    glow: 'bg-indigo-500/12',
    iconBox: 'bg-indigo-500/10 border-indigo-400/20 text-indigo-400',
    tag: 'bg-indigo-500/10 border-indigo-400/25 text-indigo-300',
    dot: 'bg-indigo-400',
    ghostNum: 'text-indigo-400/[0.07]',
    divider: 'from-indigo-400 to-violet-500',
  },
  {
    number: '03',
    bg: 'from-slate-950 via-violet-950/60 to-slate-950',
    topBar: 'from-violet-400 to-purple-500',
    glow: 'bg-violet-500/12',
    iconBox: 'bg-violet-500/10 border-violet-400/20 text-violet-400',
    tag: 'bg-violet-500/10 border-violet-400/25 text-violet-300',
    dot: 'bg-violet-400',
    ghostNum: 'text-violet-400/[0.07]',
    divider: 'from-violet-400 to-purple-500',
  },
  {
    number: '04',
    bg: 'from-slate-950 via-purple-950/60 to-slate-950',
    topBar: 'from-purple-400 to-purple-600',
    glow: 'bg-purple-500/12',
    iconBox: 'bg-purple-500/10 border-purple-400/20 text-purple-400',
    tag: 'bg-purple-500/10 border-purple-400/25 text-purple-300',
    dot: 'bg-purple-400',
    ghostNum: 'text-purple-400/[0.07]',
    divider: 'from-purple-400 to-purple-600',
  },
  {
    number: '05',
    bg: 'from-slate-950 via-fuchsia-950/50 to-slate-950',
    topBar: 'from-purple-500 to-fuchsia-500',
    glow: 'bg-fuchsia-500/12',
    iconBox: 'bg-fuchsia-500/10 border-fuchsia-400/20 text-fuchsia-400',
    tag: 'bg-fuchsia-500/10 border-fuchsia-400/25 text-fuchsia-300',
    dot: 'bg-fuchsia-400',
    ghostNum: 'text-fuchsia-400/[0.07]',
    divider: 'from-purple-500 to-fuchsia-500',
  },
];

interface Props {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: Props) => {
  const Icon = serviceIcons[index];
  const theme = cardThemes[index];

  return (
    <div
      data-service-card
      data-service-index={index}
      className={`
        relative w-full rounded-3xl overflow-hidden
        bg-slate-950 bg-gradient-to-br ${theme.bg}
        border border-white/[0.07]
        min-h-[460px] md:min-h-[420px]
        p-8 md:p-12
        flex flex-col justify-between
      `}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${theme.topBar}`}
      />

      {/* Corner glow */}
      <div
        className={`absolute -top-24 -right-24 w-96 h-96 rounded-full ${theme.glow} blur-3xl pointer-events-none`}
      />

      {/* Ghost number — decorative background */}
      <span
        className={`absolute -bottom-6 right-6 text-[180px] md:text-[220px] font-black leading-none select-none pointer-events-none ${theme.ghostNum}`}
      >
        {theme.number}
      </span>

      {/* Top row */}
      <div className='relative flex items-end justify-end'>
        <div className={`p-3 rounded-2xl border ${theme.iconBox}`}>
          <Icon className='w-5 h-5' />
        </div>
      </div>

      {/* Content */}
      <div className='relative mt-auto flex flex-col gap-5'>
        <h3 className='text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight'>
          {service.title}
        </h3>

        <div
          className={`w-10 h-0.5 bg-gradient-to-r ${theme.divider} rounded-full`}
        />

        <p className='text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl'>
          {service.description}
        </p>

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
};
