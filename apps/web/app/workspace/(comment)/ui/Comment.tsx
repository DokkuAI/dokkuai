import Image from "next/image";
import CheckIcon from "@/public/CheckIcon.svg";
import CrossIcon from "@/public/CrossIcon.svg"
import Reply from "./Reply";
import { useRef } from "react";

const Comment = ({ comment: { content, name, src, role, time, replies } }: any) => {

    // const [reply, setReply] = useState(replies);
    const replyContainer = useRef(null);
  return (
    <div className="flex gap-2 w-full">
      <div className="w-9 h-9">
        <Image src={src} alt="profile icon" width={36} height={36} />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex gap-3 items-center w-full">
          <div className="h-[36px] flex items-center justify-start text-[16px] leading-[26px] font-bold">
            {`${name} (${role})`}
          </div>
          <div className=" text-[12px] leading-[20px] font-normal text-[#424955]">
            {time}
          </div>
        </div>
        <div className="w-full text-[16px] leading-[26px] font-normal">
          {content}
        </div>
        <div className="flex items-center justify-between w-full h-10 px-3 ">
          <div className="text-[14px] leading-[22px] font-normal text-[#2D66F5] max-w-20 flex flex-grow justify-between cursor-pointer">
            <div>Like</div>
            <div>Reply</div>
          </div>
          <div className="max-w-[190px] flex flex-grow justify-between">
            <div className=" h-[25px] flex items-center justify-center gap-2 bg-[#F3F4F6] px-2 cursor-pointer">
              <div>Accept</div>
              <Image src={CheckIcon} alt="Green check icon" />
            </div>
            <div className=" h-[25px] flex items-center justify-center gap-2 bg-[#F3F4F6] px-2 cursor-pointer">
              <div>Reject</div>
              <Image src={CrossIcon} alt="Red Cross icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  gap-6 items-start mt-4" ref={replyContainer}>
          {replies.map((reply: any, index: any) => {
            return <Reply reply={reply} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
