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

  return (
    <div className='w-full'>
      {/* MarqueeContainer */}
      <div className='relative flex gap-4 py-3 overflow-hidden'>
        {/* MarqueeWrapper */}
        <div className='relative flex overflow-x-hidden w-full group'>
          {/* MarqueeContent */}
          <div className='flex whitespace-nowrap animate-marquee group-hover:animate-pause'>
            {/* Primera copia */}
            {items.map((item, idx) => (
              <button
                key={`${item.title}-${idx}`}
                className='flex-shrink-0 cursor-pointer transition-transform hover:scale-105 mx-4'
                onClick={() => handleItemClick(item.href)}
              >
                {item.node}
              </button>
            ))}
            {/* Segunda copia para el efecto infinito */}
            {items.map((item, idx) => (
              <button
                key={`${item.title}-clone-${idx}`}
                className='flex-shrink-0 cursor-pointer transition-transform hover:scale-105 mx-4'
                onClick={() => handleItemClick(item.href)}
              >
                {item.node}
              </button>
            ))}
            {/* Tercera copia para el efecto infinito */}
            {items.map((item, idx) => (
              <button
                key={`${item.title}-clone-${idx}`}
                className='flex-shrink-0 cursor-pointer transition-transform hover:scale-105 mx-4'
                onClick={() => handleItemClick(item.href)}
              >
                {item.node}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Marquee };
