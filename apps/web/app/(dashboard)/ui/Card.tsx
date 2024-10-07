import PinIcon from "@/public/Pin.svg";
import Image from "next/image";
import BlueNotesIcon from "@/public/BlueNotes.svg";


export default function ProjectCard({
  pinned = false,
  title,
  name,
  date,
  avatar,
}: {
  pinned: boolean;
  name: string;
  date: string;
  title: string;
  avatar: any;
}) {
  return (
    <div className="w-[188px] h-[127px] flex flex-col justify-center items-center gap-2 border-2 border-[#F3F4F6] rounded-lg">
      {pinned ? (
        <div className="flex w-full justify-end px-2">
          <Image src={PinIcon} alt="pin icon" className="cursor-pointer" />
        </div>
      ) : null}
      <div className="flex gap-2 items-center">
        <Image src={BlueNotesIcon} alt="blue notes icon" />
        <div className="text-[14px] leading-[22px] text-[#323842]">{title}</div>
      </div>
      <div className="flex gap-1 items-center">
        <Image src={avatar} width={20} height={20} alt="avatar" />
        <div className="text-xs leading-5 teext-[#171A1F] font-bold">
          {name}
        </div>
      </div>
      <div className="text-xs leading-5 text-[#565E6C] font-normal">{date}</div>
    </div>
  );
}
