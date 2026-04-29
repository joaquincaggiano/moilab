export default function ServicesMobileHeader() {
  return (
    <div className='relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center px-8 overflow-hidden'>
      {/* Glows */}
      <div className='absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-blue-500/[0.08] blur-3xl pointer-events-none' />
      <div className='absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-violet-500/[0.08] blur-3xl pointer-events-none' />

      {/* Ghost letter */}
      <span className='absolute right-3 bottom-0 text-[38vw] font-black leading-none select-none pointer-events-none text-white/[0.02]'>
        S
      </span>

      {/* Content */}
      <div className='relative z-10 text-center max-w-xs'>
        <span className='inline-flex items-center gap-3 text-xs font-medium text-slate-400 tracking-widest uppercase'>
          <span className='w-4 h-px bg-slate-600' />
          Lo que hacemos
          <span className='w-4 h-px bg-slate-600' />
        </span>
        <h2 className='mt-4 text-4xl font-black text-white leading-none tracking-tight'>
          Nuestros{' '}
          <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent'>
            Servicios
          </span>
        </h2>
        <p className='mt-4 text-slate-400 text-sm leading-relaxed'>
          Transformamos ideas en productos digitales. Desde una landing hasta
          software a medida.
        </p>
      </div>
    </div>
  );
}
