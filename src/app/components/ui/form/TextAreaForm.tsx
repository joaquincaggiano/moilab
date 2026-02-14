interface Props {
  label: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  errors: string | undefined;
}

export const TextAreaForm = ({
  label,
  name,
  placeholder,
  defaultValue = '',
  errors,
}: Props) => {
  return (
    <div className='flex flex-col group/textarea'>
      <label
        htmlFor={name}
        className='text-sm sm:text-base text-gray-300 mb-3 font-medium group-hover/textarea:text-white transition-colors duration-300'
      >
        {label}
      </label>
      <div className='flex flex-col gap-1 relative'>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={6}
          defaultValue={defaultValue}
          className='relative text-sm px-5 py-3.5 bg-gray-800/50 text-white rounded-xl border border-gray-700/50
                     focus:border-gray-600 focus:bg-gray-800/70 focus:outline-none
                     placeholder:text-gray-500
                     transition-all duration-300
                     hover:border-gray-600/70 hover:bg-gray-800/60
                     resize-none'
        />

        <div className='h-2'>
          {errors && (
            <span className='text-xs sm:text-sm text-red-400/90 mt-1 flex items-center gap-1'>
              <span className='inline-block w-1 h-1 rounded-full bg-red-400' />
              {errors}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
