import SideSectionIcon from "@/public/SideSectionIcon.svg";
import SearchIcon from "@/public/SearchIcon.svg";
import ZoomInIcon from "@/public/ZoomInIcon.svg";
import ZoomOutIcon from "@/public/ZoomOutIcon.svg";
import ThreeDotsIcon from "@/public/ThreeDotsIcon.svg";

import Image from "next/image";

export default function PdfBar() {
  return (

      <div className="h-[56px] w-2/5 flex items-center justify-between px-[16px] gap-[10px] text-[#565E6C] border-2">
        <div className="flex min-w-[164px] items-center gap-[13px]">
          <Image src={SideSectionIcon} alt="Side Section Icon" />
          <Image src={SearchIcon} alt="Side Section Icon" />
          <div className="w-[90px] h-[28px] flex items-center justify-between gap-[5px] px-[6px] bg-[#F3F4F6] rounded">
            <Image src={ZoomInIcon} alt="Zoom In Icon" />
            <div className="text-[14px] leading-[22px] font-normal">100%</div>
            <Image src={ZoomOutIcon} alt="Zoom Out Icon" />
          </div>
        </div>
        <div className="min-w-fit text-[14px] leading-[22px] font-normal">
          1 of 2
        </div>
        <Image src={ThreeDotsIcon} alt="Three Dots Icon" />
      </div>
     

  );
}
