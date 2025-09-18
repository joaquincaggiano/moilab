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
        bg-gray-900
        border-2
        border-transparent
        hover:bg-black
        hover:border-[#b5b5b5a4]
        transition-colors
        duration-300'
    >
      <ShinyText
        text={text}
        disabled={false}
        speed={3}
        // className="text-white"
      />
    </button>
  );
};

export default ButtonShiny;
