import Image from "next/image";

export default function Button({ title, svg }: any) {
  return (
    <div className="cursor-pointer h-9 flex items-center gap-2 px-2 rounded bg-[#F3F4F6] border-2 border-[#F3F4F6] hover:border-black">
      <Image src={svg} alt="icon" />
      {title}
    </div>
  );
}

