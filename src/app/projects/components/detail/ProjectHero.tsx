'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { extractCornerColor } from '@/app/utils/extractCornerColor';

interface ProjectHeroProps {
  title: string;
  image?: string;
  year?: string;
  category?: string;
  role?: string;
  collaborator?: string;
}

export default function ProjectHero({
  title,
  image,
  year,
  category,
  role,
  collaborator,
}: ProjectHeroProps) {
  const [bgColor, setBgColor] = useState('#000');

  useEffect(() => {
    if (image) {
      extractCornerColor(image).then(setBgColor);
    }
  }, [image]);

  return (
    <section
      className='relative w-full overflow-hidden transition-colors duration-700'
      style={{ backgroundColor: bgColor }}
    >
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent' />

      {/* Glows */}
      <div className='absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/8 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#a855f7]/8 blur-3xl pointer-events-none' />

      {/* Ghost letter */}
      <span className='absolute right-0 bottom-0 text-[20vw] font-black leading-none select-none pointer-events-none text-white/[0.02]'>
        P
      </span>

      {/* Content */}
      <div className='relative z-10 max-w-6xl mx-auto px-6 sm:px-12 md:px-20 py-20 sm:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16'>
        {/* Left: text */}
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-3 mb-5'>
            {category && (
              <span className='px-3 py-1 rounded-full bg-[#60a5fa]/15 border border-[#60a5fa]/25 text-[#60a5fa] text-xs font-medium tracking-wider uppercase'>
                {category}
              </span>
            )}
            {year && <span className='text-slate-500 text-xs'>{year}</span>}
          </div>

          <div className='w-10 h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#a855f7] rounded-full mb-5' />

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight'>
            {title}
          </h1>

          {(role || collaborator) && (
            <p className='mt-4 text-slate-400 text-sm sm:text-base'>
              {role && <span>{role}</span>}
              {role && collaborator && (
                <span className='mx-2 text-slate-600'>·</span>
              )}
              {collaborator && <span>{collaborator}</span>}
            </p>
          )}
        </div>

        {/* Right: image */}
        {image && (
          <div className='w-full md:w-auto md:flex-shrink-0 flex justify-center md:justify-end'>
            <div className='relative w-[360px] h-[360px] rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60 bg-white'>
              <Image
                src={image}
                alt={title}
                fill
                priority
                className='object-contain p-4'
              />
              {/* Subtle inner glow overlay */}
              <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none' />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
