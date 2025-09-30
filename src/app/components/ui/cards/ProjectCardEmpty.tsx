'use client';

import { useLenisStore } from '@/app/storage/lenisStore';
import { LuPlus } from 'react-icons/lu';

export const ProjectCardEmpty = () => {
  const { scrollTo } = useLenisStore();

  const scrollToContact = () => {
    scrollTo('contact');
  };

  return (
    <button
      onClick={scrollToContact}
      className='cursor-pointer group relative w-full h-full hover:scale-[1.02] transition-all duration-700 ease-out'
    >
      <div className='relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl px-5 pt-5 pb-3 w-full h-[300px] md:h-[250px] flex flex-col overflow-hidden border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-700'>
        {/* Holographic overlay */}
        <div className='absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.3),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2),transparent_50%)]' />
        </div>

        {/* Animated border gradient */}
        <div className='absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl group-hover:scale-150 transition-transform duration-1000' />
        <div className='absolute bottom-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-lg group-hover:scale-125 transition-transform duration-1000' />

        <div className='z-10 flex flex-col justify-center items-center h-full'>
          <LuPlus className='w-20 h-20 text-gray-400' />
        </div>

        {/* Glow Effect Background */}
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl' />
        <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-3xl' />

        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl' />
      </div>
    </button>
  );
};
