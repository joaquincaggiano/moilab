'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 121;

const getFrameSrc = (index: number) =>
  `/frames/frame_${String(index + 1).padStart(4, '0')}.webp`;

const VideoFrames = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const images: HTMLImageElement[] = Array.from(
      { length: FRAME_COUNT },
      (_, i) => {
        const img = new Image();
        img.src = getFrameSrc(i);
        return img;
      }
    );
    imagesRef.current = images;

    // Draw first frame as soon as it's ready
    const drawFirst = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;
      ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    };

    if (images[0].complete) {
      drawFirst();
    } else {
      images[0].onload = drawFirst;
    }
  }, []);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || !containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (FRAME_COUNT - 1));
          const img = imagesRef.current[index];
          if (img?.complete) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id='video-frames'
      className='w-full h-screen overflow-hidden bg-black'
      aria-label='Animación de producto'
    >
      <canvas
        ref={canvasRef}
        width={1928}
        height={1072}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
        }}
      />
    </section>
  );
};

export default VideoFrames;
