export const Button = ({buttonText, disabled}) => {
  return (
    <button 
    className='mt-4 py-2 px-8 bg-miniBlog-primary rounded self-center hover:contrast-200 transition-color ease-in-out duration-300'
    disabled={disabled}
    >
      {buttonText}
    </button>
  )
}