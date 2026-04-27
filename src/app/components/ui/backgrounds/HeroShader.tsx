'use client';

import type React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { colors } from '@/app/theme/palette-colors';

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className='w-full h-full relative overflow-hidden'>
      {/* SVG Filters */}
      <svg className='absolute inset-0 w-0 h-0'>
        <defs>
          <filter
            id='glass-effect'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feTurbulence baseFrequency='0.005' numOctaves='1' result='noise' />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='0.3' />
            <feColorMatrix
              type='matrix'
              values='1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0'
              result='tint'
            />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders */}
      <div className='absolute inset-0 bg-black' />
      <MeshGradient
        className='absolute inset-0 w-full h-full'
        colors={[
          '#000000',
          colors.primary,
          colors.secondary,
          '#000000',
          '#0f172a',
        ]}
        speed={0.3}
      />
      <MeshGradient
        className='absolute inset-0 w-full h-full opacity-40'
        colors={['#000000', '#ffffff', colors.secondary, '#000000']}
        speed={0.2}
      />

      {children}
    </div>
  );
}
