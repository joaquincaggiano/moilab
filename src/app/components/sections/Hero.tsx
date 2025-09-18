'use client';

import { useLenisStore } from '@/app/storage/lenisStore';
import LightRays from '../ui/backgrounds/LighRays';
import BlurText from '../ui/texts/BlurText';
import ButtonGradient from '../ui/buttons/ButtonGradient';
import ButtonShiny from '../ui/buttons/ButtonShiny';
import { colors } from '@/app/theme/palette-colors';

const Hero = () => {
  const { scrollTo } = useLenisStore();

  const scrollToContact = () => {
    scrollTo('contact');
  };

  const scrollToServices = () => {
    scrollTo('services');
  };

  return (
    <div className='w-full h-screen relative' id='home'>
      <LightRays
        raysOrigin='top-center'
        raysColor='#ffffff'
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className='custom-rays'
      />

      {/* Hero Content */}
      <div className='absolute inset-0 flex items-center justify-center z-10 pt-10'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          {/* Texto principal */}
          <div className='flex flex-col items-center justify-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-2'>
            <BlurText
              text='Creamos tus ideas en'
              className='text-white'
              animateBy='words'
              delay={150}
              stepDuration={0.4}
              direction='top'
            />
            <BlurText
              text='experiencias digitales'
              className=''
              animateBy='words'
              delay={300}
              stepDuration={0.4}
              direction='top'
              gradientStart={colors.primary}
              gradientEnd={colors.secondary}
            />
          </div>

          {/* Texto secundario */}
          <div className='w-full max-w-xl mb-6'>
            <p className='text-center text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Desarrollamos software personalizado, landing pages impactantes y
              aplicaciones web que convierten tu visión en realidad. Impulsa tu
              negocio con soluciones digitales que marcan la diferencia.
            </p>
          </div>

          {/* Botones */}
          <div className='w-full flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <ButtonGradient
              onClick={scrollToContact}
              text='Comenzar Proyecto'
            />

            <ButtonShiny onClick={scrollToServices} text='Ver Servicios' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
