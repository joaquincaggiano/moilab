'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface UseCarouselOptions {
  count: number;
}

export function useCarousel({ count }: UseCarouselOptions) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const ANGLE = 360 / count;

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        '[data-carousel-card]',
        section
      );

      // ── Entrance: animate the stage (child), never the pinned section ────
      // Animating `y` on the pinned element itself causes a jump when
      // ScrollTrigger switches it to position:fixed at `top top`.
      const stage = track.parentElement;
      gsap.from(stage, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
      });

      // ── Opacity update driven by rotation progress ────────────────────────
      const updateOpacity = (rotation: number) => {
        cards.forEach((card, i) => {
          const cardAngle = i * ANGLE;
          const total = rotation % 360;
          const rel = (((cardAngle + total) % 360) + 360) % 360;
          const norm = rel > 180 ? 360 - rel : rel;
          const opacity = Math.max(0.15, 1 - norm / 180);
          gsap.set(card, { opacity });
        });
      };

      // Set correct initial opacities immediately so there's no jump when
      // the ScrollTrigger fires for the first time at center center.
      updateOpacity(0);

      // ── Scroll-driven full rotation: pin section for one complete 360° ────
      const mm = gsap.matchMedia();

      const buildTimeline = (scrub: boolean | number) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=2000',
            pin: true,
            scrub,
            invalidateOnRefresh: true,
            onUpdate: self => updateOpacity(self.progress * 360),
          },
        });
        tl.to(track, { rotateY: 360, ease: 'none' });
      };

      mm.add('(max-width: 639px)', () => buildTimeline(true));
      mm.add('(min-width: 640px)', () => buildTimeline(1));
    },
    { scope: sectionRef }
  );

  return { sectionRef, trackRef };
}
