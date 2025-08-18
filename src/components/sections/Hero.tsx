import LightRays from "../backgrounds/LighRays";
import Header from "../header/Header";

const Hero = () => {
  const scrollToContact = () => {
    // Implementar scroll a la sección de contacto
    console.log("Scroll to contact");
  };

  const scrollToServices = () => {
    // Implementar scroll a la sección de servicios
    console.log("Scroll to services");
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen relative bg-gray-900">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Creamos tus ideas en
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                {" "}
                experiencias digitales
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Desarrollamos software personalizado, landing pages impactantes y
              aplicaciones web que convierten tu visión en realidad. Impulsa tu
              negocio con soluciones digitales que marcan la diferencia.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-amber-400 text-white font-semibold rounded-lg hover:from-amber-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Comenzar Proyecto
              </button>

              <button
                onClick={scrollToServices}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Ver Servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
