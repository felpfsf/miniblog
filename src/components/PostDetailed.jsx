export const PostDetailed = ({ createdBy, date, imgUrl, message, title, tags }) => {
  return (
    <div className='md:w-2/3 mb-4 mx-auto'>
      <div className="w-full">
        <img
          className='w-full h-48 sm:h-96 object-cover'
          src={imgUrl}
          alt={title}
        />
        <div className="p-4">
          <p className=" text-sm text-white/60 leading-[2px]">{createdBy} / {date}</p>
          <h1 className="text-lg font-medium my-3">{title}</h1>
          <p className="text-sm text-white/80 text-justify">
            {message}
          </p>
          <div className="h-[1px] w-full bg-white/60 my-3"></div>
          <h2 className='tracking-widest text-xs font-medium text-miniBlog-greySoft/70 uppercase mb-1'>
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
        </div>
      </div>
    </div>
  )
}
