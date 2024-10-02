"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Usage() {
  const [team, setTeam] = useState<boolean>(false);
  const [solo, setSolo] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const router = useRouter();

  async function handleClick() {
    if (solo || team) {
      const workspaceType = {type : solo?"personal":"team"};
      console.log(workspaceType);
      const {data} = await axios.post("http://localhost:8080/v1/workspace", workspaceType);
      localStorage.setItem("id", data._id);
      router.push("/sign-up/create-workspace/details");
    } else {
      setDisplay(true);
    }
  }

  return (
    <div className="flex flex-col gap-[13px] text-[#171A1F] text-center items-center mx-4">
      <div className="text-[28px] leading-[42px] font-bold">
        How do you want to use DokkuAI?
      </div>
      <div className="text-[16px] leading-[26px] font-normal">
        This helps customize your <span className="font-bold">experience</span>
      </div>
      <div className="flex  gap-[38px] mt-[50px]">
        <div className="flex flex-col gap-3 w-1/2">
          <div
            className={clsx(
              "w-full flex flex-grow flex-col justify-between items-center p-4 gap-2 border-2 rounded",
              {
                "border-[#BCC1CA]": !team,
                "border-[#323842]": team,
              }
            )}
          >
            <Image
              width="311"
              height="156"
              src="/team.png"
              alt="team icon"
              className="mb-2"
            />
            <div className="flex flex-col gap-2">
              <div className="text-[14px] leading-[22px] text-[#323842] font-bold">
                For my team
              </div>
              <div className="text-[14px] leading-[22px] text-[#323842] font-normal">
                Collaborate and share with others
              </div>
            </div>
          </div>
          <form className="form">
            <input
              className="h-5 w-5 cursor-pointer rounded shadow hover:shadow-md"
              type="checkbox"
              name="team"
              checked={team}
              onChange={(e) => {
                setSolo(false);
                setTeam(e.target.checked);
              }}
            />
          </form>
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <div
            className={clsx(
              "w-full flex flex-grow flex-col justify-between items-center p-4 gap-2 border-2 rounded",
              {
                "border-[#BCC1CA]": !solo,
                "border-[#323842]": solo,
              }
            )}
          >
            <Image width="189" height="156" src="/solo.png" alt="solo icon" />
            <div className="flex flex-col gap-2">
              <div className="text-[14px] leading-[22px] text-[#323842] font-bold">
                For personal use
              </div>
              <div className="text-[14px] leading-[22px] text-[#323842] font-normal">
                Stay organized and think better when alone
              </div>
            </div>
          </div>
          <form className="form">
            <input
              className="   h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
              type="checkbox"
              name="team"
              checked={solo}
              onChange={(e) => {
                setTeam(false);
                setSolo(e.target.checked);
              }}
            />
          </form>
        </div>
      </div>
      {display ? (
        <div className="text-[14px] leading-[22px] text-red-500 font-bold">
          ! Choose a workspace type
        </div>
      ) : null}

      <button
        onClick={handleClick}
        className="mb:w-[374px] mt-5 w-[280px] h-[44px] bg-[#171A1F] rounded-lg text-[16px] leading-[26px] font-normal text-[#FFFFFF] flex items-center justify-center "
      >
        Continue
      </button>
    </div>
  );
}
