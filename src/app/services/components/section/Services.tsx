'use client';

import { ServiceCard } from '@/app/services/components/card/ServiceCard';
import { servicesData } from '@/app/data/services/services.data';
import { SectionLayout } from '@/app/components/sections/SectionLayout';
import { useBlurHook } from '@/app/hooks/useBlurHook';

export default function Services() {
  const containerRef = useBlurHook<HTMLDivElement>({
    selector: '[data-service-card]',
    yFrom: 100,
    duration: 0.85,
    blur: 10,
    start: 'top 90%',
  });

  return (
    <SectionLayout id='services'>
      <div ref={containerRef} className='relative w-full'>
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className='sticky min-h-screen flex items-center py-10'
            style={{ top: `${index * 28}px`, zIndex: index + 1 }}
          >
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
