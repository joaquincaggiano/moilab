import Contact from './components/sections/contact/Contact';
import Hero from './components/sections/Hero';
import Services from './components/sections/services/Services';
import { ToolSection } from './components/sections/tools/ToolSection';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />

      <ToolSection />

      {/* <Contact /> */}
    </>
  );
}
