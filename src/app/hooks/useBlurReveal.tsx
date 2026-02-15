'use client';

import { animate } from 'motion';
import { useEffect, useRef, useState } from 'react';

export const useBlurReveal = ({
  threshold = 0.15,
  duration = 1000,
  easing = [0.19, 1, 0.22, 1], // easeOutExpo bezier curve
}: {
  threshold?: number;
  duration?: number;
  easing?: string | number[];
} = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    element.style.filter = 'blur(15px)';
    element.style.opacity = '0';
    element.style.transform = 'translateY(60px)';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Motion supports filter animation directly
            animate(
              element as any,
              {
                opacity: [0, 1],
                y: [60, 0],
                filter: ['blur(15px)', 'blur(0px)'],
              },
              {
                duration: duration / 1000, // Motion usa segundos
                easing,
              } as any
            );
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, duration, easing, hasAnimated]);

  return elementRef;
};
