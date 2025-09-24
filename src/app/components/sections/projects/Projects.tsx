import { TitleAndDescription } from '../../ui/texts/TitleAndDescription';
import { SectionLayout } from '../SectionLayout';
import { ProjectsGrid } from './ProjectsGrid';
import { projectsData } from '@/app/data/projects/projects.data';

const Projects = () => {
  return (
    <SectionLayout id='projects' className='mt-20'>
      <TitleAndDescription
        title='Nuestros proyectos'
        description='Explora nuestro portafolio de proyectos y colaboraciones.'
      />

      <ProjectsGrid projects={projectsData} />
    </SectionLayout>
  );
};

export default Projects;
