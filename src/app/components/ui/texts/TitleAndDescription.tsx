interface Props {
  title: string;
  description?: string;
}

export const TitleAndDescription = ({ title, description }: Props) => {
  return (
    <div className='flex flex-col jsutify-center items-center gap-4 text-center'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
        {title}
      </h2>
      {description && (
        <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl'>
          {description}
        </p>
      )}
    </div>
  );
};
