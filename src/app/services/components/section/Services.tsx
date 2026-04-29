'use client';

import { useHorizontalScroll } from '@/app/hooks/useHorizontalScroll';
import { servicesData } from '@/app/data/services/services.data';
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

const panelThemes = [
  {
    number: '01',
    bg: 'from-slate-950 via-blue-950/40 to-slate-950',
    topBar: 'from-blue-400 to-blue-500',
    glow: 'bg-blue-500/10',
    iconBox: 'bg-blue-500/10 border-blue-400/20 text-blue-400',
    tag: 'bg-blue-500/10 border-blue-400/25 text-blue-300',
    dot: 'bg-blue-400',
    ghostNum: 'text-blue-400/[0.05]',
    label: 'text-blue-400/60',
  },
  {
    number: '02',
    bg: 'from-slate-950 via-indigo-950/40 to-slate-950',
    topBar: 'from-indigo-400 to-violet-500',
    glow: 'bg-indigo-500/10',
    iconBox: 'bg-indigo-500/10 border-indigo-400/20 text-indigo-400',
    tag: 'bg-indigo-500/10 border-indigo-400/25 text-indigo-300',
    dot: 'bg-indigo-400',
    ghostNum: 'text-indigo-400/[0.05]',
    label: 'text-indigo-400/60',
  },
  {
    number: '03',
    bg: 'from-slate-950 via-violet-950/40 to-slate-950',
    topBar: 'from-violet-400 to-purple-500',
    glow: 'bg-violet-500/10',
    iconBox: 'bg-violet-500/10 border-violet-400/20 text-violet-400',
    tag: 'bg-violet-500/10 border-violet-400/25 text-violet-300',
    dot: 'bg-violet-400',
    ghostNum: 'text-violet-400/[0.05]',
    label: 'text-violet-400/60',
  },
  {
    number: '04',
    bg: 'from-slate-950 via-purple-950/40 to-slate-950',
    topBar: 'from-purple-400 to-purple-600',
    glow: 'bg-purple-500/10',
    iconBox: 'bg-purple-500/10 border-purple-400/20 text-purple-400',
    tag: 'bg-purple-500/10 border-purple-400/25 text-purple-300',
    dot: 'bg-purple-400',
    ghostNum: 'text-purple-400/[0.05]',
    label: 'text-purple-400/60',
  },
  {
    number: '05',
    bg: 'from-slate-950 via-fuchsia-950/30 to-slate-950',
    topBar: 'from-purple-500 to-fuchsia-500',
    glow: 'bg-fuchsia-500/10',
    iconBox: 'bg-fuchsia-500/10 border-fuchsia-400/20 text-fuchsia-400',
    tag: 'bg-fuchsia-500/10 border-fuchsia-400/25 text-fuchsia-300',
    dot: 'bg-fuchsia-400',
    ghostNum: 'text-fuchsia-400/[0.05]',
    label: 'text-fuchsia-400/60',
  },
];

export default function Services() {
  const { containerRef, innerRef } = useHorizontalScroll<HTMLElement>({
    scrub: 1.2,
    start: 'top top',
  });

  return (
    <section
      id='services'
      ref={containerRef}
      className='relative w-full h-screen overflow-hidden bg-slate-950'
    >
      {/* Horizontal track */}
      <div
        ref={innerRef}
        className='flex h-full will-change-transform'
        style={{ width: `${servicesData.length * 100}vw` }}
      >
        {servicesData.map((service, index) => {
          const Icon = serviceIcons[index];
          const theme = panelThemes[index];

          return (
            <div
              key={service.id}
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
                <div
                  className={`w-fit p-4 rounded-2xl border ${theme.iconBox}`}
                >
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
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${theme.dot}`}
                  />
                  Ideal para: {service.idealFor}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
