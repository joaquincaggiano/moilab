'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectsData } from '@/app/data/projects/projects.data';

gsap.registerPlugin(ScrollTrigger);

const RADIUS = 460;
const AUTO_SPEED = 0.10; // degrees per ticker frame (~9 deg/s at 60fps)

export default function ProjectsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef(0);

  const projects = projectsData.filter(p => p.image);
  const COUNT = projects.length;
  const ANGLE = 360 / COUNT;

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

  return (
    <section
      ref={sectionRef}
      className='relative w-full bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 overflow-hidden'
    >
      {/* 3-D stage */}
      <div
        className='relative w-full flex items-center justify-center'
        style={{ height: '440px', perspective: '1400px' }}
      >
        <div
          ref={trackRef}
          className='relative'
          style={{ width: 0, height: 0, transformStyle: 'preserve-3d' }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-carousel-card
              className='absolute w-[260px] h-[360px]'
              style={{
                transform: `rotateY(${i * ANGLE}deg) translateZ(${RADIUS}px)`,
                marginLeft: '-130px',
                marginTop: '-180px',
              }}
            >
              <div className='relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl'>
                <Image
                  src={project.image!}
                  alt={project.title}
                  fill
                  sizes='260px'
                  className='object-cover'
                />
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent' />

                {/* Card info */}
                <div className='absolute bottom-0 left-0 right-0 p-5 text-white'>
                  <span className='text-[10px] text-emerald-400 uppercase tracking-widest font-medium'>
                    {project.type === 'collaboration'
                      ? 'Colaboración'
                      : 'Propio'}
                  </span>
                  <h3 className='font-bold text-base leading-tight mt-1'>
                    {project.title}
                  </h3>
                  {project.collaborator && (
                    <p className='text-xs text-slate-400 mt-0.5'>
                      {project.collaborator}
                    </p>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block text-xs text-emerald-400 mt-3 hover:underline'
                    >
                      Ver proyecto →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
