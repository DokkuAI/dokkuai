import Link from "next/link";

export const Button = ({href}:{href:string}) => {
  return (
    <Link
      href={href}
      className="mb:w-[374px] w-[280px] h-[44px] bg-[#171A1F] rounded-lg text-[16px] leading-[26px] font-normal text-[#FFFFFF] flex items-center justify-center "
    >
      Continue
    </Link>
  );
};
