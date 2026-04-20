'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { servicesData } from '@/app/data/services/services.data';
import { ServiceCard } from '../../ui/cards/ServiceCard';

const CARD_HEIGHT = 400;
const TOTAL = servicesData.length;

const css = `
  .services-swiper {
    overflow: visible !important;
    padding-bottom: 52px !important;
  }

  .services-swiper .swiper-slide {
    width: 82vw;
    max-width: 350px;
    height: ${CARD_HEIGHT}px;
    opacity: 0.45;
    transform: scale(0.92);
  }

  /* La transición solo se aplica al cambio de estado activo/inactivo */
  .services-swiper .swiper-slide-prev,
  .services-swiper .swiper-slide-active,
  .services-swiper .swiper-slide-next {
    transition: opacity 280ms ease, transform 280ms ease;
  }

  .services-swiper .swiper-slide-active {
    opacity: 1;
    transform: scale(1);
  }
`;

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full mt-12'>
      <style>{css}</style>
      <div className='overflow-hidden'>
        <Swiper
          className='services-swiper'
          spaceBetween={20}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView='auto'
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % TOTAL)
          }
        >
          {[...servicesData, ...servicesData].map((service, index) => (
            <SwiperSlide key={`${service.id}-${index}`}>
              <ServiceCard
                service={service}
                index={service.id - 1}
                cardHeight={CARD_HEIGHT}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Paginación custom: siempre 5 bullets */}
      <div className='flex items-center justify-center gap-2 mt-4'>
        {servicesData.map((_, i) => (
          <span
            key={i}
            className='block rounded-full transition-all duration-280'
            style={{
              width: i === activeIndex ? '20px' : '8px',
              height: '8px',
              background:
                i === activeIndex
                  ? '#60a5fa'
                  : 'rgba(96, 165, 250, 0.4)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
