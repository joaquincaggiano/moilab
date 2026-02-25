import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { LuInstagram, LuMail, LuMapPin } from 'react-icons/lu';

export const BrandSection = () => {
  return (
    <div className='lg:col-span-1 space-y-6'>
      <div className='flex items-center gap-3'>
        <Image
          src='/img/logos/moilab-logo.png'
          alt='Moilab'
          width={150}
          height={100}
        />
      </div>

      <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
        Desarrollamos software personalizado y experiencias digitales que
        impulsan tu negocio hacia el futuro.
      </p>

      {/* Contact Info */}
      <div className='space-y-3'>
        <div className='flex items-center gap-3 text-gray-400 text-sm'>
          <LuMail className='w-4 h-4 text-blue-400' />
          <span>moilab.web@gmail.com</span>
        </div>
        <div className='flex items-center gap-3 text-gray-400 text-sm'>
          <LuInstagram className='w-4 h-4 text-blue-400' />
          <span>@moilab.web</span>
        </div>
        <div className='flex items-center gap-3 text-gray-400 text-sm'>
          <LuMapPin className='w-4 h-4 text-blue-400' />
          <span>Valencia, España</span>
        </div>
        <div className='flex items-center gap-3 text-gray-400 text-sm'>
          <FaWhatsapp className='w-4 h-4 text-blue-400' />
          <span>+34 624 750 408</span>
        </div>
      </div>
    </div>
  );
};
