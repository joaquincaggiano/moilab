import type { Service } from "../../../interfaces/services/service.interface";

interface Props {
  card: Service;
  isMain: boolean;
  translateX: number;
  scale: number;
  zIndex: number;
  opacity: number;
}

export const ServiceCard = ({
  card,
  isMain,
  translateX,
  scale,
  zIndex,
  opacity,
}: Props) => {
  return (
    <div
      className={`absolute w-full max-w-4xl bg-white rounded-2xl shadow-2xl transition-all duration-300 ease-out ${
        isMain ? "cursor-grab active:cursor-grabbing" : ""
      }`}
      style={{
        transform: `translateX(${translateX}px) scale(${scale})`,
        zIndex,
        opacity: Math.max(opacity, 0.3),
        pointerEvents: isMain ? "auto" : "none",
        background: card.backgroundColor,
      }}
    >
      <div className="flex h-[500px]">
        {/* Lado izquierdo - 40% */}
        <div className="w-2/5 p-6 flex flex-col">
          <h3 className="text-2xl font-bold text-black mb-3">
            {card.title}
          </h3>
          <p className="text-black text-md font-medium leading-relaxed mb-6">{card.description}</p>
          <p className="text-black text-sm leading-relaxed">Ideal para: {card.idealFor}</p>
        </div>

        {/* Lado derecho - 60% */}
        <div className="w-3/5 p-2">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
