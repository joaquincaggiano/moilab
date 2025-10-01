import type { Service } from '../../interfaces/services/service.interface';

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Landing Pages',
    description:
      'Páginas de conversión optimizadas que transforman visitantes en clientes. Diseño centrado en UX, velocidad de carga optimizada y integración con herramientas de marketing para maximizar tu ROI.',
    image:
      '/img/services/landing-pages.png',
    idealFor: 'Startups',
  },
  {
    id: 2,
    title: 'Aplicaciones Móviles',
    description:
      'Apps nativas e híbridas con React Native. Interfaces intuitivas, rendimiento optimizado, integración con APIs y publicación en App Store y Google Play.',
    image:
      '/img/services/app-mobile.png',
    idealFor: 'Negocios digitales',
  },
  {
    id: 3,
    title: 'Sitios web institucionales',
    description:
      'Presencia digital corporativa completa con Next.js y TypeScript. CMS integrado, SEO optimizado, diseño responsive y arquitectura escalable.',
    image:
      '/img/services/institution-web.png',
    idealFor: 'Empresas ',
  },
  {
    id: 4,
    title: 'Mantenimiento',
    description:
      'Mantenemos tu aplicación, sitio web o software funcionando perfectamente. Actualizaciones de funcionalidades, corrección de bugs, optimización de rendimiento y adaptación a nuevas versiones de tecnologías para que tu proyecto siempre esté actualizado.',
    image:
      '/img/services/maintenance.png',
    idealFor: 'Proyectos existentes',
  },
  {
    id: 5,
    title: 'Software personalizado',
    description:
      'Creamos la solución perfecta para tu requerimiento específico. Analizamos tus necesidades y desarrollamos software a medida que se adapte exactamente a tu proceso de negocio.',
    image:
      '/img/services/custom-software.png',
    idealFor:
      'Startups - Empresas',
  },
];
