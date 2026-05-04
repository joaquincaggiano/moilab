interface ProjectToolsProps {
  tools: string[];
}

export default function ProjectTools({ tools }: ProjectToolsProps) {
  if (tools.length === 0) return null;

  return (
    <section>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-6 h-px bg-slate-700' />
        <h2 className='text-xs font-semibold tracking-widest uppercase text-slate-400'>
          Stack tecnológico
        </h2>
      </div>
      <div className='flex flex-wrap gap-2'>
        {tools.map((tool) => (
          <span
            key={tool}
            className='px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-sm font-medium hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200'
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
