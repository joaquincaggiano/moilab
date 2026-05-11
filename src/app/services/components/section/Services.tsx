'use client';

import type React from 'react';
import { useHorizontalScroll } from '@/app/hooks/useHorizontalScroll';
import { servicesData } from '@/app/data/services/services.data';
import { panelThemes, serviceIcons } from '@/app/services/services.constants';
import ServiceCard from '@/app/services/components/card/ServiceCard';
import ServiceBanner from '@/app/services/components/card/ServiceBanner';
import ServicesMobile from '@/app/services/components/mobile/ServicesMobile';

export default function Services() {
  const { containerRef, innerRef } = useHorizontalScroll<HTMLElement>({
    scrub: 1.2,
    start: 'top top',
  });

  return (
    <div id='services'>
      {/* Desktop: horizontal scroll */}
      <section
        ref={containerRef}
        className='hidden lg:block relative w-full h-screen overflow-hidden bg-slate-950'
      >
        <div
          ref={innerRef}
          className='flex h-full will-change-transform [width:var(--track-w)]'
          style={
            {
              '--track-w': `${(servicesData.length + 1) * 100}vw`,
            } as React.CSSProperties
          }
        >
          <ServiceBanner />
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              theme={panelThemes[index]}
              icon={serviceIcons[index]}
            />
          ))}
        </div>
      </section>

      {/* Mobile: cinematic stacking cards */}
      <ServicesMobile />
    </div>
  );
}
