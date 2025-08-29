import { servicesData } from "../../../data/services/data.services";
import { useCardSwap } from "../../../hooks/card-swap.hook";
import { ServiceCard } from "../../ui/cards/ServiceCard";

export const ServicesSwap = () => {
  const {
    currentIndex,
    isDragging,
    dragOffset,
    containerRef,
    visibleCards,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    setCurrentIndex,
  } = useCardSwap(servicesData);
  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl h-[600px] flex items-center justify-center overflow-hidden"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {visibleCards.map((card, index) => {
          const isMain = index === 0;
          const scale = isMain ? 1 : 0.9 - index * 0.1;
          const zIndex = 10 - index;
          const opacity = isMain ? 1 : 0.8 - index * 0.15;
          const translateX = isMain ? dragOffset * 0.5 : -100 - index * 120;

          return (
            <ServiceCard
              key={card.id}
              card={card}
              isMain={isMain}
              translateX={translateX}
              scale={scale}
              zIndex={zIndex}
              opacity={opacity}
            />
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="flex space-x-3 mt-8">
        {servicesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};
