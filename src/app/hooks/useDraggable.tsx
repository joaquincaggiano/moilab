'use client';

import { animate } from 'motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type UseAnimeCarouselOptions<T> = {
  items: T[];
  dragThreshold?: number; // px para decidir swipe
  stiffness?: number; // "fuerza" al arrastrar (>=1 reduce el desplazamiento)
  onChangeOrder?: (next: T[]) => void; // callback opcional tras reordenar
};

type CarouselBindings<T> = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  cardRefs: React.RefObject<HTMLDivElement[]>;
  items: { it: T; setRef: (el: HTMLDivElement | null) => void }[];
  onPointerDown: (e: React.PointerEvent) => void;
  goLeft: () => void; // comportamiento de drag a la izquierda (última -> primera; primera -> segunda)
  goRight: () => void; // comportamiento de drag a la derecha (primera -> última)
};

export function useAnimeCarousel<T = unknown>({
  items,
  dragThreshold = 60,
  stiffness = 1.0,
  onChangeOrder,
}: UseAnimeCarouselOptions<T>): CarouselBindings<T> {
  const [order, setOrder] = useState<T[]>(items);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // estados del drag
  const dragStartX = useRef<number | null>(null);
  const dragging = useRef(false);
  const currentDX = useRef(0);

  // Para mantener refs alineados con el render
  useEffect(() => {
    // si cambia "items" externo, sincroniza orden interno cuando difieran por identidad/tamaño
    if (items.length !== order.length || items.some((v, i) => v !== order[i])) {
      setOrder(items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const layoutCards = useCallback(() => {
    // Hilera horizontal: cada card se desplaza a la izquierda según su índice
    const spacing = 60; // separación horizontal entre cards
    const baseScale = 1.0; // escala base para la primera card
    const scaleReduction = 0.08; // reducción de escala por cada card hacia atrás
    const yOffset = 8; // desplazamiento vertical para crear profundidad

    for (let i = 0; i < order.length; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      // Aseguramos que el zIndex ya esté aplicado desde el principio
      el.style.zIndex = String(order.length - i);

      // Calculamos la escala: primera card (i=0) es 1.0, las siguientes se van achicando
      const scale = Math.max(baseScale - i * scaleReduction, 0.6); // mínimo 0.6 para que no se vean muy pequeñas

      // Desplazamiento vertical para crear efecto de profundidad
      const translateY = i * yOffset;

      animate(
        el as any,
        {
          x: -i * spacing, // desplazamiento horizontal
          y: translateY, // desplazamiento vertical para profundidad
          rotate: 0,
          scale: scale, // escala que disminuye hacia atrás
          opacity: 1,
        },
        { duration: 0.3 } as any
      );
    }
  }, [order.length]);

  useEffect(() => {
    layoutCards();
  }, [order, layoutCards]);

  const commitOrder = useCallback(
    (next: T[]) => {
      setOrder(next);
      onChangeOrder?.(next);
    },
    [onChangeOrder]
  );

  // Reglas de reordenamiento
  const reorderRight = useCallback((arr: T[]) => {
    // drag derecha: primera -> última
    if (arr.length <= 1) return arr;
    return [...arr.slice(1), arr[0]];
  }, []);

  const reorderLeft = useCallback((arr: T[]) => {
    // drag izquierda: última -> primera; primera -> segunda
    if (arr.length <= 1) return arr;
    const last = arr[arr.length - 1];
    const first = arr[0];
    const middle = arr.slice(1, arr.length - 1);
    return [last, first, ...middle];
  }, []);

  // Animaciones de swipe
  const animateSwipe = useCallback(
    (dir: 'left' | 'right') => {
      const top = cardRefs.current[0];
      if (!top) return;

      const width = containerRef.current?.clientWidth ?? 300;

      if (dir === 'right') {
        // DRAG DERECHA: Tarjeta actual va al final
        const off = width * 0.8;
        const rot = 12;

        // Saca la top card hacia la derecha
        animate(
          top as any,
          {
            x: off,
            rotate: rot,
            opacity: 0,
            scale: 0.7,
          },
          {
            duration: 0.4,
            easing: [0.4, 0, 0.2, 1],
          } as any
        ).finished.then(() => {
          const next = reorderRight(order);
          commitOrder(next);
          layoutCards();
        });

        // Las tarjetas traseras AVANZAN hacia adelante (izquierda)
        for (let i = 1; i < Math.min(order.length, 4); i++) {
          const el = cardRefs.current[i];
          if (!el) continue;

          animate(
            el as any,
            {
              x: [0, -20, 0], // Se mueven un poco a la izquierda y vuelven
              scale: [
                1 - i * 0.08,
                1 - (i - 1) * 0.08 + 0.05,
                1 - (i - 1) * 0.08,
              ],
              opacity: 1,
            },
            {
              duration: 0.4,
              easing: [0.4, 0, 0.2, 1],
            } as any
          );
        }
      } else {
        // DRAG IZQUIERDA: Última tarjeta viene al frente
        const off = -width * 0.8;
        const rot = -12;

        // Saca la top card hacia la izquierda
        animate(
          top as any,
          {
            x: off,
            rotate: rot,
            opacity: 0,
            scale: 0.7,
            y: 20, // Baja un poco
          },
          {
            duration: 0.4,
            easing: [0.4, 0, 0.2, 1],
          } as any
        ).finished.then(() => {
          const next = reorderLeft(order);
          commitOrder(next);
          layoutCards();
        });

        // La ÚLTIMA tarjeta se hace más visible (viene desde atrás)
        const lastIndex = order.length - 1;
        if (lastIndex > 0) {
          const lastCard = cardRefs.current[lastIndex];
          if (lastCard) {
            animate(
              lastCard as any,
              {
                scale: [1 - lastIndex * 0.08, 0.95, 1 - (lastIndex - 1) * 0.08],
                opacity: [1, 1, 1],
                y: [lastIndex * 8, 0, (lastIndex - 1) * 8],
              },
              {
                duration: 0.4,
                easing: [0.4, 0, 0.2, 1],
              } as any
            );
          }
        }

        // Las demás se ajustan
        for (let i = 1; i < lastIndex; i++) {
          const el = cardRefs.current[i];
          if (!el) continue;

          animate(
            el as any,
            {
              scale: 1 - i * 0.08,
              opacity: 1,
            },
            {
              duration: 0.4,
              easing: [0.4, 0, 0.2, 1],
            } as any
          );
        }
      }
    },
    [commitOrder, layoutCards, order, reorderLeft, reorderRight]
  );

  const goLeft = useCallback(() => animateSwipe('left'), [animateSwipe]);
  const goRight = useCallback(() => animateSwipe('right'), [animateSwipe]);

  // Drag handlers
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!cardRefs.current[0]) return;
      dragging.current = true;
      dragStartX.current = e.clientX;
      currentDX.current = 0;

      const onMove = (ev: PointerEvent) => {
        if (!dragging.current || dragStartX.current == null) return;
        const dx = (ev.clientX - dragStartX.current) / stiffness;
        currentDX.current = dx;

        // mover sólo la top card + rotación leve
        animate(
          cardRefs.current[0] as any,
          {
            x: dx,
            rotate: dx / 12,
          },
          { duration: 0 } as any
        );

        // parallax leve en las de atrás
        for (let i = 1; i < order.length; i++) {
          const el = cardRefs.current[i];
          if (!el) continue;
          // Se ajusta la posición vertical (y) y la escala (scale) en función de cuánto se ha arrastrado la tarjeta principal (dx).
          // Esto genera un efecto visual de profundidad y movimiento suave en las tarjetas traseras.
          animate(
            el as any,
            {
              y: i * 8 - Math.min(Math.abs(dx) / 20, 4),
              scale: 1 - i * 0.05 + Math.min(Math.abs(dx) / 600, 0.03),
            },
            { duration: 0 } as any
          );
        }
      };

      const onUp = () => {
        if (!dragging.current) return;
        dragging.current = false;

        const dx = currentDX.current;
        const abs = Math.abs(dx);

        if (abs > dragThreshold) {
          animateSwipe(dx > 0 ? 'right' : 'left');
        } else {
          // volver al centro
          const top = cardRefs.current[0];
          if (top) {
            animate(
              top as any,
              {
                x: 0,
                rotate: 0,
              },
              {
                duration: 0.22, // 220ms
                easing: [0.25, 0.46, 0.45, 0.94], // easeOutQuad bezier curve
              } as any
            );
          }
          // y restaurar capas
          layoutCards();
        }

        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('pointercancel', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
    },
    [animateSwipe, dragThreshold, layoutCards, order.length, stiffness]
  );

  // util para asignar refs a cada card
  const setCardRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) cardRefs.current[i] = el;
  }, []);

  // Devolvemos refs e handlers, y mantenemos "order" como items del carrusel.
  return useMemo(
    () => ({
      containerRef,
      cardRefs: {
        get current() {
          return cardRefs.current;
        },
        set current(v: HTMLDivElement[]) {
          cardRefs.current = v;
        },
      } as unknown as React.RefObject<HTMLDivElement[]>,
      items: order.map((it, i) => ({
        it,
        setRef: (el: HTMLDivElement | null) => setCardRef(el, i),
      })),
      onPointerDown,
      goLeft,
      goRight,
    }),
    [goLeft, goRight, onPointerDown, order, setCardRef]
  );
}
