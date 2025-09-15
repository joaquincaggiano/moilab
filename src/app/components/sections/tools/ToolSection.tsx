import { toolsData } from '@/app/data/technologies/tools.data';
import { ToolCard } from '../../ui/cards/ToolCard';

export const ToolSection = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-10 pb-10 relative overflow-hidden'>
      <h2 className='text-5xl font-bold text-white'>Herramientas</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {toolsData.map((tool, index) => (
          <ToolCard key={tool.title} tool={tool} index={index} />
        ))}
      </div>
    </section>
  );
};
