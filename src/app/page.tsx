import Contact from './components/sections/contact/Contact';
import Hero from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import Services from './components/sections/services/Services';
import { techLogos } from './data/technologies/data.tech';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />

      <Marquee items={techLogos} />

      <Contact />
    </>
  );
}
