import ContactForm from '@/app/contact/components/form/ContactForm';

export default function Contact() {
  return (
    <div id='contact'>
      <section className='relative w-full min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden py-32 lg:py-0'>
        {/* Background glows */}
        <div className='absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-500/[0.07] blur-3xl pointer-events-none' />
        <div className='absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/[0.07] blur-3xl pointer-events-none' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl pointer-events-none' />

        {/* Ghost letter */}
        <span className='absolute right-4 bottom-0 text-[30vw] font-black leading-none select-none pointer-events-none text-white/[0.02]'>
          C
        </span>

        <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 max-w-7xl mx-auto px-8 sm:px-16 md:px-24 w-full items-center'>
          {/* Left: Banner */}
          <div className='flex flex-col gap-6'>
            {/* Eyebrow */}
            <span className='inline-flex items-center gap-2 text-xs font-medium text-slate-400 tracking-widest uppercase'>
              <span className='w-6 h-px bg-slate-600' />
              Hablemos
            </span>

            {/* Headline */}
            <h2 className='font-black leading-none tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>
              <span className='block text-white'>¿Tienes un</span>
              <span className='block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                proyecto?
              </span>
            </h2>

            {/* Divider */}
            <div className='h-0.5 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full w-16' />

            {/* Subtitle */}
            <p className='text-slate-400 leading-relaxed text-base sm:text-lg max-w-md'>
              Cuéntanos sobre tu idea. Estamos listos para convertirla en una
              solución digital que marque la diferencia.
            </p>

            {/* Info items */}
            <div className='flex flex-col gap-3 mt-2'>
              <div className='flex items-center gap-3 text-slate-500 text-sm'>
                <span className='w-1.5 h-1.5 rounded-full bg-violet-400/60 flex-shrink-0' />
                Respondemos en menos de 24 h
              </div>
              <div className='flex items-center gap-3 text-slate-500 text-sm'>
                <span className='w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0' />
                Primera consulta sin compromiso
              </div>
              <div className='flex items-center gap-3 text-slate-500 text-sm'>
                <span className='w-1.5 h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0' />
                Presupuesto personalizado
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
