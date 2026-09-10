import { LuExternalLink } from 'react-icons/lu';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

interface ProjectCtaProps {
  website?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
}

const linkClasses =
  'inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a855f7] text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity duration-200';

export default function ProjectCta({
  website,
  appStoreUrl,
  googlePlayUrl,
}: ProjectCtaProps) {
  return (
    <section className='pt-4 border-t border-white/[0.07] flex flex-wrap gap-4'>
      {website && (
        <a href={website} target='_blank' rel='noopener noreferrer' className={linkClasses}>
          Ver proyecto en vivo
          <LuExternalLink size={16} aria-hidden='true' />
        </a>
      )}

      {appStoreUrl && (
        <a href={appStoreUrl} target='_blank' rel='noopener noreferrer' className={linkClasses}>
          Descargar en App Store
          <FaApple size={16} aria-hidden='true' />
        </a>
      )}

      {googlePlayUrl && (
        <a href={googlePlayUrl} target='_blank' rel='noopener noreferrer' className={linkClasses}>
          Descargar en Google Play
          <FaGooglePlay size={16} aria-hidden='true' />
        </a>
      )}
    </section>
  );
}
