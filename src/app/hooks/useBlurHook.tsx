'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface UseBlurHookOptions {
  /** CSS selector for children to animate. If omitted, animates the root element. */
  selector?: string;
  /** Starting Y offset in px (default: 60) */
  yFrom?: number;
  /** Animation duration in seconds (default: 0.85) */
  duration?: number;
  /** GSAP ease string (default: "power2.out") */
  ease?: string;
  /** ScrollTrigger start string (default: "top 88%") */
  start?: string;
  /** Blur amount in px (default: 8) */
  blur?: number;
  /** Optional CSS media query — animation only runs when the query matches */
  mediaQuery?: string;
}

/**
 * Animates elements from below with a blur-fade reveal,
 * triggered individually as each element enters the viewport.
 *
 * Usage:
 *   const ref = useBlurHook({ selector: '[data-card]', yFrom: 80 });
 *   <div ref={ref}>...</div>
 */
export const useBlurHook = <T extends HTMLElement = HTMLDivElement>(
  options: UseBlurHookOptions = {}
) => {
  const ref = useRef<T>(null);

  const {
    selector,
    yFrom = 60,
    duration = 0.85,
    ease = 'power2.out',
    start = 'top 90%',
    blur = 8,
    mediaQuery,
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      const animate = () => {
        const targets: HTMLElement[] = selector
          ? Array.from(ref.current!.querySelectorAll<HTMLElement>(selector))
          : [ref.current!];

        if (targets.length === 0) return;

        targets.forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: yFrom,
            filter: `blur(${blur}px)`,
            duration,
            ease,
            scrollTrigger: {
              //markers: true,
              trigger: el,
              start,
              scrub: true,
            },
          });
        });
      };

      if (mediaQuery) {
        const mm = gsap.matchMedia();
        mm.add(mediaQuery, animate);
        return () => mm.revert();
      } else {
        animate();
      }
    },
    { scope: ref, dependencies: [selector, yFrom, duration, ease, start, blur, mediaQuery] }
  );

  return ref;
};
