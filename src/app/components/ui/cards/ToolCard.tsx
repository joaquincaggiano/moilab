'use client';

import { ToolData } from '@/app/interfaces/tools/tools.interface';

interface Props {
  tool: ToolData;
  index: number;
}

export const ToolCard = ({ tool, index }: Props) => {
  const handleItemClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={() => handleItemClick(tool.href)}
      className='group relative cursor-pointer'
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards',
      }}
    >
      {/* Glow Effect Background */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${tool.color}`}
      />

      {/* Main Card */}
      <div
        className={`relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-transparent transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-3 ${tool.glowColor} group-hover:shadow-2xl ${tool.hoverGlow}`}
      >
        {/* Holographic overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

        {/* Content */}
        <div className='relative flex flex-col items-center space-y-4'>
          {/* Icon Container */}
          <div
            className={`relative p-4 rounded-xl bg-gradient-to-br ${tool.color}`}
          >
            <div className='absolute inset-0 bg-black/20 rounded-xl' />
            {tool.node}

            {/* Icon glow */}
            <div className='absolute inset-0 bg-gradient-to-br rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500' />
          </div>

          {/* Tech Name */}
          <h3 className='font-bold text-gray-100 text-center text-sm tracking-wider uppercase group-hover:text-white transition-colors duration-300'>
            {tool.title}
          </h3>

          {/* Data stream effect */}
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        </div>
      </div>
    </button>
  );
};
