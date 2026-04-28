'use client';

import { ServiceCard } from '@/app/services/components/card/ServiceCard';
import { servicesData } from '@/app/data/services/services.data';
import { useStackingCards } from '@/app/hooks/useStackingCards';

export default function ServicesGrid() {
  const containerRef = useStackingCards({ peekPx: 48, scrollPerCard: 500 });

  return (
    <div
      ref={containerRef}
      className='w-full mt-10 relative overflow-hidden'
      data-services-stack
    >
      {servicesData.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
