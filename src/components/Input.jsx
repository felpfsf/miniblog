export const Input = ({ labelText, inputName, inputType, placeholder, pattern, onChange, error_message }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm font-semibold'>{labelText}</label>
      <input
        className='w-full py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey focus:outline-none invalid:border-red-500 focus:invalid:ring-red-500 peer'
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        pattern={pattern}
        onChange={onChange}
      />
      <span className="text-xs font-semibold text-red-500 hidden peer-invalid:block">{error_message}</span>
    </div>
  )
}