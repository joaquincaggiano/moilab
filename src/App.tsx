import CarouselDemo from "./components/sections/CarouselDemo";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/services/Services";

function App() {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Hero />
      <Services />
      <CarouselDemo />
    </div>
  );
}

export default App;
