import { servicesData } from '@/app/data/services/services.data';
import { ServiceCard } from '../../ui/cards/ServiceCard';

export default function ServicesGrid() {
  return (
    <div className='w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4'>
      {servicesData.map((service, index) => {
        const isLastRow = index >= 3;
        const isAloneOnMobile = index === 4;

        const colSpanClass = [
          isLastRow ? 'lg:col-span-6' : 'lg:col-span-4',
          isAloneOnMobile ? 'sm:col-span-2 lg:col-span-6' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            className={colSpanClass}
          />
        );
      })}
    </div>
  );
}
