import ServicesSwap from "./ServicesSwap";

const Services = () => {
  return (
    <section className="w-full min-h-screen mt-20" id="services">
      <div className="container mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-col jsutify-center items-center gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            ¿Qué estás buscando?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl">
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
