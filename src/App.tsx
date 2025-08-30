import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/services/Services";
import Header from "./components/sections/header/Header";
import { useLenisStore } from "./stores/lenisStore";
import Contact from "./components/sections/contact/Contact";

function App() {
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

      <Contact />
    </div>
  );
}

export default App;
