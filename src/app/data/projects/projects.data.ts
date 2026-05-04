import { Project } from '@/app/interfaces/projects/project.interface';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Decentraland - Career Quest',
    type: 'collaboration',
    website: 'https://decentraland.org/careerquest',
    description:
      'Landing page oficial del evento Career Quest de Decentraland, diseñada para atraer a desarrolladores y creadores del metaverso.',
    image: '/img/projects/decentraland.jpeg',
    year: '2025',
    category: 'Landing Page',
    role: 'Frontend Developer',
    challenge:
      'Crear una experiencia visual impactante que transmitiera la identidad futurista de Decentraland y capturara la atención de la comunidad Web3 en un tiempo muy ajustado.',
    solution:
      'Desarrollamos una landing page animada con microinteracciones y un diseño inmersivo que reflejaba el universo de Decentraland, optimizada para rendimiento y conversión.',
    tools: ['React', 'TypeScript', 'TailwindCSS'],
    highlights: [
      'Diseño 100% responsive con enfoque mobile-first',
      'Optimización de imágenes y assets para carga rápida',
      'Integración con el ecosistema de Decentraland',
    ],
  },
  {
    id: '2',
    title: 'Re-K Platform',
    type: 'collaboration',
    collaborator: 'desaway S.L.',
    website: 'https://www.re-k.eu/',
    description:
      'Plataforma digital para la rehabilitación energética de viviendas, que conecta propietarios, técnicos y financiadores en un único ecosistema.',
    image: '/img/projects/re-k.png',
    year: '2024',
    category: 'Plataforma Web',
    role: 'Full Stack Developer',
    challenge:
      'Diseñar y construir una plataforma compleja que gestionara flujos de múltiples tipos de usuarios (propietarios, técnicos, entidades financieras) con procesos regulatorios europeos de por medio.',
    solution:
      'Arquitectura modular con autenticación por roles, dashboards diferenciados y un flujo paso a paso que guía al usuario por todo el proceso de rehabilitación desde el diagnóstico hasta la financiación.',
    tools: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'TailwindCSS',
    ],
    highlights: [
      'Sistema de roles y permisos multi-usuario',
      'Dashboard de gestión de proyectos en tiempo real',
      'Integración con servicios de financiación europeos',
      'Flujo guiado de rehabilitación energética',
    ],
  },
  {
    id: '3',
    title: 'UJI Pride',
    type: 'collaboration',
    collaborator: 'desaway S.L.',
    website: 'https://apps.apple.com/es/app/uji-pride/id6469503897',
    description:
      'App informativa sobre el programa de diversidad afectivo-sexual y de género de la Universitat Jaume I, que centraliza recursos, eventos y noticias para la comunidad universitaria.',
    image: '/img/projects/uji-pride.png',
    year: '2024',
    category: 'App Móvil',
    role: 'Mobile Developer',
    challenge:
      'Crear una app accesible e inclusiva que sirviera como punto de referencia de información LGTBI+ para estudiantes y personal de la universidad',
    solution:
      'App nativa multiplataforma con diseño limpio y accesible, con un blog informativo, glosario de términos LGTBI+ y un directorio de recursos.',
    tools: ['React Native', 'TypeScript', 'i18n', 'iOS', 'Android'],
    highlights: [
      'Publicada en App Store y Google Play',
      'Soporte multiidioma (español, inglés, valenciano)',
      'Directorio de recursos actualizable en tiempo real',
      'Diseño accesible para usuarios en situación vulnerable',
    ],
  },
  {
    id: '4',
    title: 'Stop Xenofobia',
    type: 'collaboration',
    collaborator: 'desaway S.L.',
    website: 'https://apps.apple.com/es/app/stop-xenofobia/id6470800794',
    description:
      'APP institucional de la UPV que facilita el acceso a recursos legales y de apoyo ante situaciones de racismo y xenofobia, desarrollada bajo el Vicerrectorado de Arte, Ciencia, Tecnología y Sociedad.',
    image: '/img/projects/stop-xenofobia.png',
    year: '2024',
    category: 'App Móvil',
    role: 'Mobile Developer',
    challenge:
      'Construir una herramienta de utilidad pública que fuera clara, directa y accesible para personas en situaciones de vulnerabilidad, coordinando con la Unidad de Igualdad de la UPV para validar los contenidos.',
    solution:
      'App con navegación simplificada y contenido organizado por tipo de recurso (legal, psicológico, social), con soporte multiidioma y contacto directo con los servicios de apoyo disponibles.',
    tools: ['React Native', 'TypeScript', 'i18n', 'iOS', 'Android'],
    highlights: [
      'Publicada en App Store y Google Play',
      'Soporte multiidioma (español, inglés, valenciano)',
      'Directorio de recursos actualizable en tiempo real',
      'Diseño accesible para usuarios en situación vulnerable',
    ],
  },
  {
    id: '5',
    title: 'Pocket Job',
    type: 'own',
    collaborator: 'desaway S.L.',
    description:
      'Aplicación móvil enfocada a la oferta y demanda de trabajos y servicios profesionales o de buscavidas.',
    image: '/img/projects/pocketjob.png',
    year: '2026',
    category: 'App Móvil',
    role: 'Full Stack Developer',
    challenge:
      'Crear una aplicación móvil que permita a los usuarios ofrecer y buscar trabajos y servicios profesionales o de buscavidas de forma sencilla y eficiente.',
    solution:
      'App móvil con un sistema de oferta y demanda de trabajos y servicios profesionales o de buscavidas, con un sistema de notificaciones y un sistema de chat para la comunicación entre usuarios.',
    tools: [
      'React Native',
      'TypeScript',
      'Expo',
      'TailwindCSS',
      'Nest.js',
      'PostgreSQL',
      'Stripe',
      'Socket.io',
    ],
    highlights: [
      'Busqueda de servicios profesionales o de buscavidas',
      'Filtros de búsqueda avanzados',
      'Notificaciones y chat para la comunicación entre usuarios',
      'Sistema de pago con Stripe para la oferta de servicios profesionales o de buscavidas',
    ],
  },
];
