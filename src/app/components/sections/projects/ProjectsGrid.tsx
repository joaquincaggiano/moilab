import { Project } from '@/app/interfaces/projects/project.interface';
import { ProjectCard } from '../../ui/cards/ProjectCard';
import { ProjectCardEmpty } from '../../ui/cards/ProjectCardEmpty';

interface Props {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: Props) => {
  const first6Projects = projects.slice(0, 5);

  return (
    <div className='w-full max-w-6xl mx-auto flex flex-col xl:flex-row gap-5 mt-20'>
      <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:w-1/2 mx-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
          {first6Projects.slice(0, 2).map(project => (
            <ProjectCard key={project.id} project={project} size='small' />
          ))}
        </div>
        <div className='grid grid-cols-1'>
          {first6Projects.slice(2, 3).map(project => (
            <ProjectCard key={project.id} project={project} size='large' />
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:w-1/2 mx-auto'>
        <div className='grid grid-cols-1'>
          {first6Projects.slice(3, 4).map(project => (
            <ProjectCard key={project.id} project={project} size='large' />
          ))}
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
          {first6Projects.slice(4, 5).map(project => (
            <ProjectCard key={project.id} project={project} size='small' />
          ))}
          <ProjectCardEmpty />
        </div>
      </div>
    </div>
  );
};
