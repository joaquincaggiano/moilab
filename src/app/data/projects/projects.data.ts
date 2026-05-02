import { Project } from '@/app/interfaces/projects/project.interface';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Decentraland - Career Quest',
    type: 'collaboration',
    website: 'https://decentraland.org/careerquest',
    description: 'Landing page del evento de Decentraland - Career Quest',
    image: '/img/projects/decentraland.jpeg',
  },
  {
    id: '2',
    title: 'Re-K Platform',
    type: 'collaboration',
    collaborator: 'desaway S.L.',
    website: 'https://www.re-k.eu/',
    description: 'Plataforma de rehabilitación energética de viviendas',
    image: '/img/projects/re-k.png',
  },
  {
    id: '3',
    title: 'UJI Pride',
    type: 'collaboration',
    collaborator: 'desaway S.L.',
    website: 'https://apps.apple.com/es/app/uji-pride/id6469503897',
    description:
      'App enfocada a la información sobre el programa de diversidad afectivo sexual y de género de la Universitat Jaume I, UJI Pride.',
    image: '/img/projects/uji-pride.png',
  },
  {
    id: '4',
    title: 'Stop Xenofobia',
    type: 'collaboration',
    collaborator: 'desaway S.L.',
    website: 'https://apps.apple.com/es/app/stop-xenofobia/id6470800794',
    description:
      'APP Stop Xenofobia facilita la información sobre los recursos disponibles para la garantía de los derechos humanos ante el racismo y la xenofobia. La APP Stop Xenofobia es un recurso de la Unidad de Igualdad bajo la dirección del Vicerrectorado de Arte, Ciencia, Tecnología y Sociedad de la UPV.',
    image: '/img/projects/stop-xenofobia.png',
  },
  {
    id: '5',
    title: 'Pocket Job',
    type: 'own',
    description: 'Aplicación móvil para gestión de ofertas laborales y búsqueda de empleo.',
    image: '/img/projects/pocketjob.png',
  },
];
