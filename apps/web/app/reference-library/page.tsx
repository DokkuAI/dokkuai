import ReferenceLibrary from "@/components/(data-stores)/(reference-library)/ReferenceLibrary";
import FileDetails from "@/components/(data-stores)/(reference-library)/ui/FileDetails";
import { ProjectLinkUnlink } from "@/components/(data-stores)/ui/ProjectLink";
import Upload from "@/components/(data-stores)/(reference-library)/ui/Upload";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Upload />
      <FileDetails />
      <ProjectLinkUnlink />
      <div className="flex flex-col max-h-dvh">
        <div className="h-[56px] w-full flex items-center gap-4 px-[16px]` text-[#565E6C] border-2 px-4">
          <Navbar />
        </div>
        <ReferenceLibrary />
      </div>
    </>
  );
};

export default page;
