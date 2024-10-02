"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

const Slider = () => {
  const path = usePathname();

  return (
    <div className="flex gap-[9px] justify-center py-[11px] mt-4 md:pt-0">
      <div
        className={clsx("w-[40px] mb:w-[65px] md:w-[88px]  h-[6px] rounded", {
          "bg-[#CFD2DA]": path !== "/sign-up",
          "bg-[#262A33]": path === "/sign-up",
        })}
      ></div>
      <div
        className={clsx("w-[40px] mb:w-[65px] md:w-[88px]  h-[6px] rounded", {
          "bg-[#CFD2DA]": path !== "/sign-up/verify-email-address",
          "bg-[#262A33]": path === "/sign-up/verify-email-address",
        })}
      ></div>
      <div
        className={clsx("w-[40px] mb:w-[65px] md:w-[88px]  h-[6px] rounded", {
          "bg-[#CFD2DA]": !path.startsWith("/sign-up/create-workspace"),
          "bg-[#262A33]": path.startsWith("/sign-up/create-workspace"),
        })}
      ></div>
      <div
        className={clsx("w-[40px] mb:w-[65px] md:w-[88px]  h-[6px] rounded", {
          "bg-[#CFD2DA]": path !== "/sign-up/invite",
          "bg-[#262A33]": path === "/sign-up/invite",
        })}
      ></div>
      <div
        className={clsx("w-[40px] mb:w-[65px] md:w-[88px]  h-[6px] rounded", {          "bg-[#CFD2DA]": path !== "/sign-up/welcome",
          "bg-[#262A33]": path === "/sign-up/welcome",
        })}
      ></div>
    </div>
  );
};

export default Slider;
