import Image from 'next/image';
import React from 'react'

const Tag = ({src, alt, title}:any) => {
  return (
    <div className="flex gap-2 px-4 bg-[#F3F4F6] items-center py-2 rounded">
      <Image src={src} alt={alt} />
      <div className="text-[14px] leading-[22px] font-normal">{title}</div>
    </div>
  );
}

export default Tag