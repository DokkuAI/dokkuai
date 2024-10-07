"use client";

import RemoveIcon from "@/public/Remove.svg";
import Image from "next/image";
import CrossIcon from "@/public/Cross.svg";
import { Progress } from "@/components/ui/progress";
import UploadFile from "./UploadFile";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Upload = () => {
  const searchParams = useSearchParams();

  return searchParams.get("showUpload") === "y" ? (
    <div className="fixed w-full h-dvh -translate-x-50 -translate-y-50 z-10  bg-gray-800/50 flex justify-center items-center">
      <div className="flex flex-col bg-white w-2/5 min-w-[500px] px-6 pb-6 pt-3 gap-3 text-center border-2 rounded-lg">
        <div className="flex justify-end cursor-pointer">
          <Link href="/reference-library">
            <Image src={RemoveIcon} alt="close icon" />
          </Link>
        </div>
        <div className="text-[32px] leading-[48px] text-[#171A1F] font-bold w-full">
          Upload files
        </div>
        <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
          PDF, Docx, Links. Max 10MB each.
        </div>
        <div className="h-[200px] border-dashed border-2 rounded-lg mt-4 mb-7 border-[#1D2128] flex items-center justify-center">
          <UploadFile/>
        </div>
      </div>
    </div>
  ) : null;
};

export default Upload;

function UploadProgress() {
  return (
    <>
      <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal text-left">
        Uploading files
      </div>
      <div className="my-1 flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <Image src="/png.png" width={48} height={48} alt="image" />
          <div className="flex flex-col w-full ">
            <div className="text-[14px] leading-[22px] font-normal flex items-center justify-between">
              <div className="text-[#171A1F]">Image-100.docx</div>
              <div className="text-[#9095A0]">76%</div>
            </div>
            <Progress value={33} />
          </div>
          <Image src={CrossIcon} alt="cross icon" className="ml-3" />
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/png.png" width={48} height={48} alt="image" />
          <div className="flex flex-col w-full h-full">
            <div className="text-[14px] leading-[22px] font-normal flex items-center justify-between">
              <div className="text-[#171A1F]">Image-100.docx</div>
              <div className="text-[#9095A0]">76%</div>
            </div>
            <Progress value={33} />
          </div>
          <Image src={CrossIcon} alt="cross icon" className="ml-3" />
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/png.png" width={48} height={48} alt="image" />
          <div className="flex flex-col w-full">
            <div className="text-[14px] leading-[22px] font-normal flex items-center justify-between">
              <div className="text-[#171A1F]">Image-100.docx</div>
              <div className="text-[#9095A0]">76%</div>
            </div>
            <Progress value={33} />
          </div>
          <Image src={CrossIcon} alt="cross icon" className="ml-3" />
        </div>
      </div>
    </>
  );
}
