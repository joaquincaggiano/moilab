'use client';

import { useStackingCards } from '@/app/hooks/useStackingCards';
import { servicesData } from '@/app/data/services/services.data';
import { panelThemes, serviceIcons } from '@/app/services/services.constants';
import ServicesMobileCard from './ServicesMobileCard';
import ServicesMobileHeader from './ServicesMobileHeader';

export default function ServicesMobile() {
  const { sectionRef, stickyRef } = useStackingCards<HTMLDivElement>();

  return (
    // sectionRef gets dynamic height from GSAP (cards.length * 100vh)
    <div ref={sectionRef} className='sm:hidden bg-slate-950'>
      {/* Sticky viewport — all cards are absolutely stacked inside */}
      <div
        ref={stickyRef}
        className='sticky top-0 h-screen overflow-hidden'
      >
        {/* Header panel — z-index 0, gets covered first */}
        <div data-mobile-card className='absolute inset-0' style={{ zIndex: 0 }}>
          <ServicesMobileHeader />
        </div>

        {/* Each card has a higher z-index so it fully covers the previous one */}
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            data-mobile-card
            className='absolute inset-0'
            style={{ zIndex: index + 1 }}
          >
            <ServicesMobileCard
              service={service}
              theme={panelThemes[index]}
              icon={serviceIcons[index]}
              total={servicesData.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
