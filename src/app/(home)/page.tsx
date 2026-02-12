import type { Metadata } from 'next';
import Contact from '../components/sections/contact/Contact';
import Hero from '../components/sections/hero/Hero';
import Services from '../components/sections/services/Services';
import { ToolSection } from '../components/sections/tools/ToolSection';
import Projects from '../components/sections/projects/Projects';

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'MoiLab - Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad. Impulsa tu negocio con soluciones digitales que marcan la diferencia.',
  keywords: [
    'desarrollo de software',
    'aplicaciones web',
    'landing pages',
    'desarrollo web personalizado',
    'software a medida',
    'programación',
    'desarrollo frontend',
    'desarrollo backend',
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
  ],
  openGraph: {
    title: 'MoiLab - Desarrollo de Software y Aplicaciones Web',
    description:
      'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.',
    url: 'https://moilab.es',
    type: 'website',
  },
  alternates: {
    canonical: 'https://moilab.es',
  },
};

export default function HomePage() {
  return (
    <main className='w-full min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden flex flex-col px-5 sm:px-10'>
      {/* Background */}
      {/* Soft radial gradient */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.08)_0%,rgba(96,165,250,0.04)_30%,transparent_70%)]' />

      {/* Natural conic gradient with smoother transitions */}
      <div className='absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(96,165,250,0.06)_0deg,rgba(96,165,250,0.03)_45deg,rgba(168,85,247,0.04)_90deg,rgba(168,85,247,0.06)_135deg,rgba(96,165,250,0.03)_180deg,rgba(96,165,250,0.06)_225deg,rgba(168,85,247,0.04)_270deg,rgba(96,165,250,0.06)_315deg,rgba(96,165,250,0.06)_360deg)]' />

      {/* Additional subtle gradient layer */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.05)_0%,transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(96,165,250,0.05)_0%,transparent_50%)]' />

      {/* Refined grid pattern */}
      <div className='absolute inset-0 opacity-40'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
            linear-gradient(rgba(96,165,250,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.4) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      {/* End Background */}

      <div className='relative z-10 w-full h-full'>
        <Hero />

        <Services />

        <ToolSection />

        <Projects />

        <Contact />
      </div>
    </main>
  );
}
