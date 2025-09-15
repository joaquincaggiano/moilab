import { ToolData } from '@/app/interfaces/tools/tools.interface';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiNextui,
  SiPrisma,
  SiTypeorm,
} from 'react-icons/si';

export const toolsData: ToolData[] = [
  {
    node: (
      <SiHtml5
        className='w-10 h-10'
        // color='#E34F26'
      />
    ),
    title: 'HTML',
    href: 'https://www.html.com',
    color: 'from-orange-400 via-red-500 to-orange-600',
    glowColor: 'shadow-orange-500/50',
    hoverGlow: 'group-hover:shadow-orange-400/80',
  },
  {
    node: (
      <SiCss3
        className='w-10 h-10'
        // color='#663399'
      />
    ),
    title: 'CSS',
    href: 'https://developer.mozilla.org/es/docs/Web/CSS',
    color: 'from-purple-400 via-purple-500 to-purple-600',
    glowColor: 'shadow-purple-500/50',
    hoverGlow: 'group-hover:shadow-purple-400/80',
  },
  {
    node: (
      <SiJavascript
        className='w-10 h-10 rounded-md'
        color='#ffffff'
        // color='#F7DF1E'
      />
    ),
    title: 'JavaScript',
    href: 'https://www.javascript.com',
    color: 'from-yellow-400 via-yellow-500 to-yellow-600',
    glowColor: 'shadow-yellow-500/50',
    hoverGlow: 'group-hover:shadow-yellow-400/80',
  },
  {
    node: (
      <SiTypescript
        className='w-10 h-10 rounded-md'
        color='#ffffff'
        // color='#3178C6'
      />
    ),
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    color: 'from-blue-400 via-blue-500 to-blue-600',
    glowColor: 'shadow-blue-500/50',
    hoverGlow: 'group-hover:shadow-blue-400/80',
  },
  {
    node: (
      <SiReact
        className='w-10 h-10'
        color='#ffffff'
        // color='#61DAFB'
      />
    ),
    title: 'React',
    href: 'https://react.dev',
    color: 'from-cyan-400 via-cyan-500 to-blue-600',
    glowColor: 'shadow-cyan-500/50',
    hoverGlow: 'group-hover:shadow-cyan-400/80',
  },
  {
    node: (
      <SiTailwindcss
        className='w-10 h-10'
        color='#ffffff'
        // color='#06B6D4'
      />
    ),
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    color: 'from-teal-400 via-cyan-500 to-blue-600',
    glowColor: 'shadow-cyan-500/50',
    hoverGlow: 'group-hover:shadow-cyan-400/80',
  },
  {
    node: <SiNextdotjs className='w-10 h-10' color='#ffffff' />,
    title: 'Next.js',
    href: 'https://nextjs.org',
    color: 'from-slate-400 via-slate-500 to-slate-600',
    glowColor: 'shadow-slate-400/60',
    hoverGlow: 'group-hover:shadow-slate-300/90',
  },
  {
    node: <SiNextui className='w-10 h-10' color='#ffffff' />,
    title: 'HeroUI',
    href: 'https://www.heroui.com/',
    color: 'from-gray-500 via-gray-700 to-gray-900',
    glowColor: 'shadow-gray-700/50',
    hoverGlow: 'group-hover:shadow-gray-500/80',
  },
  {
    node: (
      <SiNodedotjs
        className='w-10 h-10'
        color='#ffffff'
        // color='#5FA04E'
      />
    ),
    title: 'Node.js',
    href: 'https://nodejs.org',
    color: 'from-green-400 via-green-500 to-green-600',
    glowColor: 'shadow-green-500/50',
    hoverGlow: 'group-hover:shadow-green-400/80',
  },
  {
    node: <SiExpress className='w-10 h-10' color='#ffffff' />,
    title: 'Express',
    href: 'https://expressjs.com',
    color: 'from-zinc-300 via-zinc-400 to-zinc-500',
    glowColor: 'shadow-zinc-300/60',
    hoverGlow: 'group-hover:shadow-zinc-200/90',
  },
  {
    node: (
      <SiNestjs
        className='w-10 h-10'
        color='#ffffff'
        // color='#E0234E'
      />
    ),
    title: 'NestJS',
    href: 'https://nestjs.com',
    color: 'from-red-400 via-red-500 to-red-600',
    glowColor: 'shadow-red-500/50',
    hoverGlow: 'group-hover:shadow-red-400/80',
  },
  {
    node: (
      <SiMongodb
        className='w-10 h-10'
        color='#ffffff'
        // color='#47A248'
      />
    ),
    title: 'MongoDB',
    href: 'https://mongodb.com',
    color: 'from-green-400 via-green-500 to-green-600',
    glowColor: 'shadow-green-500/50',
    hoverGlow: 'group-hover:shadow-green-400/80',
  },
  {
    node: <SiPrisma className='w-10 h-10' color='#ffffff' />,
    title: 'Prisma',
    href: 'https://prisma.io',
    color: 'from-indigo-300 via-indigo-400 to-indigo-500',
    glowColor: 'shadow-indigo-300/60',
    hoverGlow: 'group-hover:shadow-indigo-200/90',
  },
  {
    node: (
      <SiPostgresql
        className='w-10 h-10'
        color='#ffffff'
        // color='#4169E1'
      />
    ),
    title: 'PostgreSQL',
    href: 'https://postgresql.org',
    color: 'from-blue-400 via-blue-500 to-blue-600',
    glowColor: 'shadow-blue-500/50',
    hoverGlow: 'group-hover:shadow-blue-400/80',
  },
  {
    node: <SiTypeorm className='w-10 h-10' color='#ffffff' />,
    title: 'TypeORM',
    href: 'https://typeorm.io',
    color: 'from-violet-300 via-violet-400 to-violet-500',
    glowColor: 'shadow-violet-300/60',
    hoverGlow: 'group-hover:shadow-violet-200/90',
  },
  {
    node: (
      <SiDocker
        className='w-10 h-10'
        color='#ffffff'
        // color='#2496ED'
      />
    ),
    title: 'Docker',
    href: 'https://docker.com',
    color: 'from-blue-400 via-blue-500 to-blue-600',
    glowColor: 'shadow-blue-500/50',
    hoverGlow: 'group-hover:shadow-blue-400/80',
  },
];
