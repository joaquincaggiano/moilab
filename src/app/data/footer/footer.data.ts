import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu';

export const quickLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
];

export const servicesFooter = [
  'Landing Pages',
  'Aplicaciones Móviles',
  'Sitios web institucionales',
  'Diseño web',
  'Mantenimiento',
  'Software personalizado',
];

export const socialLinks = [
  {
    name: 'GitHub',
    icon: LuGithub,
    href: 'https://github.com/moilab-web',
    color: 'hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    icon: LuLinkedin,
    href: 'https://www.linkedin.com/company/moilab-web',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    icon: LuInstagram,
    href: 'https://www.instagram.com/moilab.web/',
    color: 'hover:text-pink-400',
  },
];
