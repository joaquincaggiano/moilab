import Image from 'next/image';
import { Project } from '@/app/interfaces/projects/project.interface';

interface ProjectCardProps {
  project: Project;
  index: number;
  angle: number;
  radius: number;
}

export default function ProjectCard({ project, index, angle, radius }: ProjectCardProps) {
  return (
    <div
      data-carousel-card
      className='absolute w-[260px] h-[360px]'
      style={{
        transform: `rotateY(${index * angle}deg) translateZ(${radius}px)`,
        marginLeft: '-130px',
        marginTop: '-180px',
      }}
    >
      <div className='relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl'>
        <Image
          src={project.image!}
          alt={project.title}
          fill
          sizes='260px'
          className='object-cover'
        />
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent' />

        {/* Card info */}
        <div className='absolute bottom-0 left-0 right-0 p-5 text-white'>
          <span className='text-[10px] text-emerald-400 uppercase tracking-widest font-medium'>
            {project.type === 'collaboration' ? 'Colaboración' : 'Propio'}
          </span>
          <h3 className='font-bold text-base leading-tight mt-1'>
            {project.title}
          </h3>
          {project.collaborator && (
            <p className='text-xs text-slate-400 mt-0.5'>
              {project.collaborator}
            </p>
          )}
          {project.website && (
            <a
              href={project.website}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block text-xs text-emerald-400 mt-3 hover:underline'
            >
              Ver proyecto →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
