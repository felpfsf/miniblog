import { Link } from "react-router-dom"

export const PostCard = ({ postImgUrl, id, postTitle, tags }) => {
  return (
    <div className='w-[336px] mt-4 mx-auto p-2 flex flex-col gap-4'>
      <div className='w-full h-[336px] rounded-lg overflow-hidden'>
        <img src={postImgUrl} alt="" className='w-full h-full' />
      </div>
      <h1 className="text-lg font-medium">{postTitle}</h1>
      <div className='flex gap-3 self-center'>{tags.map((tag, index) => (
        <p key={index} className='py-1 px-2 text-sm font-light leading-4 rounded-2xl border transition-all duration-300 hover:bg-white hover:text-miniBlog-text cursor-pointer'><span className="font-medium">#</span>{tag}</p>
      ))}
      </div>
      <Link to={`/posts/${id}`} className='w-24 text-lg leading-[0.8] text-white p-2 border transition-all duration-300 hover:bg-white hover:text-miniBlog-bg2'>Ler</Link>
    </div>
  )
}