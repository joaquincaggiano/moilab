'use client';

import { animate } from 'motion';
import { useEffect, useRef } from 'react';

export const useFadeIn = ({
  delay = 0,
  duration = 700,
  easing = [0.19, 1, 0.22, 1], // easeOutExpo bezier curve
}: {
  delay?: number;
  duration?: number;
  easing?: string | number[];
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    animate(
      element as any,
      { opacity: [0, 1] },
      {
        duration: duration / 1000, // Motion usa segundos
        easing,
        delay: delay / 1000,
      } as any
    );
  }, [delay, duration, easing]);

  return elementRef;
};
