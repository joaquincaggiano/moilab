import { LuExternalLink } from 'react-icons/lu';

interface ProjectCtaProps {
  website: string;
}

export default function ProjectCta({ website }: ProjectCtaProps) {
  return (
    <section className='pt-4 border-t border-white/[0.07]'>
      <a
        href={website}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity duration-200'
      >
        Ver proyecto en vivo
        <LuExternalLink size={16} aria-hidden='true' />
      </a>
    </section>
  );
}
