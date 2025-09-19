'use client';

import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';

interface UseScrollAnimationProps {
  delay?: number;
  duration?: number;
  easing?: string;
  threshold?: number;
}

export const useScrollAnimation = ({
  delay = 0,
  duration = 400,
  easing = 'easeOutExpo',
  threshold = 0.1,
}: UseScrollAnimationProps = {}) => {
  const elementRef = useRef<HTMLButtonElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    // Configurar estado inicial
    animate(element, {
      translateY: 100,
      opacity: 0,
      scale: 0.8,
      duration: 0,
    });

    // Configurar animación de entrada
    const animation = animate(element, {
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: duration,
      delay: delay,
      easing: easing,
      autoplay: false,
      complete: () => {
        // Limpiar estilos inline después de la animación
        animate(element, {
          translateY: 'auto',
          opacity: 'auto',
          scale: 'auto',
          duration: 0,
        });
      },
    });

    // Configurar scroll observer
    onScroll({
      target: element,
      enter: 'bottom-=100 top',
      leave: 'top+=100 bottom',
      onEnter: () => {
        if (!hasAnimated.current) {
          hasAnimated.current = true;
          animation.play();
        }
      },
    });

    return () => {
      // Cleanup si es necesario
    };
  }, [delay, duration, easing, threshold]);

  return elementRef;
};
