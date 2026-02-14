'use client';

import { animate } from 'animejs';
import { useEffect, useRef, useState } from 'react';

export const useBlurReveal = ({
  threshold = 0.15,
  duration = 1000,
  easing = 'easeOutExpo',
}: {
  threshold?: number;
  duration?: number;
  easing?: string;
} = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state - MODERADO
    element.style.filter = 'blur(15px)';
    element.style.opacity = '0';
    element.style.transform = 'translateY(60px)';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate the reveal
            animate(element, {
              opacity: [0, 1],
              translateY: [60, 0],
              duration,
              easing,
            });

            // Animate blur separately (anime.js doesn't support filter directly)
            let currentBlur = 15;
            const blurAnimation = setInterval(() => {
              currentBlur = Math.max(0, currentBlur - 0.75);
              element.style.filter = `blur(${currentBlur}px)`;

              if (currentBlur <= 0) {
                clearInterval(blurAnimation);
                element.style.filter = 'none';
              }
            }, 16); // ~60fps
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
