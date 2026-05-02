'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AUTO_SPEED = 0.20; // degrees per ticker frame (~9 deg/s at 60fps)

interface UseCarouselGSAPOptions {
  count: number;
}

export function useCarouselGSAP({ count }: UseCarouselGSAPOptions) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef(0);

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

      // ── Entrance: section fades in on scroll ──────────────────────────────
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
      });

      // ── Auto-rotation + opacity via gsap.ticker ───────────────────────────
      const updateOpacity = () => {
        cards.forEach((card, i) => {
          const cardAngle = i * ANGLE;
          const total = rotRef.current % 360;
          const rel = (((cardAngle + total) % 360) + 360) % 360;
          const norm = rel > 180 ? 360 - rel : rel;
          const opacity = Math.max(0.15, 1 - norm / 180);
          gsap.set(card, { opacity });
        });
      };

      const onTick = () => {
        rotRef.current += AUTO_SPEED;
        gsap.set(track, { rotateY: rotRef.current });
        updateOpacity();
      };

      gsap.ticker.add(onTick);

      // ── Scroll: add extra rotation on scroll progress ─────────────────────
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: self => {
          rotRef.current += self.getVelocity() * 0.003;
        },
      });

      return () => gsap.ticker.remove(onTick);
    },
    { scope: sectionRef }
  );

  return { sectionRef, trackRef };
}
