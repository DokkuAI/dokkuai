import StarIcon from "@/public/Star.svg";
import Image from "next/image";
import ReadPdfIcon from "@/public/ReadPdf.svg";
import ExportIcon from "@/public/Export.svg";
import PenIcon from "@/public/Pen.svg";
import AddTagIcon from "@/public/AddTag.svg"
import LinkTypeIcon from "@/public/LinkType.svg"
import { Textarea } from "@/components/ui/textarea";
import RemoveIcon from "@/public/Remove.svg"

const FileDetails = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-[#171A1F66]">
      <div className="flex flex-col bg-white w-2/5 min-w-[500px] px-6 pb-6 pt-3 gap-2">
        <div className="flex justify-end cursor-pointer">
          <Image src={RemoveIcon} alt="close icon" />
        </div>
        <div className="flex gap-3 w-full my-1">
          <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
            Journal Article
          </div>
          <Image src={StarIcon} alt="star icon" className="cursor-pointer" />
        </div>
        <div className="text-[20px] leading-[30px] text-[#171A1F] font-bold w-full">
          ChatGPT for Robotics: Design System for Robust Implementation
        </div>
        <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
          Kao, Chi Sai, Jaskirat, and Rahul
        </div>
        <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
          Published in IEEE Robotics and Automation Letter, 2024
        </div>
        <div className="mt-2 mb-1 flex gap-7 h-9">
          <div className="flex gap-2 px-2 bg-[#FDF2F2] items-center rounded cursor-pointer text-[#DE3B40]">
            <Image src={ReadPdfIcon} alt="read pdf icon" />
            Read PDF
          </div>
          <div className="flex gap-2 px-2 bg-[#F0F4FE] items-center rounded cursor-pointer text-[#2D66F5]">
            <Image src={ExportIcon} alt="export icon" />
            Export Citation
          </div>
        </div>
        <div className="w-full border border-[#DEE1E6]"></div>
        <div className="flex justify-between items-center">
          <div className="text-[14px] leading-[22px] text-[#171A1F] font-bold">
            Abstract
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src={PenIcon} alt="pen icon" />
            <div className="text-[14px] leading-[22px] text-[#9095A0] font-semibold">
              Edit
            </div>
          </div>
        </div>
        <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
          To assess the state-of-the-art in research on trust in robots and to
          examine if recent methodological advances can aid in the development
          of trustworthy robots. While traditional work iin trustworthy robotics
          has focused on studying the antecedents and consequences of trust in
          robots, recent work has gravitated towards the development of
          strategies for robots to actively .....
          <span className="text-[#2D66F5] cursor-pointer">Read More</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="text-[14px] leading-[22px] text-[#171A1F] font-bold">
            Tags
          </div>
          <Image src={AddTagIcon} alt="Add icon" className="cursor-pointer" />
        </div>
        <div></div>
        <div className="mt-2 flex justify-between w-full text-[14px] leading-[22px] text-[#171A1F] ">
          <div className="font-bold">URL</div>
          <div className="font-semibold">
            https://github.com/jaskiratsingh2000/umd
          </div>
        </div>
        <div className="mt-2 flex justify-between w-full text-[14px] leading-[22px] text-[#171A1F] ">
          <div className="font-bold">File type</div>
          <div className="flex gap-2">
            <Image src={LinkTypeIcon} alt="icon" />{" "}
            <div className="font-semibold">Link</div>
          </div>
        </div>
        <div className="mt-2 flex justify-between w-full text-[14px] leading-[22px] text-[#171A1F] ">
          <div className="font-bold">Size</div>
          <div className="font-semibold">-</div>
        </div>
        <Textarea
          placeholder="Add a note..."
          className="mt-6 placeholder:text-[#171A1F] bg-[#F3F4F6] min-h-[80px] max-h-[80px]"
        />
      </div>
    </div>
  );
};

export default FileDetails;
