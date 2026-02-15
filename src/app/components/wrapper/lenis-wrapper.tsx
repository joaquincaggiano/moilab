"use client";

import { useLenisStore } from "@/app/storage/lenisStore";
import { useEffect } from "react";
import Lenis from "lenis";

export const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setLenis, destroy } = useLenisStore();

  useEffect(() => {
    // Detectar si es iOS/Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Configuración optimizada para iOS
    const lenis = new Lenis({
      duration: isIOS || isSafari ? 1.0 : 1.8, // Más rápido en iOS
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: isIOS || isSafari ? 1.5 : 2, // Menos sensible en iOS
      infinite: false,
      syncTouch: true, // Importante para iOS - sincroniza con el scroll nativo
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
