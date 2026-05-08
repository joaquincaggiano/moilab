interface ProjectChallengeAndSolutionProps {
  challenge?: string;
  solution?: string;
}

export default function ProjectChallengeAndSolution({
  challenge,
  solution,
}: ProjectChallengeAndSolutionProps) {
  if (!challenge && !solution) return null;

  return (
    <section className='grid sm:grid-cols-2 gap-8'>
      {challenge && (
        <div className='p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-2 h-2 rounded-full bg-amber-400' />
            <h2 className='text-xs font-semibold tracking-widest uppercase text-slate-400'>
              El reto
            </h2>
          </div>
          <p className='text-slate-300 text-sm sm:text-base leading-relaxed'>
            {challenge}
          </p>
        </div>
      )}

      {solution && (
        <div className='p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-2 h-2 rounded-full bg-[#60a5fa]' />
            <h2 className='text-xs font-semibold tracking-widest uppercase text-slate-400'>
              La solución
            </h2>
          </div>
          <p className='text-slate-300 text-sm sm:text-base leading-relaxed'>
            {solution}
          </p>
        </div>
      )}
    </section>
  );
}
