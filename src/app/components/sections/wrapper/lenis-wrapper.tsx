"use client";

import { useLenisStore } from "@/app/storage/lenisStore";
import { useEffect } from "react";
import Lenis from "lenis";

export const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setLenis, destroy } = useLenisStore();

  useEffect(() => {
    // Inicializar Lenis para scroll suave
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Guardar la instancia en el store
    setLenis(lenis);

    // Función para actualizar Lenis en cada frame
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Iniciar el loop de animación
    requestAnimationFrame(raf);

    // Limpiar al desmontar
    return () => {
      destroy();
    };
  }, [setLenis, destroy]);

  return <>{children}</>;
};
