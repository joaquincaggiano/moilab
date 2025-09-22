import { LuFlame, LuInstagram, LuMail, LuMapPin } from 'react-icons/lu';

export const BrandSection = () => {
  return (
    <div className='lg:col-span-1 space-y-6'>
      <div className='flex items-center gap-3'>
        <div className='relative'>
          <LuFlame className='w-8 h-8 text-blue-400' />
          <div className='absolute inset-0 bg-blue-400/20 blur-lg rounded-full' />
        </div>
        <span className='text-2xl font-bold text-white'>MoiLab</span>
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
          <span>@moilab</span>
        </div>
        <div className='flex items-center gap-3 text-gray-400 text-sm'>
          <LuMapPin className='w-4 h-4 text-blue-400' />
          <span>Valencia, España</span>
        </div>
      </div>
    </div>
  );
};
