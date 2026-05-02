'use client';

import ProjectBanner from '@/app/projects/components/card/ProjectBanner';
import ProjectsCarousel from '@/app/projects/components/carousel/ProjectsCarousel';

export default function Projects() {
  return (
    <div id='projects' className="bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Desktop */}
      <section className='hidden sm:flex relative w-full h-screen'>
        <ProjectBanner />
      </section>

      {/* Mobile */}
      <section className='sm:hidden w-full h-screen'>
        <ProjectBanner mobile />
      </section>

      {/* Carousel (all viewports) */}
      <ProjectsCarousel />
    </div>
  );
}
