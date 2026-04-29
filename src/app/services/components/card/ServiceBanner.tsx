import { LuArrowRight } from 'react-icons/lu';
import type { Service } from '@/app/interfaces/services/service.interface';

interface ServiceBannerProps {
  services: Service[];
}

export default function ServiceBanner({ services }: ServiceBannerProps) {
  return (
    <div
      className={`
        relative flex-shrink-0 w-screen h-full
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
        flex items-center justify-center
        overflow-hidden
      `}
    >
      {/* Background glows */}
      <div className='absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/8 blur-3xl pointer-events-none' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none' />

      {/* Ghost text */}
      <span className='absolute right-8 bottom-0 text-[30vw] font-black leading-none select-none pointer-events-none text-white/[0.02]'>
        S
      </span>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-8 px-8 sm:px-16 md:px-24 max-w-5xl w-full'>
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

        {/* Service list */}
        <ul className='flex flex-col gap-2'>
          {services.map((service, i) => (
            <li
              key={service.id}
              className='flex items-center gap-3 text-slate-400 text-base sm:text-lg'
            >
              <span className='text-xs font-mono text-slate-600'>
                0{i + 1}
              </span>
              <span className='w-4 h-px bg-slate-700' />
              {service.title}
            </li>
          ))}
        </ul>

        {/* Scroll hint */}
        <div className='flex items-center gap-3 text-slate-500 text-sm'>
          <LuArrowRight className='w-4 h-4 animate-bounce-x' />
          Deslizá para explorar
        </div>
      </div>
    </div>
  );
}
