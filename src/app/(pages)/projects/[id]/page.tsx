import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projectsData } from '@/app/data/projects/projects.data';
import ProjectBackButton from '@/app/projects/components/detail/ProjectBackButton';
import ProjectHero from '@/app/projects/components/detail/ProjectHero';
import ProjectChallengeAndSolution from '@/app/projects/components/detail/ProjectChallengeAndSolution';
import ProjectHighlights from '@/app/projects/components/detail/ProjectHighlights';
import ProjectTools from '@/app/projects/components/detail/ProjectTools';
import ProjectCta from '@/app/projects/components/detail/ProjectCta';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <ProjectBackButton />

      <ProjectHero
        title={project.title}
        image={project.image}
        year={project.year}
        category={project.category}
        role={project.role}
        collaborator={project.collaborator}
      />

      <div className='max-w-5xl mx-auto px-6 sm:px-12 md:px-20 py-16 space-y-16'>
        {project.description && (
          <section>
            <p className='text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl'>
              {project.description}
            </p>
          </section>
        )}

        <ProjectChallengeAndSolution
          challenge={project.challenge}
          solution={project.solution}
        />

        {project.highlights && project.highlights.length > 0 && (
          <ProjectHighlights highlights={project.highlights} />
        )}

        {project.tools && project.tools.length > 0 && (
          <ProjectTools tools={project.tools} />
        )}

        {project.website && <ProjectCta website={project.website} />}
      </div>
    </main>
  );
}
