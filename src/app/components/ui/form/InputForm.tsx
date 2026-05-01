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
    <div className='flex flex-col group/input'>
      <label
        htmlFor={name}
        className='text-sm sm:text-base text-slate-400 mb-3 font-medium group-hover/input:text-slate-200 transition-colors duration-300'
      >
        {label}
      </label>
      <div className='flex flex-col gap-1 relative'>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className='relative text-base px-5 py-3.5 bg-slate-800/50 text-white rounded-xl border border-slate-700/50
                     focus:border-slate-600 focus:bg-slate-800/70 focus:outline-none
                     placeholder:text-slate-500
                     transition-all duration-300
                     hover:border-slate-600/70 hover:bg-slate-800/60'
        />

        <div className='h-2'>
          {errors && (
            <span className='text-xs sm:text-sm text-red-400/80 mt-1 flex items-center gap-1.5'>
              <span className='inline-block w-1 h-1 rounded-full bg-red-400 flex-shrink-0' />
              {errors}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
