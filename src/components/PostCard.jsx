import { Link } from 'react-router-dom'

import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { BsArrowRightShort } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { AiOutlineDelete } from 'react-icons/ai'

export const PostCard = ({ headline, imgUrl, id, tags, title, adminTools, onClick, editPage }) => {
  return (
    <div className='p-4 w-full md:w-1/3'>
      <div className='h-full border-2 border-miniBlog-bg3 rounded-lg overflow-hidden'>
        <img
          className='lg:h-48 md:h-36 w-full object-cover object-center'
          src={imgUrl}
          alt={title}
        />
        <div className='p-6'>
          <h2 className='tracking-widest text-xs font-medium text-miniBlog-greySoft/70 uppercase mb-1'>
            Categoria
          </h2>
          <div className='flex gap-3 self-center flex-wrap'>
            {tags.map((tag, index) => (
              <p
                key={index}
                className='py-1 px-2 text-xs font-light leading-4 rounded-2xl border transition-all duration-300 hover:bg-white hover:text-miniBlog-text cursor-pointer'>
                <span className='font-medium'>#</span>
                {tag}
              </p>
            ))}
          </div>
          <h1 className='text-lg font-medium my-3'>
            {title}
          </h1>
          <p className='text-white/60 leading-relaxed mb-3'>
            {headline}
          </p>
          <div className='flex items-center flex-wrap '>
            <Link
              to={`/posts/${id}`}
              className='text-white p-2 border inline-flex items-center md:mb-2 lg:mb-0 duration-300 hover:bg-white hover:text-miniBlog-bg2'>
              Leia mais
              <BsArrowRightShort size={24} className=' ml-2' />
            </Link>
            <div className='flex items-center ml-auto md:ml-0 lg:ml-auto gap-3' style={adminTools ? { visibility: 'visible' } : { visibility: 'hidden' }}>
              <Link to={editPage}>
                <CiEdit className='hover:text-miniBlog-grass cursor-pointer' size={24} />
              </Link>
              <AiOutlineDelete className='hover:text-red-800 cursor-pointer' size={24} onClick={onClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
