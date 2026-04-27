import ShinyText from '../texts/ShinyText';

const ButtonShiny = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className='
        inline-flex
        whitespace-nowrap
        cursor-pointer
        text-sm h-12
        rounded-full
        border-0
        relative
        overflow-hidden
        p-0.5
        animate-[shineKeyframes_5s_linear_infinite]
        transition-[transform,box-shadow] duration-200 ease-out
        hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(255,255,255,0.18)]
        active:scale-[0.97] active:shadow-none'
      style={{
        background: `
          linear-gradient(90deg, #b5b5b5a4 0%, #ffffff 25%, #b5b5b5a4 50%, #ffffff 75%, #b5b5b5a4 100%),
          linear-gradient(#1f2937, #1f2937)
        `,
        backgroundSize: '200% 100%, 100% 100%',
        backgroundPosition: '0% 0%, 0% 0%',
        backgroundClip: 'border-box, padding-box',
      }}
    >
      <div className='w-full h-full bg-gray-900 hover:bg-black/80 rounded-full flex items-center justify-center px-6 transition-colors duration-200'>
        <ShinyText text={text} disabled={false} speed={5} />
      </div>
    </button>
  );
};

export default ButtonShiny;
