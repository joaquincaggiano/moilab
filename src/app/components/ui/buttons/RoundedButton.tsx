'use client';

interface Props {
  onClick: () => void;
  icon: React.ReactNode;
}

export const RoundedButton = ({ onClick, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className='relative inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden p-[2px]'
    >
      <span
        className='
          absolute
          inset-0
          bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]
          dark:bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)]
        '
      />
      <span className='relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 backdrop-blur-3xl transition-colors duration-300 hover:bg-black'>
        {icon}
      </span>
    </button>
  );
};
