'use client';

import { useLenisStore } from '@/app/storage/lenisStore';

interface Props {
  href: string;
  text: string;
  onClick?: () => void;
}

const LiNavbar = ({ href, text, onClick }: Props) => {
  const { scrollTo } = useLenisStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Usar el store de Zustand para smooth scrolling
        scrollTo(targetElement);
      } else {
        // Fallback si el elemento no existe
        console.warn(`Element with id "${targetId}" not found`);
      }
    }

    // Ejecutar callback si se proporciona
    if (onClick) {
      onClick();
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="font-medium text-sm sm:text-xs md:text-sm lg:text-base text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#60a5fa] after:transition-all after:duration-300 hover:after:w-full"
      >
        {text}
      </a>
    </li>
  );
};

export default LiNavbar;
