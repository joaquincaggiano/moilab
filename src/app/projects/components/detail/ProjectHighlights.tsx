interface ProjectHighlightsProps {
  highlights: string[];
}

export default function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  if (highlights.length === 0) return null;

  return (
    <section>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-6 h-px bg-slate-700' />
        <h2 className='text-xs font-semibold tracking-widest uppercase text-slate-400'>
          Aspectos destacados
        </h2>
      </div>
      <ul className='grid sm:grid-cols-2 gap-3'>
        {highlights.map((item, i) => (
          <li
            key={i}
            className='flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]'
          >
            <span className='mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a855f7]' />
            <span className='text-slate-300 text-sm leading-relaxed'>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
