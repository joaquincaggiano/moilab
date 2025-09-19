import { socialLinks } from '@/app/data/footer/footer.data';
import React from 'react';
import { SocialLinkButton } from '../../ui/buttons/SocialLinkButton';

export const SocialLinksList = () => {
  return (
    <div className='space-y-6'>
      <h3 className='text-lg font-semibold text-white'>Síguenos</h3>
      <div className='flex gap-4'>
        {socialLinks.map(social => {
          const Icon = social.icon;
          return (
            <SocialLinkButton
              key={social.name}
              name={social.name}
              href={social.href}
              color={social.color}
              icon={Icon}
            />
          );
        })}
      </div>

      {/* Newsletter */}
      {/* <div className='space-y-3'>
        <h4 className='text-sm font-medium text-white'>Mantente actualizado</h4>
        <div className='flex flex-col gap-2'>
          <input
            type='email'
            placeholder='Tu email'
            className='w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-gray-800/70 transition-all duration-300'
          />
          <button className='w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>
            Suscribirse
          </button>
        </div>
      </div> */}
    </div>
  );
};
