import type { Service } from "../../../interfaces/services/service.interface";

interface Props {
  card: Service;
  setRef: (el: HTMLDivElement | null) => void;
}

export const ServiceCard = ({ card, setRef }: Props) => {
  return (
    <div
      ref={setRef}
      className="absolute left-1/3 w-full max-w-3xl h-[500px] rounded-2xl mt-20 flex"
      style={{
        background: card.backgroundColor,
      }}
    >
      {/* Lado izquierdo - 40% */}
      <div className="w-2/5 p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-black mb-3">{card.title}</h3>
        <p className="text-black text-md font-medium leading-relaxed mb-6">
          {card.description}
        </p>
        <p className="text-black text-sm leading-relaxed">
          Ideal para: {card.idealFor}
        </p>
      </div>

      {/* Lado derecho - 60% */}
      <div className="w-3/5 p-6">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
