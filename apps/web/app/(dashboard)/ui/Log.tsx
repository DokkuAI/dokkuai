import Image from "next/image";

export function Log({ title, name, svg, date, avatar }: any) {
  return (
    <div className="flex gap-4">
      <Image src={svg} alt="activity icon" />
      <div className="flex flex-col gap-1">
        <div className="text-[#565E6C] font-normal text-[12px] leading-5">
          {date}
        </div>
        <div className="text-[#171A1F] font-bold text-[14px] leading-[22px]">
          {title}
        </div>
        <div className="flex gap-1 items-center">
          <Image src={avatar} width={20} height={20} alt="avatar" />
          <div className="text-xs leading-5 teext-[#171A1F] font-bold">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
