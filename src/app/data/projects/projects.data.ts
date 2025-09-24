import { Project } from '@/app/interfaces/projects/project.interface';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    type: 'own',
    website: 'https://example-ecommerce.com',
    github: 'https://github.com/moilab-web/ecommerce-platform',
    description:
      'Plataforma completa de comercio electrónico con sistema de pagos integrado',
  },
  {
    id: '2',
    title: 'Mobile App Design',
    type: 'collaboration',
    website: 'https://example-mobile.com',
    github: 'https://github.com/moilab-web/mobile-app-design',
    description: 'Diseño de aplicación móvil para startup de tecnología',
  },
  {
    id: '3',
    title: 'AI Dashboard',
    type: 'own',
    website: 'https://example-ai.com',
    description:
      'Dashboard inteligente con análisis predictivo y visualización de datos',
  },
  {
    id: '4',
    title: 'Brand Identity',
    type: 'collaboration',
    website: 'https://example-brand.com',
    description:
      'Identidad visual completa para empresa de servicios financieros',
  },
  {
    id: '5',
    title: 'Web3 Platform',
    type: 'own',
    website: 'https://example-web3.com',
    description: 'Plataforma descentralizada para trading de criptomonedas',
  },
  {
    id: '6',
    title: 'SaaS Analytics',
    type: 'collaboration',
    website: 'https://example-saas.com',
    description: 'Herramienta de análisis para empresas SaaS',
  },
];
