'use client';

import { useState, useEffect } from 'react';
import { projectsData } from '@/app/data/projects/projects.data';
import ProjectCard from './ProjectCard';
import { useCarousel } from '@/app/hooks/useCarousel';

const DESKTOP = { radius: 460, cardW: 260, cardH: 360 };
const MOBILE  = { radius: 260, cardW: 150, cardH: 210 };

export default function ProjectsCarousel() {
  const projects = projectsData.filter(p => p.image);
  const ANGLE = 360 / projects.length;

  const [dims, setDims] = useState(DESKTOP);

  useEffect(() => {
    const update = () => setDims(window.innerWidth < 640 ? MOBILE : DESKTOP);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { sectionRef, trackRef } = useCarousel({ count: projects.length });

  return (
    <section ref={sectionRef} className='relative w-full min-h-screen flex items-center justify-center'>
      {/* 3-D stage */}
      <div
        className='relative w-full flex items-center justify-center'
        style={{ height: dims.cardH + 80, perspective: '1400px' }}
      >
        <div
          ref={trackRef}
          className='relative'
          style={{ width: 0, height: 0, transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              angle={ANGLE}
              radius={dims.radius}
              cardWidth={dims.cardW}
              cardHeight={dims.cardH}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
