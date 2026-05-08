'use client';

import { useStackingCards } from '@/app/hooks/useStackingCards';
import { servicesData } from '@/app/data/services/services.data';
import { panelThemes, serviceIcons } from '@/app/services/services.constants';
import ServiceCard from '@/app/services/components/card/ServiceCard';
import ServiceBanner from '@/app/services/components/card/ServiceBanner';

export default function ServicesMobile() {
  const { sectionRef, stickyRef } = useStackingCards<HTMLDivElement>();

  return (
    <div ref={sectionRef} className='sm:hidden bg-slate-950'>
      <div ref={stickyRef} className='sticky top-0 h-screen overflow-hidden'>
        {/* Banner — first in the stack, gets covered by card 1 */}
        <div data-mobile-card className='absolute inset-0' style={{ zIndex: 0 }}>
          <ServiceBanner mobile />
        </div>

        {servicesData.map((service, index) => (
          <div
            key={service.id}
            data-mobile-card
            className='absolute inset-0'
            style={{ zIndex: index + 1 }}
          >
            <ServiceCard
              service={service}
              theme={panelThemes[index]}
              icon={serviceIcons[index]}
              mobile
            />
          </div>
        ))}
      </div>
    </div>
  );
}
