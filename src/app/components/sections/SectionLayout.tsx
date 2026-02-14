'use client';

import { useBlurReveal } from '@/app/hooks/useBlurReveal';

interface Props {
  children: React.ReactNode;
  className?: string;
  id: string;
  disableBlur?: boolean;
}

export const SectionLayout = ({ children, className, id, disableBlur = false }: Props) => {
  const sectionRef = useBlurReveal({
    threshold: 0.15,
    duration: 1000,
    easing: 'easeOutExpo',
  });

  return (
    <section
      ref={disableBlur ? undefined : sectionRef}
      className={`w-full min-h-screen py-10 ${className}`}
      id={id}
    >
      <div className='container mx-auto flex flex-col items-center'>
        {children}
      </div>
    </section>
  );
};
