'use client';

import { animate } from 'animejs';
import { useEffect, useRef } from 'react';

export const useFadeIn = ({
  delay = 0,
  duration = 700,
  easing = 'easeOutExpo',
}: {
  delay?: number;
  duration?: number;
  easing?: string;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    animate(element, {
      opacity: [0, 1],
      duration,
      easing,
      delay,
    });
  }, [delay, duration, easing]);

  return elementRef;
};
