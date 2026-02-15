'use client';

import { animate } from 'motion';
import { useEffect, useRef } from 'react';

interface UseScrollAnimationProps {
  delay?: number;
  duration?: number;
  easing?: string | number[];
  threshold?: number;
}

export const useScrollAnimation = ({
  delay = 0,
  duration = 400,
  easing = [0.19, 1, 0.22, 1], // easeOutExpo bezier curve
  threshold = 0.1,
}: UseScrollAnimationProps = {}) => {
  const elementRef = useRef<HTMLButtonElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    // Configurar estado inicial
    element.style.transform = 'translateY(100px) scale(0.8)';
    element.style.opacity = '0';

    // Configurar IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Animar entrada
            animate(
              element as any,
              {
                y: [100, 0],
                opacity: [0, 1],
                scale: [0.8, 1],
              },
              {
                duration: duration / 1000, // Motion usa segundos
                delay: delay / 1000,
                easing,
              } as any
            ).finished.then(() => {
              // Limpiar estilos inline después de la animación
              element.style.transform = '';
              element.style.opacity = '';
            });
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, easing, threshold]);

  return elementRef;
};
