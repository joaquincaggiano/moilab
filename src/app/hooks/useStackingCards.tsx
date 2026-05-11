'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Stacks [data-mobile-card] children inside a sticky viewport.
 * Each card slides up from below (y: 100% → 0%), fully covering the previous one.
 * Only runs on mobile (max-width: 639px).
 *
 * Usage:
 *   const { sectionRef, stickyRef } = useStackingCards<HTMLDivElement>();
 *
 *   <div ref={sectionRef}>                          ← gets dynamic height
 *     <div ref={stickyRef} class="sticky top-0 h-screen overflow-hidden">
 *       <div data-mobile-card class="absolute inset-0">Card 1</div>
 *       <div data-mobile-card class="absolute inset-0">Card 2</div>
 *     </div>
 *   </div>
 */
export const useStackingCards = <T extends HTMLElement = HTMLDivElement>() => {
  const sectionRef = useRef<T>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const sticky = stickyRef.current;
      if (!section || !sticky) return;

      const mm = gsap.matchMedia();

      mm.add('(max-width: 639px)', () => {
        const cards = Array.from(
          sticky.querySelectorAll<HTMLElement>('[data-mobile-card]')
        );

        // One full viewport of scroll per card transition
        gsap.set(section, { height: `${cards.length * 100}vh` });

        // All cards except the first start below the viewport
        gsap.set(cards.slice(1), { y: '100%' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${(cards.length - 1) * window.innerHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // Each card gets one equal slot in the timeline
        cards.slice(1).forEach((card, i) => {
          tl.to(card, { y: '0%', ease: 'none', duration: 1 }, i);
        });

        return () => {
          gsap.set(section, { clearProps: 'height' });
          gsap.set(cards, { clearProps: 'transform,y' });
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return { sectionRef, stickyRef };
};
