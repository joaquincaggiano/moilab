import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/services/Services";
import Header from "./components/sections/header/Header";

// Extender la interfaz Window para incluir Lenis
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis para scroll suave
    lenisRef.current = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Hacer la instancia de Lenis disponible globalmente
    window.lenis = lenisRef.current;

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
      delete window.lenis;
    };
  }, []);

  return (
    <div className="w-full bg-gray-900">
      <Header />
      <Hero />
      <Services />

      {/* Sección de Proyectos */}
      <section className="w-full min-h-screen bg-gray-900" id="projects">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-white mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre algunos de los proyectos que hemos desarrollado para
              nuestros clientes.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Próximamente...</p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="w-full min-h-screen bg-gray-900" id="contact">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-white mb-4">Contactanos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo
              realidad.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              Formulario de contacto próximamente...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
