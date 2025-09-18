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
        w-full
        max-w-[150px]
        cursor-pointer
        text-sm h-14
        rounded-full
        border-0
        relative
        overflow-hidden
        animate-[shineKeyframes_5s_linear_infinite]'
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
      <div className='absolute inset-0 bg-gray-900 hover:bg-black rounded-full m-0.5 flex items-center justify-center'>
        <ShinyText
          text={text}
          disabled={false}
          speed={5}
          // className="text-white"
        />
      </div>
    </button>
  );
};

export default ButtonShiny;
