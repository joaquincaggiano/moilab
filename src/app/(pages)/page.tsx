import type { Metadata } from 'next';
import Hero from '@/app/components/sections/hero/Hero';
import VideoFrames from '@/app/components/sections/video-frames/VideoFrames';
import Services from '../services/components/section/Services';
import Projects from '../projects/components/section/Projects';
import Contact from '../contact/components/section/Contact';
import { Footer } from '../components/sections/footer/Footer';
import Header from '../components/sections/header/Header';
import ScrollToHash from '@/app/components/ScrollToHash';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    absolute: 'MoiLab - Desarrollo de Software y Aplicaciones Web',
  },
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
  twitter: {
    card: 'summary_large_image',
    title: 'MoiLab - Desarrollo de Software y Aplicaciones Web',
    description:
      'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.',
  },
  alternates: {
    canonical: 'https://moilab.es',
  },
};

export default function HomePage() {
  return (
    <main className='w-full min-h-screen relative'>
      <Suspense>
        <ScrollToHash />
      </Suspense>
      <Header />

      <Hero />

      <VideoFrames />

      <Services />

      <Projects />

      <Contact />
    </main>
  );
}
