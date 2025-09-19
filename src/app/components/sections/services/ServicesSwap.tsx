"use client";

import { servicesData } from "@/app/data/services/services.data";
import { useAnimeCarousel } from "@/app/hooks/useDraggable";
import { ServiceCard } from "../../ui/cards/ServiceCard";

export default function ServicesSwap() {
  const { containerRef, items, onPointerDown } = useAnimeCarousel({
    items: servicesData,
    dragThreshold: 100,
  });

  return (
    <>
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] select-none touch-none flex justify-center items-center mb-14"
      >
        {items.map(({ it: card, setRef }) => (
          <ServiceCard key={card.id} card={card} setRef={setRef} />
        ))}
      </div>
    </>
  );
}
