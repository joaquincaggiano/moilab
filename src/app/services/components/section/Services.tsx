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
import ServiceCard from '@/app/services/components/card/ServiceCard';
import ServiceBanner from '@/app/services/components/card/ServiceBanner';

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
        style={{ width: `${(servicesData.length + 1) * 100}vw` }}
      >
        <ServiceBanner services={servicesData} />
        {servicesData.map((service, index) => {
          const Icon = serviceIcons[index];
          const theme = panelThemes[index];

          return (
            <ServiceCard
              key={service.id}
              service={service}
              theme={theme}
              icon={Icon}
            />
          );
        })}
      </div>
    </section>
  );
}
