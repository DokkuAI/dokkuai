import MyProjects from "./ui/MyProjects";
import ProjectCards from "./ui/ProjectCards";
import ActivityLog from "./ui/ActivityLog";
import { Suspense } from "react";
import Skeleton from "@/components/ui/Skeleton";
import CreateProject from "./ui/CreateProject";
import HamburgerIcon from "@/public/Hamburger.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

const page = () => {
  return (
    <div className="flex-col flex min-h-dvh max-h-dvh">
      <div className="h-[56px] w-full flex items-center gap-6 text-[#565E6C] border-2 px-3">
        <Sheet>
          <SheetTrigger>
            <Image src={HamburgerIcon} alt="hamburger icon" />
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side="left">
            <SheetHeader>
              <SheetTitle>DokkuAI</SheetTitle>
              <SheetDescription></SheetDescription>
              <Link href="/reference-library">Reference Library</Link>
              <Link href="/notes-wiki">Notes Wiki</Link>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Navbar />
      </div>
      <div className="flex gap-6 p-5 px-10 flex-grow">
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
              Recently Viewed
            </div>
              <Suspense fallback={<Skeleton />}>
                <ProjectCards />
              </Suspense>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
              Pinned
            </div>
            {/* <div className="flex gap-5 overflow-y-auto">
              <Suspense fallback={<Skeleton />}>
                <ProjectCards />
              </Suspense>
            </div> */}
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-[20px] leading-[30px] font-bold">
              My Projects
            </div>
            <div className="flex flex-col gap-3">
              <CreateProject />
              <MyProjects />
            </div>
          </div>
        </div>
        <div className="min-w-[420px] h-max flex flex-col gap-5 px-4 py-2 border-2 border-[#F3F4F6] rounded-lg">
          <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
            Activity Logs
          </div>
          <Suspense fallback={<Skeleton />}>
            <ActivityLog />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
