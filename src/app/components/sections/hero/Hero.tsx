'use client';

import { ShaderBackground } from '../../ui/backgrounds/HeroShader';
import BlurText from '../../ui/texts/BlurText';
import ButtonGradient from '../../ui/buttons/ButtonGradient';
import ButtonShiny from '../../ui/buttons/ButtonShiny';
import { useFadeIn } from '@/app/hooks/useFadeIn';

const Hero = () => {
  const buttonGradientRef = useFadeIn({
    delay: 1000,
    duration: 700,
    easing: 'easeOutExpo',
  });
  const buttonShinyRef = useFadeIn({
    delay: 1200,
    duration: 700,
    easing: 'easeOutExpo',
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className='w-full h-screen relative'
      id='home'
      aria-label='Sección principal'
    >
      <ShaderBackground>
        {/* Hero Content */}
        <div className='absolute inset-0 flex items-center justify-center md:items-end md:justify-start z-10 pb-14 px-8 sm:px-14 md:px-16 lg:px-24'>
          <div className='flex flex-col items-center md:items-start gap-5 w-full md:max-w-2xl lg:max-w-3xl'>
            {/* Texto principal */}
            <h1 className='sr-only'>
              MoiLab - Desarrollo de Software y Aplicaciones Web
            </h1>
            <BlurText
              text='Creamos tus ideas en experiencias digitales'
              className='text-white text-center text-4xl md:text-5xl lg:text-6xl md:text-start font-bold leading-tight'
              animateBy='words'
              stagger={0.08}
              duration={1.5}
            />

            {/* Texto secundario */}
            <BlurText
              text='Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.'
              className='text-center text-base md:text-start md:text-lg lg:text-xl text-gray-300 leading-relaxed'
              animateBy='words'
              delay={0.5}
              stagger={0.04}
              duration={1.5}
            />

            {/* Boton de contacto */}
            <div ref={buttonGradientRef}>
              <ButtonGradient
                onClick={() => scrollToSection('contact')}
                text='Comenzar Proyecto'
              />
            </div>
          </div>
        </div>
      </ShaderBackground>
    </section>
  );
};

export default Hero;
