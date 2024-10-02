import PlusIcon from "@/public/Plus.svg";
import Image from "next/image";
import { Button } from "../ui/Button";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-[13px]  text-[#171A1F] text-center">
      <div className="text-[28px] leading-[42px] font-bold">
        Invite your team
      </div>
      <div className="text-[16px] leading-[26px] font-normal">
        Start collaborating with your team
      </div>
      <div className="w-full mt-[27px] mb-[31px]">
        <div className="text-[16px] leading-[26px] font-bold text-left">
          Email Address
        </div>
        <div className="w-full flex flex-col gap-[16px] justify-center mt-[5px] mb-[19px]">
          <input
            type="email"
            placeholder="Enter an email address"
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA]"
          />
          <input
            type="email"
            placeholder="Enter an email address"
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA] text-[]"
          />
          <input
            type="email"
            placeholder="Enter an email address"
            className="py-[6px] pl-[12px] h-[35px] w-[285px] mb:w-[379px] rounded border-2 border-[#BCC1CA] text-[]"
          />
        </div>
        <div className="flex items-center gap-[11px]">
          <Image src={PlusIcon} alt="" />
          <div className="text-[#9095A0] text-[16px] leading-[26px] font-normal">
            Add more
          </div>
        </div>
      </div>
      <Button href='/sign-up/welcome' />
    </div>
  );
};

export default Page;
