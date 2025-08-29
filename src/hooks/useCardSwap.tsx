import { useEffect, useRef, useState } from "react";

export const useCardSwap = <T,>(data: T[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStartX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Si el arrastre fue mayor a 100px hacia la derecha, cambiar a la siguiente card
    if (dragOffset > 100) {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }

    setDragOffset(0);
  };

  // Prevenir el comportamiento por defecto del navegador durante el arrastre
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();

    if (isDragging) {
      document.addEventListener("selectstart", preventDefault);
      document.addEventListener("dragstart", preventDefault);
    }

    return () => {
      document.removeEventListener("selectstart", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
    };
  }, [isDragging]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % data.length;
      cards.push(data[index]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return {
    currentIndex,
    isDragging,
    dragOffset,
    containerRef,
    visibleCards,
    setCurrentIndex,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  };
};
