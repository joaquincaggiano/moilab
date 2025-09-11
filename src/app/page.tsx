import Contact from './components/sections/contact/Contact';
import Hero from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import Services from './components/sections/services/Services';
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

const techLogos = [
  {
    node: <SiHtml5 className='w-10 h-10' color='#E34F26' />,
    title: 'HTML',
    href: 'https://www.html.com',
  },
  {
    node: <SiCss3 className='w-10 h-10' color='#663399' />,
    title: 'CSS',
    href: 'https://www.css.com',
  },
  {
    node: <SiJavascript className='w-10 h-10' color='#F7DF1E' />,
    title: 'JavaScript',
    href: 'https://www.javascript.com',
  },
  {
    node: <SiTypescript className='w-10 h-10' color='#3178C6' />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    node: <SiReact className='w-10 h-10' color='#61DAFB' />,
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: <SiTailwindcss className='w-10 h-10' color='#06B6D4' />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    node: <SiNextdotjs className='w-10 h-10' />,
    title: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    node: <SiNextui className='w-10 h-10' color='#ffffff' />,
    title: 'HeroUI',
    href: 'https://www.heroui.com/',
  },
  {
    node: <SiNodedotjs className='w-10 h-10' color='#5FA04E' />,
    title: 'Node.js',
    href: 'https://nodejs.org',
  },
  {
    node: <SiExpress className='w-10 h-10' color='#ffffff' />,
    title: 'Express',
    href: 'https://expressjs.com',
  },
  {
    node: <SiNestjs className='w-10 h-10' color='#E0234E' />,
    title: 'NestJS',
    href: 'https://nestjs.com',
  },
  {
    node: <SiMongodb className='w-10 h-10' color='#47A248' />,
    title: 'MongoDB',
    href: 'https://mongodb.com',
  },
  {
    node: <SiPrisma className='w-10 h-10' color='#ffffff' />,
    title: 'Prisma',
    href: 'https://prisma.io',
  },
  {
    node: <SiPostgresql className='w-10 h-10' color='#4169E1' />,
    title: 'PostgreSQL',
    href: 'https://postgresql.org',
  },
  {
    node: <SiTypeorm className='w-10 h-10' color='#ffffff' />,
    title: 'TypeORM',
    href: 'https://typeorm.io',
  },
  {
    node: <SiDocker className='w-10 h-10' color='#2496ED' />,
    title: 'Docker',
    href: 'https://docker.com',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee items={techLogos} />

      <Services />

      <Marquee items={techLogos} />

      <Contact />
    </>
  );
}
