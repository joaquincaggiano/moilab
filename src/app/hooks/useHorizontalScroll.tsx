'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface UseHorizontalScrollOptions {
  /** CSS selector for the inner element that moves horizontally.
   *  If omitted, the root element itself is moved. */
  innerSelector?: string;
  /** Extra scroll distance (in px) added after the content width. Default: 0 */
  extraScroll?: number;
  /** Scrub smoothness: true = instant, number = lag in seconds. Default: 1 */
  scrub?: boolean | number;
  /** GSAP ease for the horizontal tween — must stay "none" for correct 1:1 mapping. */
  ease?: 'none';
  /** ScrollTrigger start string for the pin. Default: "top top" */
  start?: string;
}

/**
 * Pins a container and scrolls its inner content horizontally
 * as the user scrolls vertically ("fake" horizontal scroll).
 *
 * Returns two refs:
 *  - `containerRef` → attach to the outer wrapper that will be pinned.
 *  - `innerRef`     → attach to the element that moves left (the horizontal track).
 *    Only needed when you prefer refs over `innerSelector`.
 *
 * Usage (with refs):
 *   const { containerRef, innerRef } = useHorizontalScroll();
 *   <section ref={containerRef}>
 *     <div ref={innerRef} className="flex">
 *       <div>Panel 1</div>
 *       <div>Panel 2</div>
 *     </div>
 *   </section>
 *
 * Usage (with selector):
 *   const { containerRef } = useHorizontalScroll({ innerSelector: '.track' });
 *   <section ref={containerRef}>
 *     <div className="track flex">...</div>
 *   </section>
 */
export const useHorizontalScroll = <
  TContainer extends HTMLElement = HTMLElement,
  TInner extends HTMLElement = HTMLDivElement,
>(
  options: UseHorizontalScrollOptions = {}
) => {
  const containerRef = useRef<TContainer>(null);
  const innerRef = useRef<TInner>(null);

  const {
    innerSelector,
    extraScroll = 0,
    scrub = 1,
    ease = 'none',
    start = 'top top',
  } = options;

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const track: HTMLElement | null = innerSelector
        ? container.querySelector<HTMLElement>(innerSelector)
        : innerRef.current;

      if (!track) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 640px)', () => {
        // How far the track needs to travel to reveal all its content
        const getScrollDistance = () =>
          -(track.scrollWidth - container.offsetWidth + extraScroll);

        gsap.to(track, {
          x: getScrollDistance,
          ease,
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub,
            start,
            // end adjusts dynamically so the whole track is visible before unpinning
            end: () =>
              `+=${track.scrollWidth - container.offsetWidth + extraScroll}`,
            invalidateOnRefresh: true,
            // markers: true, // uncomment during development
          },
        });
      });

      return () => mm.revert();
    },
    {
      scope: containerRef,
      dependencies: [innerSelector, extraScroll, scrub, ease, start],
    }
  );

  return { containerRef, innerRef };
};
