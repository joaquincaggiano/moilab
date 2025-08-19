import ShinyText from "../texts/ShinyText";

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
      className="
        cursor-pointer
        text-md h-14
        rounded-full
        px-6
        bg-gray-900
        border-2
        border-transparent
        hover:border-[#b5b5b5a4]
        transition-colors
        duration-300"
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
