'use client';

import { servicesData } from '@/app/data/services/services.data';
import { useAnimeCarousel } from '@/app/hooks/useDraggable';
import { ServiceCard } from '../../ui/cards/ServiceCard';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { RoundedButton } from '../../ui/buttons/RoundedButton';

export default function ServicesSwap() {
  const { containerRef, items, onPointerDown, goLeft, goRight } =
    useAnimeCarousel({
      items: servicesData,
      dragThreshold: 100,
    });

  const handlePrevious = () => {
    goLeft();
  };

  const handleNext = () => {
    goRight();
  };

  return (
    <div className='w-full flex flex-col items-center mt-28'>
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        className='relative w-full h-[350px] sm:h-[450px] md:h-[550px] select-none touch-none flex justify-center items-center'
      >
        {items.map(({ it: card, setRef }) => (
          <ServiceCard key={card.id} card={card} setRef={setRef} />
        ))}
      </div>

      {/* Flechas de navegación */}
      <div className='flex justify-center items-center gap-8 mb-8'>
        {/* Flecha izquierda - Anterior */}
        <RoundedButton
          onClick={handlePrevious}
          icon={<LuArrowLeft className='w-5 h-5' />}
        />

        {/* Flecha derecha - Siguiente */}
        <RoundedButton
          onClick={handleNext}
          icon={<LuArrowRight className='w-5 h-5' />}
        />
      </div>
    </div>
  );
}
