export const PostDetailed = ({ createdBy, postImgUrl, postMsg, postTitle, tags }) => {
  return (
    <div className="max-w-sm w-full mx-auto mb-4 flex flex-col gap-4">
      <h1 className="text-2xl font-black">{postTitle}</h1>
      <div className='w-full h-[336px] rounded-lg overflow-hidden'>
        <img src={postImgUrl} alt={postTitle} className='w-full h-full' />
      </div>
      <div className="">
        <p className="text-sm text-white/80 text-justify">{postMsg}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <p key={index} className='w-auto py-1 px-2 text-sm font-light leading-4 rounded-2xl border transition-all duration-300 hover:bg-white hover:text-miniBlog-text cursor-pointer'><span className="font-medium">#</span>{tag}</p>
        ))}
      </div>
      <div className="h-[1px] w-full mt-2 bg-white/60"></div>
      <div>
        <p className="leading-[2px] text-white/60">Postado por: <span className="ml-2">{createdBy}</span></p>
      </div>
    </div>
  )
}