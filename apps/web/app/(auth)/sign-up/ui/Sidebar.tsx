"use client";

import { SideCard } from "./SideCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DetailsIcon,
  InviteIcon,
  VerifyIcon,
  WelcomeIcon,
  WorkspaceIcon,
} from "./Svg";

export default function Sidebar() {
  const path = usePathname();

  return (
    <div className="flex-col justify-between h-auto bg-[#F7F7F5] hidden lg:flex pt-[116px] pb-4 min-w-[400px] px-[21px]">
      <div>
        <SideCard
          svg={<DetailsIcon path={path} route="/sign-up" />}
          path={path}
          route="/sign-up"
          title="Your details"
          description="Provide your details for your account"
        />
        <BlueLine />
        <SideCard
          svg={<VerifyIcon path={path} route="/sign-up/verify-email-address" />}
          path={path}
          route="/sign-up/verify-email-address"
          title="Verify your email"
          description="Enter your verification code"
        />
        <BlueLine />
        <SideCard
          svg={<WorkspaceIcon path={path} route="/sign-up/create-workspace" />}
          path={path}
          route="/sign-up/create-workspace/usage"
          route2="/sign-up/create-workspace/details"
          route3="/sign-up/create-workspace/workspace"
          title="Create your workspace"
          description="create your workspace to work better"
        />
        <BlueLine />
        <SideCard
          svg={<InviteIcon path={path} route="/sign-up/invite" />}
          path={path}
          route="/sign-up/invite"
          title="Invite your team"
          description="Start collaborating with your team"
        />
        <BlueLine />
        <SideCard
          svg={<WelcomeIcon path={path} route="/sign-up/welcome" />}
          path={path}
          route="/sign-up/welcome"
          title="Welcome to DokkuAI"
          description="Get up and running in 3 mins"
        />
      </div>
      <div className="flex w-full justify-between items-center order-last">
        <div className="flex gap-[6px]">
          <Link href="/">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 14L4 14"
                stroke="#323842"
                strokeWidth="2.4"
                strokeMiterlimit="10"
              />
              <path
                d="M11 21L4 14L11 7"
                stroke="#323842"
                strokeWidth="2.4"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
            </svg>
          </Link>

          <Link href="/">
            <div className=" leading-[26px] text-[16px] text-[#323842] font-bold">
              Back to home
            </div>
          </Link>
        </div>
        <Link
          href="/sign-in"
          className=" leading-[26px] text-[16px] text-[#323842] font-bold"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

function BlueLine() {
  return <div className="h-[56px] ml-[24px] border-l-2 border-[#5E8AF7]"></div>;
}
