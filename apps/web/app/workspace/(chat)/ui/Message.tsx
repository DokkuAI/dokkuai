import Image from 'next/image'
import React from 'react'

const Message = ({message:{content, name, src}} : any) => {
  return (
    <div className="flex gap-2 w-full">
        <div className='w-9 h-9'><Image src={src} alt="profile icon" width={36} height={36} /></div>
      
      <div className="flex flex-col w-full">
        <div className="h-[36px] flex items-center justify-start text-[16px] leading-[26px] font-bold">
          {name}
        </div>
        <div className="w-full text-[16px] leading-[26px] font-normal">{content}</div>
      </div>
    </div>
  );
}

export default Message