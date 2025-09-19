import { toolsData } from '@/app/data/technologies/tools.data';
import { ToolCard } from '../../ui/cards/ToolCard';

export const ToolSection = () => {
  return (
    <section className='w-full min-h-screen mt-10'>
      <div className='container mx-auto flex flex-col items-center gap-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
          Herramientas
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {toolsData.map((tool, index) => (
            <ToolCard key={tool.title} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
