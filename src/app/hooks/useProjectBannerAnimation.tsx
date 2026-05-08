'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives the ProjectBanner entrance timeline.
 *
 * Selectors expected in the DOM:
 *  - [data-banner-eyebrow]    → fade + slide from below
 *  - [data-banner-letter]     → letter-by-letter from random directions + rotation
 *  - [data-banner-title-word] → second headline word (gradient); slides up as one block
 *  - [data-banner-divider]    → scaleX from left
 *  - [data-banner-subtitle]   → blur + fade from below
 */
export const useProjectBannerAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const letters = container.querySelectorAll<HTMLElement>('[data-banner-letter]');
      const eyebrow = container.querySelector<HTMLElement>('[data-banner-eyebrow]');
      const titleWord = container.querySelector<HTMLElement>('[data-banner-title-word]');
      const divider = container.querySelector<HTMLElement>('[data-banner-divider]');
      const subtitle = container.querySelector<HTMLElement>('[data-banner-subtitle]');

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        },
      });

      // ── Eyebrow ──────────────────────────────────────────────────────────
      if (eyebrow) {
        tl.from(eyebrow, { autoAlpha: 0, y: 20, duration: 0.6 });
      }

      // ── "Nuestros" — letter by letter from random directions ───────────────
      if (letters.length > 0) {
        tl.from(
          letters,
          {
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.055,
            x: (i: number) => {
              const p = i % 4;
              return p === 0 ? -120 : p === 1 ? 120 : p === 2 ? -70 : 90;
            },
            y: (i: number) => {
              const p = i % 3;
              return p === 0 ? -100 : p === 1 ? 90 : -55;
            },
            rotation: (i: number) => {
              const p = i % 5;
              return p === 0 ? -90 : p === 1 ? 60 : p === 2 ? -45 : p === 3 ? 35 : -20;
            },
            scale: 0.1,
          },
          '<0.3',
        );
      }

      // ── "proyectos." — slides up as one block with a slight blur ──────────────
      if (titleWord) {
        tl.from(
          titleWord,
          {
            autoAlpha: 0,
            y: 60,
            filter: 'blur(6px)',
            duration: 0.65,
            ease: 'power2.out',
          },
          // starts while the last letters are still landing
          `-=${letters.length * 0.055 * 0.4}`,
        );
      }

      // ── Divider ──────────────────────────────────────────────────────────
      if (divider) {
        tl.from(
          divider,
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.5,
            ease: 'power2.out',
          },
          '<0.15',
        );
      }

      // ── Subtitle ─────────────────────────────────────────────────────────
      if (subtitle) {
        tl.from(
          subtitle,
          {
            autoAlpha: 0,
            y: 24,
            filter: 'blur(8px)',
            duration: 0.65,
          },
          '<0.15',
        );
      }
    },
    { scope: containerRef },
  );

  return { containerRef };
};
