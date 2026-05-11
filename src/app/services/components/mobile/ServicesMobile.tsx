'use client';

import { servicesData } from '@/app/data/services/services.data';
import { panelThemes, serviceIcons } from '@/app/services/services.constants';
import ServiceCard from '@/app/services/components/card/ServiceCard';
import ServiceBanner from '@/app/services/components/card/ServiceBanner';

export default function ServicesMobile() {
  return (
    <div className='lg:hidden bg-slate-950'>
      <div className='sticky top-0 h-screen overflow-hidden'>
        <ServiceBanner mobile />
      </div>
      {servicesData.map((service, index) => (
        <div key={service.id} className='sticky top-0 h-screen overflow-hidden'>
          <ServiceCard
            service={service}
            theme={panelThemes[index]}
            icon={serviceIcons[index]}
            mobile
          />
        </div>
      ))}
    </div>
  );
}
