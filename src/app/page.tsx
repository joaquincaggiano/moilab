import Contact from './components/sections/contact/Contact';
import Hero from './components/sections/Hero';
// import { Marquee } from './components/sections/Marquee';
import Services from './components/sections/services/Services';
import { ToolSection } from './components/sections/tools/ToolSection';
// import { techLogos } from './data/technologies/data.tech';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />

      <ToolSection />

      {/* <Marquee items={techLogos} /> */}

      <Contact />
    </>
  );
}
