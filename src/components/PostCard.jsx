import { Link } from 'react-router-dom'

import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { BsArrowRightShort } from 'react-icons/bs'

export const PostCard = ({ postImgUrl, id, postTitle, tags }) => {
  return (
    <div class='p-4 md:w-1/3'>
      <div class='h-full border-2 border-miniBlog-bg3 rounded-lg overflow-hidden'>
        <img
          class='lg:h-48 md:h-36 w-full object-cover object-center'
          src={postImgUrl}
          alt={postTitle}
        />
        <div class='p-6'>
          <h2 class='tracking-widest text-xs title-font font-medium text-gray-500 uppercase mb-1'>
            Categoria
          </h2>
          <div className='flex gap-3 self-center'>
            {tags.map((tag, index) => (
              <p
                key={index}
                className='py-1 px-2 text-xs font-light leading-4 rounded-2xl border transition-all duration-300 hover:bg-white hover:text-miniBlog-text cursor-pointer'>
                <span className='font-medium'>#</span>
                {tag}
              </p>
            ))}
          </div>
          <h1 class='title-font text-lg font-medium text-white my-3'>
            {postTitle}
          </h1>
          <p class='text-white/60 leading-relaxed mb-3'>
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div class='flex items-center flex-wrap '>
            <Link
              to={`/posts/${id}`}
              class='text-white p-2 border inline-flex items-center md:mb-2 lg:mb-0 duration-300 hover:bg-white hover:text-miniBlog-bg2'>
              Leia mais
              <BsArrowRightShort size={24} className=' ml-2' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
