import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu';

export const quickLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
];

export const servicesFooter = [
  'Desarrollo Web',
  'Aplicaciones Móviles',
  'Landing Pages',
  'Consultoría IT',
];

export const socialLinks = [
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
    name: 'Instagram',
    icon: LuInstagram,
    href: 'https://instagram.com',
    color: 'hover:text-pink-400',
  },
];
