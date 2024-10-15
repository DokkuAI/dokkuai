import { Suspense } from "react";
import NotesEditor from "./ui/NotesEditor";
import Skeleton from "@/components/ui/Skeleton";
import Navbar from "@/components/ui/Navbar";
import Hamburger from "@/app/workspace/ui/Hamburger";

const page = () => {
  return (
    <div className="flex flex-col max-h-dvh">
      <div className="min-h-[56px] w-full flex items-center gap-4 px-[16px]` text-[#565E6C] border-2 px-4">
        <Hamburger />
        <Navbar />
      </div>
      <Suspense fallback={<Skeleton />}>
        <NotesEditor />
      </Suspense> 
    </div>
  );
};

export default page;
