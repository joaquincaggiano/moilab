interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  defaultValue: string;
  errors: string | undefined;
}

export const InputForm = ({
  label,
  name,
  type,
  placeholder,
  defaultValue = '',
  errors,
}: Props) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor={name}
        className='text-sm sm:text-base text-white mb-2 font-medium'
      >
        {label}
      </label>
      <div className='flex flex-col gap-1'>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className='text-sm px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors'
        />

        <div className='h-2'>
          {errors && (
            <span className='text-xs sm:text-sm text-red-400 mt-1'>
              {errors}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
