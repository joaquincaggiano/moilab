const ButtonGradient = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px]"
    >
      <span
        className="
            absolute
            inset-[-1000%]
            animate-[spin_2s_linear_infinite]
            bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]
            dark:bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]"
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-8 py-1 text-md font-medium text-gray-50 backdrop-blur-3xl transition-colors duration-300 hover:bg-gray-800">
        {text}
      </span>
    </button>
  );
};

export default ButtonGradient;
