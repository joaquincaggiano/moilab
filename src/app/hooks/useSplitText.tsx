'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

type SplitType = 'words' | 'chars' | 'lines';

interface UseSplitTextOptions {
  type?: SplitType;
  duration?: number;
  y?: number;
  stagger?: number;
  delay?: number;
}

export const useSplitText = <T extends HTMLElement = HTMLElement>(
  options: UseSplitTextOptions = {}
) => {
  const ref = useRef<T>(null);
  const {
    type = 'words',
    duration = 1,
    y = 10,
    stagger = 0.1,
    delay = 0,
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      const split = SplitText.create(ref.current, { type });
      const targets =
        type === 'chars'
          ? split.chars
          : type === 'lines'
            ? split.lines
            : split.words;

      gsap.from(targets, {
        duration,
        y,
        stagger: { each: stagger },
        autoAlpha: 0,
        filter: 'blur(10px)',
        delay,
        ease: 'power2.out',
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [type, duration, y, stagger, delay] }
  );

  return ref;
};
