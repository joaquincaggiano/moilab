import { servicesData } from '@/app/data/services/services.data';
import { ServiceCard } from '../../ui/cards/ServiceCard';

export default function ServicesGrid() {
  return (
    <div className='w-full mt-10 flex flex-col gap-5' data-services-stack>
      {servicesData.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
