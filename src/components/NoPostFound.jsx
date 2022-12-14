import { Link } from "react-router-dom"

export const NoPostFound = ({ label, buttonTitle, linkUrl }) => {
  return (
    <div className='w-full mt-16 mx-auto flex flex-col items-center'>
      <h2 className='font-light text-2xl'>Nenhum post encontrado</h2>
      <Link
        to={linkUrl ? linkUrl : '/posts/create'}
        className='mt-2 py-2 px-8 bg-miniBlog-primary rounded self-center hover:contrast-200 transition-color ease-in-out duration-300'>
        {buttonTitle}
      </Link>
    </div>
  )
}