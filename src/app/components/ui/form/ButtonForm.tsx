import { LuLoader, LuArrowRight } from 'react-icons/lu';

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
      className='group relative w-full h-11 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden cursor-pointer'
    >
      {/* Shine sweep on hover */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none' />

      {/* Content */}
      <span className='relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base'>
        {isLoading ? (
          <>
            <LuLoader className='animate-spin h-5 w-5' aria-hidden='true' />
            {textLoading}
          </>
        ) : (
          <>
            {text}
            <LuArrowRight
              className='w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200'
              aria-hidden='true'
            />
          </>
        )}
      </span>
    </button>
  );
};
