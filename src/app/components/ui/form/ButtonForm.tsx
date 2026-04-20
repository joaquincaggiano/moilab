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
      className='group relative w-full h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden cursor-pointer'
    >
      {/* Shine sweep on hover */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none' />

      {/* Content */}
      <span className='relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base'>
        {isLoading ? (
          <>
            <svg
              className='animate-spin h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              aria-hidden='true'
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
          </>
        ) : (
          <>
            {text}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z'
                clipRule='evenodd'
              />
            </svg>
          </>
        )}
      </span>
    </button>
  );
};
