import { toolsData } from '@/app/data/technologies/tools.data';
import { ToolCard } from '../../ui/cards/ToolCard';
import { TitleAndDescription } from '../../ui/texts/TitleAndDescription';
import { SectionLayout } from '../SectionLayout';

export const ToolSection = () => {
  return (
    <SectionLayout id='tools' className='mt-5'>
      <TitleAndDescription title='Herramientas' />

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
        {toolsData.map((tool, index) => (
          <ToolCard key={tool.title} tool={tool} index={index} />
        ))}
      </div>
    </SectionLayout>
  );
};
