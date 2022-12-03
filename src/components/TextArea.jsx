import { useState } from 'react'

export const TextArea = ({ labelText, txtAreaName, placeholder, onChange, error_message, value }) => {
  const [focus, setFocus] = useState(false)

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm font-semibold'>{labelText}</label>
      <textarea
        className='w-full h-24 py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey focus:outline-none data-[focus=true]:invalid:border-red-500 focus:invalid:ring-red-500 peer resize-none'
        name={txtAreaName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
        data-focus={focus.toString()}
        onBlur={() => setFocus(!focus)}></textarea>
      <span className="text-xs font-semibold text-red-500 hidden  peer-data-[focus=true]:peer-invalid:block">{error_message}</span>
    </div>
  )
}
