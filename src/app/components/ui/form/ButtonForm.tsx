interface Props {
  isLoading: boolean;
  text: string;
  textLoading: string;
}

export const ButtonForm = ({ isLoading, text, textLoading }: Props) => {
  return (
    <button
      type='submit'
      className='cursor-pointer text-sm sm:text-base w-full text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 duration-400 bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-blue-400 hover:from-blue-400 hover:to-blue-400'
    >
      {isLoading ? textLoading : text}
    </button>
  );
};
