import { useAnimeCarousel } from "../../hooks/useDraggable";

const cards = [
  { id: 1, color: "#A5B4FC", title: "Card 1" },
  { id: 2, color: "#FBCFE8", title: "Card 2" },
  { id: 3, color: "#86EFAC", title: "Card 3" },
  { id: 4, color: "#FDE68A", title: "Card 4" },
];

export default function CarouselDemo() {
  const { containerRef, items, onPointerDown, goLeft, goRight } =
    useAnimeCarousel({
      items: cards,
      dragThreshold: 20,
    });

  return (
    <div style={{ width: 500, margin: "40px auto" }}>
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        style={{
          position: "relative",
          width: "100%",
          height: 220,
          userSelect: "none",
          touchAction: "none",
          overflow: "hidden",
        }}
      >
        {items.map(({ it, setRef }) => (
          <div
            key={it.id}
            ref={setRef}
            style={{
              position: "absolute",
              top: 0,
              left: "50%", // empezamos centrado y el layout hace el translateX
              width: 160,
              height: 200,
              borderRadius: 16,
              background: it.color,
              boxShadow: "0 10px 30px rgba(0,0,0,.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            {it.title}
          </div>
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
