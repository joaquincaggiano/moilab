import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Extender la interfaz Window para incluir Lenis
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

interface Props {
  href: string;
  text: string;
}

const LiNavbar = ({ href, text }: Props) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Obtener la instancia de Lenis del window (si está disponible)
    if (typeof window !== "undefined") {
      // Buscar la instancia de Lenis en el window
      lenisRef.current = window.lenis || null;
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement && lenisRef.current) {
        // Usar Lenis para smooth scrolling
        lenisRef.current.scrollTo(targetElement, {
          duration: 1.8,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else if (targetElement) {
        // Fallback si Lenis no está disponible
        targetElement.scrollIntoView({ behavior: "smooth" });
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
