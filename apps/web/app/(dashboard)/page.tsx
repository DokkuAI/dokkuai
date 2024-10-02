import Projects from "./ui/Projects";
import Button from "../(data-stores)/ui/Button";
import EditIcon from "@/public/Edit.svg";
import ProjectCards from "./ui/ProjectCards";
import ActivityLog from "./ui/ActivityLog";
import { Suspense } from "react";
import Skeleton from "@/components/ui/Skeleton";

const page = () => {
  return (
    <div className="flex gap-6 p-5 max-h-dvh">
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
            Recently Viewed
          </div>
          <div className="flex gap-5">
            <ProjectCards pinned={false} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
            Pinned
          </div>
          <div className="flex gap-5">
            {/* <ProjectCards pinned={true} /> */}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[20px] leading-[30px] font-bold">
            My Projects
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <Button title="Create New" svg={EditIcon} />
            </div>
            <Projects />
          </div>
        </div>
      </div>
      <div className="min-w-[420px] flex flex-col gap-5 p-4">
        <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
          Activity Logs
        </div>
        <Suspense fallback={<Skeleton/>}><ActivityLog /></Suspense>
        
      </div>
    </div>
  );
};


export default page;
