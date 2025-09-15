import ServicesSwap from "./ServicesSwap";

const Services = () => {
  return (
    <section className="w-full min-h-screen" id="services">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-4">
            ¿Qué estás buscando?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explora nuestra variedad de servicios diseñados para impulsar tu
            proyecto.
          </p>
        </div>

        <ServicesSwap />
      </div>
    </section>
  );
};

export default Services;
