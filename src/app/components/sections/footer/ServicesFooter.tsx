import { servicesFooter } from '@/app/data/footer/footer.data';

export const ServicesFooter = () => {
  return (
    <div className='space-y-6'>
      <h3 className='text-lg font-semibold text-white'>Servicios</h3>
      <ul className='space-y-3'>
        {servicesFooter.map(service => (
          <li key={service}>
            <span className='text-gray-400 text-sm'>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
