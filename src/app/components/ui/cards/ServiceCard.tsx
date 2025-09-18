import { Service } from "@/app/interfaces/services/service.interface";
import Image from "next/image";

interface Props {
  card: Service;
  setRef: (el: HTMLDivElement | null) => void;
}

export const ServiceCard = ({ card, setRef }: Props) => {
  return (
    <div
      ref={setRef}
      className="absolute cursor-grab w-full max-w-[250px] sm:max-w-[300px] md:max-w-3xl h-[300px] sm:h-[350px] md:h-[450px] bottom-10 shadow-2xl rounded-2xl mt-20 flex bg-gradient-to-br from-gray-200 to-gray-900"
    >
      {/* Lado izquierdo - 40% */}
      <div className="w-full md:w-2/5 p-6 flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3">{card.title}</h3>
        <p className="text-black text-sm sm:text-base md:text-lg font-medium mb-6">
          {card.description}
        </p>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base font-regular">
          Ideal para: {card.idealFor}
        </p>
      </div>

      {/* Lado derecho - 60% */}
      <div className="w-3/5 md:p-4 lg:p-6 hidden md:block">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
