import type { Metadata } from 'next';
import Contact from './components/sections/contact/Contact';
import Hero from './components/sections/hero/Hero';
import Services from './components/sections/services/Services';
import { ToolSection } from './components/sections/tools/ToolSection';

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
    url: 'https://moilab.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://moilab.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />

      <ToolSection />

      <Contact />
    </>
  );
}
