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
      className="absolute cursor-grab w-full max-w-3xl h-[450px] bottom-10 shadow-2xl rounded-2xl mt-20 flex bg-gradient-to-br from-stone-200 to-blue-400"
    >
      {/* Lado izquierdo - 40% */}
      <div className="w-2/5 p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-black mb-3">{card.title}</h3>
        <p className="text-black text-md font-medium mb-6">
          {card.description}
        </p>
        <p className="text-gray-700 text-sm font-regular">
          Ideal para: {card.idealFor}
        </p>
      </div>

      {/* Lado derecho - 60% */}
      <div className="w-3/5 p-6">
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
