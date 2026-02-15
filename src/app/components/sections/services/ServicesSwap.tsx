'use client';

import { servicesData } from '@/app/data/services/services.data';
import { ServiceCard } from '../../ui/cards/ServiceCard';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { RoundedButton } from '../../ui/buttons/RoundedButton';
import { useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'motion/react';

export default function ServicesSwap() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const swipeVelocity = 500;

    // Detectar swipe por velocidad o distancia
    if (Math.abs(info.offset.x) > threshold || Math.abs(info.velocity.x) > swipeVelocity) {
      if (info.offset.x > 0) {
        // Drag a la derecha → card sale a la derecha, entra la anterior desde la izquierda
        setDirection('left');
        handlePrevious();
      } else {
        // Drag a la izquierda → card sale a la izquierda, entra la siguiente desde la derecha
        setDirection('right');
        handleNext();
      }
    }
  };

  const currentCard = servicesData[currentIndex];

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      // La siguiente entra desde la derecha, la anterior desde la izquierda
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      // La actual sale hacia el lado opuesto
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <div
        className='relative w-full h-[400px] sm:h-[480px] md:h-[550px] flex justify-center items-center px-4'
        style={{ touchAction: 'pan-y' }}
      >
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={currentCard.id}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragDirectionLock
            onDragEnd={handleDragEnd}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            whileDrag={{
              scale: 1.02,
              cursor: 'grabbing',
            }}
            className='absolute w-full h-full flex justify-center items-center cursor-grab'
          >
            <div className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-4xl h-full pointer-events-none'>
              <ServiceCard card={currentCard} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Flechas de navegación */}
      <div className='flex justify-center items-center gap-8 mb-8 mt-10'>
        {/* Flecha izquierda - Anterior */}
        <RoundedButton
          onClick={handlePrevious}
          icon={<LuArrowLeft className='w-5 h-5 text-white' />}
        />

        {/* Flecha derecha - Siguiente */}
        <RoundedButton
          onClick={handleNext}
          icon={<LuArrowRight className='w-5 h-5 text-white' />}
        />
      </div>
    </div>
  );
}
