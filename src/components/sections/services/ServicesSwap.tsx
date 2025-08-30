import { servicesData } from "../../../data/services/data.services";
import { useAnimeCarousel } from "../../../hooks/useDraggable";
import { ServiceCard } from "../../ui/cards/ServiceCard";

export default function ServicesSwap() {
  const { containerRef, items, onPointerDown, goLeft, goRight } =
    useAnimeCarousel({
      items: servicesData,
      dragThreshold: 20,
    });

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        className="relative w-full h-[600px] select-none touch-none"
      >
        {items.map(({ it: card, setRef }) => (
          <ServiceCard key={card.id} card={card} setRef={setRef} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        <button onClick={goLeft}>← Swipe Izquierda</button>
        <button onClick={goRight}>Swipe Derecha →</button>
      </div>
    </div>
  );
}
