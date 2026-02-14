interface Props {
  isLoading: boolean;
  text: string;
  textLoading: string;
}

export const ButtonForm = ({ isLoading, text, textLoading }: Props) => {
  return (
    <button
      type='submit'
      disabled={isLoading}
      className='cursor-pointer group/button relative w-full h-14 overflow-hidden rounded-2xl p-[2px] transition-all duration-300 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100'
    >
      {/* Animated gradient border */}
      <span
        className={`absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#a855f7_50%,#60a5fa_100%)] ${
          !isLoading ? 'animate-[spin_2s_linear_infinite]' : ''
        }`}
      />

      {/* Button content */}
      <span className='relative inline-flex h-full w-full items-center justify-center rounded-[14px] bg-gradient-to-r from-gray-900 to-gray-800 text-sm sm:text-base font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover/button:from-gray-800 group-hover/button:to-gray-900'>
        {isLoading ? (
          <span className='flex items-center gap-2'>
            <svg
              className='animate-spin h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              />
            </svg>
            {textLoading}
          </span>
        ) : (
          text
        )}
      </span>
    </button>
  );
};
