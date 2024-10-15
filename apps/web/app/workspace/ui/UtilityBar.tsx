import React from "react";
import ChatIconLight from "@/public/light_theme/ChatIcon.svg";
import CommentIconLight from "@/public/light_theme/CommentIcon.svg";
import NotepadIconLight from "@/public/light_theme/NotepadIcon.svg";
import ChatIconDark from "@/public/dark_theme/ChatIcon.svg";
import CommentIconDark from "@/public/dark_theme/CommentIcon.svg";
import NotepadIconDark from "@/public/dark_theme/NotepadIcon.svg";
import Image from "next/image";
import clsx from "clsx";

type stateInput = {
  chat: boolean;
  setChat: any;
  comment: boolean;
  setComment: any;
  note: boolean;
  setNote: any;
};

export default function UtilityBar({
  chat,
  setChat,
  comment,
  setComment,
  note,
  setNote,
}:stateInput) {
  return (
    <div className="px-4 h-[56px] flex justify-center items-center gap-[20px] border-2">
      <div
        className={clsx(
          "h-[36px] flex items-center px-[12px] gap-[6px] rounded cursor-pointer",
          {
            "text-[#323842] bg-[#F3F4F6]": !chat,
            "text-white bg-black": chat,
          }
        )}
        onClick={() => {
          setComment(() => {
            return false;
          });
          setChat((value: boolean) => {
            return !value;
          });
        }}
      >
        <Image src={chat ? ChatIconDark : ChatIconLight} alt={"Chatbox Icon"} />
        <div className="text-[14px] leading-[22px] font-normal">Chat</div>
      </div>
      <div
        className={clsx(
          "h-[36px] flex items-center px-[12px] gap-[6px] rounded cursor-pointer",
          {
            "text-[#323842] bg-[#F3F4F6]": !comment,
            "text-white bg-black": comment,
          }
        )}
        onClick={() => {
          setNote(() => {
            return false;
          });
          setChat(() => {
            return false;
          });
          setComment((value: boolean) => {
            return !value;
          });
        }}
      >
        <Image
          src={comment ? CommentIconDark : CommentIconLight}
          alt="Comment Icon"
        />
        <div className="text-[14px] leading-[22px] font-normal">Comments</div>
      </div>
      <div
        className={clsx(
          "h-[36px] flex items-center px-[12px] gap-[6px] rounded cursor-pointer",
          {
            "text-[#323842] bg-[#F3F4F6]": !note,
            "text-white bg-black": note,
          }
        )}
        onClick={() => {
          setComment(() => {
            return false;
          });
          setNote((value: boolean) => {
            return !value;
          });
        }}
      >
        <Image
          src={note ? NotepadIconDark : NotepadIconLight}
          alt="Notepad Icon"
        />
        <div className="text-[14px] leading-[22px] font-normal">Notes</div>
      </div>
    </div>
  );
}