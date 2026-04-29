'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 121;

const getFrameSrc = (index: number) =>
  `/frames/frame_${String(index + 1).padStart(4, '0')}.webp`;

/** Draw an image with object-fit: contain behavior on canvas (full frame, centered, no crop) */
function drawImageContain(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) {
  const imgAspect = img.naturalWidth / img.naturalHeight;
  const canvasAspect = canvasWidth / canvasHeight;

  let dw: number, dh: number;

  if (canvasAspect > imgAspect) {
    // Canvas is wider — constrain by height
    dh = canvasHeight;
    dw = dh * imgAspect;
  } else {
    // Canvas is taller — constrain by width
    dw = canvasWidth;
    dh = dw / imgAspect;
  }

  const dx = (canvasWidth - dw) / 2;
  const dy = (canvasHeight - dh) / 2;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh);
}

const VideoFrames = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const { width, height } = container.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    // Redraw current frame after resize
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[currentFrameRef.current];
    if (ctx && img?.complete && img.naturalWidth > 0) {
      drawImageContain(ctx, img, width, height);
    }
  }, []);

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

    const drawFirst = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;
      drawImageContain(ctx, images[0], canvas.width, canvas.height);
    };

    if (images[0].complete) {
      drawFirst();
    } else {
      images[0].onload = drawFirst;
    }
  }, []);

  useEffect(() => {
    resizeCanvas();

    const observer = new ResizeObserver(resizeCanvas);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [resizeCanvas]);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || !containerRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: isMobile ? '+=1500' : '+=3000',
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
              const index = Math.round(self.progress * (FRAME_COUNT - 1));
              currentFrameRef.current = index;
              const img = imagesRef.current[index];
              if (img?.complete && img.naturalWidth > 0) {
                drawImageContain(ctx, img, canvas.width, canvas.height);
              }
            },
          });

          return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
          };
        }
      );

      return () => mm.revert();
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
        style={{ display: 'block' }}
      />
    </section>
  );
};

export default VideoFrames;
