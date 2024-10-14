import NotesWiki from "@/components/(data-stores)/(notes-wiki)/NotesWiki";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col max-h-dvh">
      <div className="h-[56px] w-full flex items-center gap-4 px-[16px]` text-[#565E6C] border-2 px-4">
        <Navbar />
      </div>
      <NotesWiki />
    </div>
  );
};

export default page;
