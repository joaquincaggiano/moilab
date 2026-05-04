'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Project } from '@/app/interfaces/projects/project.interface';

/**
 * Samples the four corners of an image to get the average background color.
 * Corners are the most reliable place to find the background in logos/screenshots.
 */
function extractCornerColor(src: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 100;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve('#000');
        ctx.drawImage(img, 0, 0, size, size);

        const sample = (x: number, y: number) =>
          ctx.getImageData(x, y, 1, 1).data;
        const pts = [
          sample(0, 0),
          sample(size - 1, 0),
          sample(0, size - 1),
          sample(size - 1, size - 1),
        ];

        const r = Math.round(pts.reduce((a, c) => a + c[0], 0) / 4);
        const g = Math.round(pts.reduce((a, c) => a + c[1], 0) / 4);
        const b = Math.round(pts.reduce((a, c) => a + c[2], 0) / 4);

        resolve(`rgb(${r},${g},${b})`);
      } catch {
        resolve('#000');
      }
    };
    img.onerror = () => resolve('#000');
    img.src = src;
  });
}

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
        {/* Image — object-contain so logos/screenshots no se recortan */}
        <div className='absolute inset-0 p-4 pb-20'>
          <div className='relative w-full h-full'>
            <Image
              src={project.image!}
              alt={project.title}
              fill
              sizes={`${cardWidth}px`}
              className='object-contain'
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
          <div className='w-8 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2' />
          <h3 className='font-bold text-sm leading-tight'>{project.title}</h3>
          {project.collaborator && (
            <p className='text-xs text-slate-400 mt-0.5'>
              {project.collaborator}
            </p>
          )}
          <span className='inline-block text-xs text-emerald-400 mt-2 group-hover:underline'>
            Ver detalle →
          </span>
        </Link>
      </div>
    </div>
  );
}
