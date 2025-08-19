const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="
        cursor-pointer
        text-md h-14
        rounded-full
        px-6
        text-primary
        bg-gray-900
        border-2
        border-transparent
        hover:border-purple-600
        transition-colors
        duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
