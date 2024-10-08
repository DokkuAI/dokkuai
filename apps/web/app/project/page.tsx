import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import AllFilesIcon from "@/public/AllFiles.svg";
import ReferenceLibrary from "@/components/(data-stores)/(reference-library)/ReferenceLibrary";
import NotesWiki from "@/components/(data-stores)/(notes-wiki)/NotesWiki";

const page = () => {
  return (
    <Tabs
      defaultValue="Files"
      className="w-full min-h-dvh max-h-dvh"
    >
      <div className="flex justify-between px-4 lg:px-16 items-center py-2 shadow">
        <TabsList className="flex gap-4 bg-transparent text-[14px] leading-[22px] font-bold text-[#5E5D5A]">
          <TabsTrigger value="Files" className="flex gap-2 px-2">
            <Image src={AllFilesIcon} alt="icon" />
            Files
          </TabsTrigger>
          <TabsTrigger value="Notes" className="flex gap-2 px-2">
            <Image src={AllFilesIcon} alt="icon" />
            Notes
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="Files" className="mt-0">
        <ReferenceLibrary />
      </TabsContent>
      <TabsContent value="Notes" className="mt-0">
        <NotesWiki />
      </TabsContent>
    </Tabs>
  );
};

export default page;
