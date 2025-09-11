"use client";

import { useLenisStore } from "@/app/storage/lenisStore";

interface Props {
  href: string;
  text: string;
}

const LiNavbar = ({ href, text }: Props) => {
  const { scrollTo } = useLenisStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href.startsWith("#")) {
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
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="
            font-regular
            text-md
            text-white
            relative
            transition-colors
            after:content-['']
            after:absolute
            after:left-0
            after:bottom-[-4px]
            after:w-0
            after:h-[2px]
            after:bg-[#60a5fa]
            after:transition-all
            after:duration-300
            hover:after:w-full"
      >
        {text}
      </a>
    </li>
  );
};

export default LiNavbar;
