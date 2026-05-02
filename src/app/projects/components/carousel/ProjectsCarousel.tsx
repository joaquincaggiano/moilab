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
    <section ref={sectionRef} className='relative w-full py-24 '>
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
