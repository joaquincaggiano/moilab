import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/services/Services";
import Header from "./components/sections/header/Header";

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis para scroll suave
    lenisRef.current = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Función para actualizar Lenis en cada frame
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };

    // Iniciar el loop de animación
    requestAnimationFrame(raf);

    // Limpiar al desmontar
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900">
      <Header />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
