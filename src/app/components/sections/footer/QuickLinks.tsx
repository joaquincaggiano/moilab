import { quickLinks } from '@/app/data/footer/footer.data';
import LiNavbar from '../../ui/navbar/LiNavbar';

export const QuickLinks = () => {
  return (
    <div className='space-y-6'>
      <h3 className='text-lg font-semibold text-white'>Enlaces Rápidos</h3>
      <ul className='space-y-3'>
        {quickLinks.map(link => (
          <LiNavbar
            key={link.href}
            href={link.href}
            text={link.name}
            className='text-sm text-gray-400 font-regular'
          />
        ))}
      </ul>
    </div>
  );
};
