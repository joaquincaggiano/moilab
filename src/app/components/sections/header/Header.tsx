'use client';

import Image from 'next/image';
import { LuMenu, LuX } from 'react-icons/lu';
import { useState } from 'react';
import LiNavbar from '../../ui/navbar/LiNavbar';

const links = [
  {
    href: '#home',
    text: 'Inicio',
  },
  {
    href: '#services',
    text: 'Servicios',
  },
  {
    href: '#projects',
    text: 'Proyectos',
  },
  {
    href: '#contact',
    text: 'Contacto',
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl backdrop-blur-xl border border-gray-400/20 rounded-2xl sm:rounded-full z-50 shadow-lg shadow-gray-900/10 transition-all duration-300 ease-in-out'>
      {/* Header principal */}
      <div className='flex items-center justify-between py-4 px-6'>
        <div className='flex items-center gap-2'>
          <Image
            src='/img/logos/moilab-logo.png'
            alt='Moilab'
            width={150}
            height={100}
          />
        </div>

        <button
          className='sm:hidden'
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? (
            <LuX className='w-8 h-8 text-dark-primary' />
          ) : (
            <LuMenu className='w-8 h-8 text-dark-primary' />
          )}
        </button>

        {/* Navbar web */}
        <nav className='hidden sm:block'>
          <ul className='flex items-center gap-8'>
            {links.map(link => (
              <LiNavbar
                key={link.href}
                href={link.href}
                text={link.text}
                className='text-sm lg:text-base text-white font-medium'
              />
            ))}
          </ul>
        </nav>
      </div>

      {/* Navbar móvil */}
      <nav
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className='flex flex-col justify-end items-end px-6 pb-4 space-y-3'>
          {links.map(link => (
            <LiNavbar
              key={link.href}
              href={link.href}
              text={link.text}
              onClick={() => setIsMobileMenuOpen(false)}
              className='text-sm text-white font-medium'
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
