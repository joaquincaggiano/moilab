'use client';

import { useSplitText } from '@/app/hooks/useSplitText';

type SplitType = 'words' | 'chars' | 'lines';

interface BlurTextProps {
  text: string;
  className?: string;
  animateBy?: SplitType;
  delay?: number;
  stagger?: number;
  duration?: number;
}

const BlurText = ({
  text,
  className = '',
  animateBy = 'words',
  delay = 0,
  stagger = 0.1,
  duration = 1,
}: BlurTextProps) => {
  const ref = useSplitText<HTMLSpanElement>({
    type: animateBy,
    delay,
    stagger,
    duration,
  });

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
};

export default BlurText;
