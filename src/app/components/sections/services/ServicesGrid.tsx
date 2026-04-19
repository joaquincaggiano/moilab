'use client';

import { servicesData } from '@/app/data/services/services.data';
import { motion } from 'motion/react';

const numbers = ['01', '02', '03', '04', '05'];

export default function ServicesGrid() {
  return (
    <div className='w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4'>
      {servicesData.map((service, index) => {
        const isLastRow = index >= 3;
        const colSpanClass = isLastRow ? 'lg:col-span-6' : 'lg:col-span-4';
        const isAloneOnMobile = index === 4;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
              ease: 'easeOut',
            }}
            className={`group relative flex flex-col gap-5 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.05] hover:border-blue-400/25 transition-all duration-300 overflow-hidden ${colSpanClass} ${
              isAloneOnMobile ? 'sm:col-span-2 lg:col-span-6' : ''
            }`}
          >
            {/* Número decorativo */}
            <span className='text-5xl font-black text-white/[0.06] group-hover:text-blue-400/20 transition-colors duration-500 select-none leading-none'>
              {numbers[index]}
            </span>

            {/* Título */}
            <h3 className='text-base sm:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 leading-snug'>
              {service.title}
            </h3>

            {/* Descripción */}
            <p className='text-gray-400 text-sm leading-relaxed flex-1'>
              {service.description}
            </p>

            {/* Badge */}
            <div className='mt-auto pt-2'>
              <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium'>
                <span className='w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shrink-0' />
                Ideal para: {service.idealFor}
              </span>
            </div>

            {/* Glow hover */}
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

            {/* Línea top accent */}
            <div className='absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          </motion.div>
        );
      })}
    </div>
  );
}
