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
      className='
        relative inline-flex h-12 overflow-hidden rounded-full p-[2px]
        whitespace-nowrap
        transition-[transform,box-shadow] duration-200 ease-out
        hover:scale-[1.04] hover:shadow-[0_0_22px_rgba(168,85,247,0.45)]
        active:scale-[0.97] active:shadow-none
        cursor-pointer
      '
    >
      <span
        className='
            absolute
            inset-[-1000%]
            animate-[spin_2s_linear_infinite]
            bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]
            dark:bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]'
      />
      <span className='inline-flex h-full w-full items-center justify-center rounded-full bg-gray-900 px-6 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-200 hover:bg-black/80'>
        {text}
      </span>
    </button>
  );
};

export default ButtonGradient;
