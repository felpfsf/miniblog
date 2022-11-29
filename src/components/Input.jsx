export const Input = ({ labelText, inputName, inputType, placeholder, onChange }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm font-semibold'>{labelText}</label>
      <input
        className='w-full py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey'
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}