'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseStackingCardsOptions {
  /**
   * Pixels of each buried card that remain visible at the top of the stack.
   * ~10 % of a 460 px card → 48 px default.
   */
  peekPx?: number;
  /**
   * How many pixels the user must scroll to bring each card fully into place.
   */
  scrollPerCard?: number;
}

export const useStackingCards = ({
  peekPx = 48,
  scrollPerCard = 300,
}: UseStackingCardsOptions = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        '[data-service-card]',
        container
      );
      if (cards.length === 0) return;

      // The container fills the full viewport so no content below bleeds
      // through while the pin is active.
      const vh = window.innerHeight;

      // ── Container setup ─────────────────────────────────────────────────────
      gsap.set(container, {
        position: 'relative',
        height: vh,
        overflow: 'hidden',
        // High z-index so the pinned (position:fixed) container renders above
        // any element in subsequent sections that creates a stacking context
        // (e.g. elements with a CSS transform).
        zIndex: 50,
      });

      // ── Card setup ───────────────────────────────────────────────────────────
      // Card 0 is visible from the start (y = 0).
      // Cards 1-N all start just below the bottom of the viewport (y = vh),
      // hidden by overflow:hidden, and slide up sequentially.
      cards.forEach((card, index) => {
        gsap.set(card, {
          position: 'absolute',
          top: 0,
          width: '100%',
          y: index === 0 ? 0 : vh,
          zIndex: index + 1,
        });
      });

      // ── Sequential stacking timeline ─────────────────────────────────────────
      // Each card travels from y = vh to its final stacked slot (index * peekPx).
      // They run one after the other so each card fully lands before the next starts.
      const tl = gsap.timeline();

      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.to(
          card,
          {
            y: index * peekPx,
            ease: 'power2.inOut',
            duration: 1,
          },
          index - 1
        );
      });

      // ── ScrollTrigger ────────────────────────────────────────────────────────
      // Pin the full-viewport container for the entire animation, then release
      // so the next section (Projects) becomes visible.
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: `+=${(cards.length - 1) * scrollPerCard}`,
        pin: true,
        scrub: 1,
        animation: tl,
      });
    },
    { scope: containerRef }
  );

  return containerRef;
};
