'use client';

import { projectsData } from '@/app/data/projects/projects.data';
import ProjectCard from './ProjectCard';
import { useCarousel } from '@/app/hooks/useCarousel';

const RADIUS = 460;

export default function ProjectsCarousel() {
  const projects = projectsData.filter(p => p.image);
  const ANGLE = 360 / projects.length;

  const { sectionRef, trackRef } = useCarousel({ count: projects.length });

  return (
    <section
      ref={sectionRef}
      className='relative w-full bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 overflow-hidden'
    >
      {/* 3-D stage */}
      <div
        className='relative w-full flex items-center justify-center'
        style={{ height: '440px', perspective: '1400px' }}
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
              radius={RADIUS}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
