import type { Metadata } from 'next';
import Hero from '@/app/components/sections/hero/Hero';
import VideoFrames from '@/app/components/sections/video-frames/VideoFrames';
import Services from '@/app/services/components/section/Services';

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
      <Hero />

      <VideoFrames />

      <Services />
    </main>
  );
}
