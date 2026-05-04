import Image from 'next/image';

interface ProjectHeroProps {
  title: string;
  image?: string;
  year?: string;
  category?: string;
  role?: string;
  collaborator?: string;
}

export default function ProjectHero({
  title,
  image,
  year,
  category,
  role,
  collaborator,
}: ProjectHeroProps) {
  return (
    <section className='relative w-full h-[55vh] min-h-[360px] overflow-hidden'>
      {image ? (
        <>
          <Image
            src={image}
            alt={title}
            fill
            priority
            className='object-cover object-center scale-105'
            sizes='100vw'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950' />
        </>
      ) : (
        <div className='absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950' />
      )}

      {/* Glows */}
      <div className='absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none' />

      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 px-6 pb-10 sm:px-12 md:px-20 max-w-5xl mx-auto'>
        <div className='flex items-center gap-3 mb-4'>
          {category && (
            <span className='px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-medium tracking-wider uppercase'>
              {category}
            </span>
          )}
          {year && <span className='text-slate-500 text-xs'>{year}</span>}
        </div>

        <div className='w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-4' />

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight'>
          {title}
        </h1>

        {(role || collaborator) && (
          <p className='mt-3 text-slate-400 text-sm sm:text-base'>
            {role && <span>{role}</span>}
            {role && collaborator && (
              <span className='mx-2 text-slate-600'>·</span>
            )}
            {collaborator && <span>{collaborator}</span>}
          </p>
        )}
      </div>
    </section>
  );
}
