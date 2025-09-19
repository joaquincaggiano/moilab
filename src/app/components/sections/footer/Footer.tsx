'use client';

import {
  LuFlame,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from 'react-icons/lu';
import LiNavbar from '../../ui/navbar/LiNavbar';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: LuGithub,
      href: 'https://github.com',
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: LuLinkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: LuMail,
      href: 'mailto:moilab@gmail.com',
      color: 'hover:text-red-400',
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  const services = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'Landing Pages',
    'Consultoría IT',
  ];

  return (
    <footer className='relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.05)_0%,transparent_70%)]' />
      <div className='absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(96,165,250,0.03)_0deg,rgba(168,85,247,0.03)_90deg,rgba(96,165,250,0.03)_180deg,rgba(168,85,247,0.03)_270deg)]' />

      <div className='relative z-10 container mx-auto px-5 sm:px-10 pt-16 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Brand Section */}
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
                <span>moilab@gmail.com</span>
              </div>
              <div className='flex items-center gap-3 text-gray-400 text-sm'>
                <LuPhone className='w-4 h-4 text-blue-400' />
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className='flex items-center gap-3 text-gray-400 text-sm'>
                <LuMapPin className='w-4 h-4 text-blue-400' />
                <span>Valencia, España</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-white'>
              Enlaces Rápidos
            </h3>
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

          {/* Services */}
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-white'>Servicios</h3>
            <ul className='space-y-3'>
              {services.map(service => (
                <li key={service}>
                  <span className='text-gray-400 text-sm'>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-white'>Síguenos</h3>
            <div className='flex gap-4'>
              {socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 ${social.color} group`}
                    aria-label={social.name}
                  >
                    <Icon className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' />
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            {/* <div className='space-y-3'>
              <h4 className='text-sm font-medium text-white'>
                Mantente actualizado
              </h4>
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
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-8 border-t border-gray-800/50'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © {currentYear} MoiLab. Todos los derechos reservados.
            </p>

            <div className='flex gap-6 text-sm'>
              <a
                href='#'
                className='text-gray-500 hover:text-blue-400 transition-colors duration-300'
              >
                Política de Privacidad
              </a>
              <a
                href='#'
                className='text-gray-500 hover:text-blue-400 transition-colors duration-300'
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
