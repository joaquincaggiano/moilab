'use client';

import { Service } from '@/app/interfaces/services/service.interface';
import Image from 'next/image';

interface Props {
  card: Service;
}

export const ServiceCard = ({ card }: Props) => {
  return (
    <div className='group w-full h-full relative p-1'>
      {/* Glow Effect Background */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-2xl blur-md opacity-60 transition-all duration-1000 group-hover:opacity-80 group-hover:duration-200' />

      {/* Main Card */}
      <div className='relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-2 sm:p-4 md:p-6 border border-gray-700/50 transition-all duration-500 h-full flex flex-col md:flex-row overflow-hidden group-hover:border-transparent group-hover:scale-[1.02] group-hover:-translate-y-1'>
        {/* Holographic overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

        {/* Animated border gradient */}
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-blue-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

        {/* Content Container */}
        <div className='relative z-10 flex flex-col md:flex-row h-full'>
          {/* Lado izquierdo - Contenido */}
          <div className='w-full h-full lg:w-2/5 p-4 lg:p-6 flex flex-col justify-between'>
            {/* Header */}
            <div className='mb-4'>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400'>
                {card.title}
              </h3>

              <p className='text-gray-300 text-sm sm:text-base font-medium mb-4 leading-relaxed'>
                {card.description}
              </p>
            </div>

            {/* Ideal for section */}
            <div className='mt-auto'>
              <div className='inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-2' />
                <p className='text-blue-300 text-xs sm:text-sm font-medium'>
                  Ideal para: {card.idealFor}
                </p>
              </div>
            </div>
          </div>

          {/* Lado derecho - Imagen */}
          <div className='w-full lg:w-3/5 p-4 lg:p-6 hidden lg:block'>
            <div className='relative w-full h-full rounded-xl overflow-hidden group/image'>
              {/* Image glow effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500' />

              {/* Image container */}
              <div className='relative w-full h-full rounded-xl overflow-hidden'>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={1000}
                  priority
                  className='w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110'
                />

                {/* Image overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500' />
              </div>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        <div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </div>
    </div>
  );
};
