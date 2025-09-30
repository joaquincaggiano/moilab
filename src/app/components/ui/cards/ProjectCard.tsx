'use client';

import { Project } from '@/app/interfaces/projects/project.interface';
import { LuGithub, LuSquareArrowOutUpRight } from 'react-icons/lu';

interface Props {
  project: Project;
  size?: 'small' | 'large';
}

export const ProjectCard = ({ project, size = 'small' }: Props) => {
  const { title, description, github, website, type } = project;

  const handleClick = (site: string) => {
    window.open(site, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      className={`group relative w-full h-full ${website && 'hover:scale-[1.02]'} transition-all duration-700 ease-out`}
    >
      <div
        className={`relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl px-5 pt-5 pb-3 w-full h-[300px] ${size === 'small' ? 'md:h-[250px]' : 'md:h-[350px]'} flex flex-col overflow-hidden border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-700`}
      >
        {/* Holographic overlay */}
        <div className='absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.3),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2),transparent_50%)]' />
        </div>

        {/* Animated border gradient */}
        <div className='absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl group-hover:scale-150 transition-transform duration-1000' />
        <div className='absolute bottom-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-lg group-hover:scale-125 transition-transform duration-1000' />

        <div className='relative z-10 flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-6'>
            {/* Title */}
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-700'>
                {title}
              </h3>

              <div className='w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-700' />
            </div>

            {/* Description */}
            {description && (
              <div className='flex-1'>
                <p className='text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500'>
                  {description}
                </p>
              </div>
            )}
          </div>

          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center space-x-3'>
              <div
                className={`w-3 h-3 rounded-full ${
                  type === 'own'
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/30'
                    : 'bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-400/30'
                }`}
              />
              <span className='text-gray-400 text-xs font-medium group-hover:text-gray-300 transition-colors duration-500'>
                {type === 'own' ? 'Proyecto Propio' : 'Colaboración'}
              </span>
            </div>

            <div className='flex items-center'>
              {github && (
                <button
                  onClick={() => handleClick(github)}
                  className='cursor-pointer text-gray-400 hover:text-white hover:bg-gray-500 rounded-full p-2'
                >
                  <LuGithub className='w-4 h-4 ' />
                </button>
              )}
              {website && (
                <button
                  onClick={() => handleClick(website)}
                  className='cursor-pointer text-gray-400 hover:text-white hover:bg-gray-500 rounded-full p-2'
                >
                  <LuSquareArrowOutUpRight className='w-4 h-4' />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Glow Effect Background */}
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl' />
        <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-3xl' />

        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl' />
      </div>
    </article>
  );
};
