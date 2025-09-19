'use client';

interface MarqueeItem {
  node: React.ReactNode;
  title: string;
  href: string;
}

const Marquee = ({ items }: { items: MarqueeItem[] }) => {
  const handleItemClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  // Crear múltiples copias para asegurar que nunca haya espacios vacíos
  const createMarqueeItems = (copyNumber: number) =>
    items.map((item, idx) => (
      <button
        key={`${item.title}-copy-${copyNumber}-${idx}`}
        className='flex-shrink-0 cursor-pointer transition-transform hover:scale-105 mx-4'
        onClick={() => handleItemClick(item.href)}
      >
        {item.node}
      </button>
    ));

  return (
    <div className='w-full bg-gray-900 relative'>
      {/* Gradiente superior */}
      <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#60a5fa] to-[#a855f7]'></div>

      {/* Gradiente inferior */}
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#60a5fa] to-[#a855f7]'></div>

      <div className='relative flex gap-4 py-3 overflow-hidden'>
        <div className='relative flex overflow-x-hidden w-full group'>
          <div className='flex whitespace-nowrap animate-marquee-smooth group-hover:animate-pause'>
            {/* Múltiples copias para efecto infinito perfecto */}
            {createMarqueeItems(1)}
            {createMarqueeItems(2)}
            {createMarqueeItems(3)}
            {createMarqueeItems(4)}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Marquee };
