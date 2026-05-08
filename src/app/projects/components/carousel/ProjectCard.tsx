'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Project } from '@/app/interfaces/projects/project.interface';
import { extractCornerColor } from '@/app/utils/extractCornerColor';

interface ProjectCardProps {
  project: Project;
  index: number;
  angle: number;
  radius: number;
  cardWidth: number;
  cardHeight: number;
}

export default function ProjectCard({
  project,
  index,
  angle,
  radius,
  cardWidth,
  cardHeight,
}: ProjectCardProps) {
  const [bgColor, setBgColor] = useState('#000');

  useEffect(() => {
    if (project.image) {
      extractCornerColor(project.image).then(setBgColor);
    }
  }, [project.image]);

  return (
    <div
      data-carousel-card
      className='absolute'
      style={{
        width: cardWidth,
        height: cardHeight,
        transform: `rotateY(${index * angle}deg) translateZ(${radius}px)`,
        marginLeft: -cardWidth / 2,
        marginTop: -cardHeight / 2,
      }}
    >
      <div
        className='relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-colors duration-500'
        style={{ backgroundColor: bgColor }}
      >
        <div className='absolute inset-0'>
          <div className='relative w-full h-full'>
            <Image
              src={project.image!}
              alt={project.title}
              fill
              sizes={`${cardWidth}px`}
              className={project.imageFit === 'cover' ? 'object-cover' : 'object-contain'}
            />
          </div>
        </div>

        {/* Gradient overlay para legibilidad del texto */}
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent' />

        {/* Card info */}
        <Link
          href={`/projects/${project.id}`}
          className='absolute bottom-0 left-0 right-0 p-4 text-white cursor-pointer'
        >
          <div className='w-8 h-px bg-gradient-to-r from-[#60a5fa] to-[#a855f7] mb-2' />
          <h3 className='font-bold text-sm leading-tight'>{project.title}</h3>

          <span className='inline-block text-xs text-[#60a5fa] mt-2 group-hover:underline'>
            Ver detalle →
          </span>
        </Link>
      </div>
    </div>
  );
}
