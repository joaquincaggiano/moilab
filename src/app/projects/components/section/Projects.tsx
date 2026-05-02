'use client';

import ProjectBanner from '@/app/projects/components/card/ProjectBanner';
import ProjectsCarousel from '@/app/projects/components/carousel/ProjectsCarousel';

export default function Projects() {
  return (
    <div id='projects'>
      {/* Desktop */}
      <section className='hidden sm:flex relative w-full h-screen overflow-hidden bg-slate-950'>
        <ProjectBanner />
      </section>

      {/* Mobile */}
      <section className='sm:hidden w-full h-screen bg-slate-950'>
        <ProjectBanner mobile />
      </section>

      {/* Carousel (all viewports) */}
      <ProjectsCarousel />
    </div>
  );
}
