import { useState } from "react"

export const Input = ({ labelText, inputName, inputType, maxLength, placeholder, pattern, value, onChange, error_message, chars, showCharLimit }) => {
  const [focus, setFocus] = useState(false)
  return (
    <div className='relative flex flex-col gap-2'>
      <label className='text-sm font-semibold'>{labelText}</label>
      {showCharLimit ?
        <span className='absolute right-2 -bottom-5 text-xs text-white/60'>{chars ? chars : 0}/{maxLength} caracteres</span>
        :
        null
      }
      <input
        className='w-full py-2 px-4 text-sm bg-white/20 border border-miniBlog-grey/30 rounded placeholder:text-miniBlog-grey focus:outline-none data-[focus=true]:invalid:border-red-500 focus:invalid:ring-red-500 peer'
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required
        data-focus={focus.toString()}
        onBlur={() => setFocus(!focus)}
        onFocus={() => inputName === 'confirmPassword' && setFocus(!focus)}
      />
      <span className="text-xs font-semibold text-red-500 hidden  peer-data-[focus=true]:peer-invalid:block">{error_message}</span>
    </div>
  )
}