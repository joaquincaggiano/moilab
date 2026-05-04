import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';

export default function ProjectBackButton() {
  return (
    <div className='fixed top-6 left-6 z-50'>
      <Link
        href='/'
        className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm'
      >
        <LuArrowLeft size={16} aria-hidden='true' />
        Volver
      </Link>
    </div>
  );
}
