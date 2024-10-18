import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadIcon from "@/public/Upload.svg";
import SearchIcon from "@/public/Search.svg";
import FilterIcon from "@/public/Filter.svg";
import ViewIcon from "@/public/View.svg";
import AllNotesIcon from "@/public/AllFiles.svg";
import LinkedNotesIcon from "@/public/LinkedNotes.svg";

import Image from "next/image";
import Button from "../ui/Button";
import Notes from "./ui/Notes";
import CreateNote from "./ui/CreateNote";

function NotesWiki() {
  return (
    <Tabs defaultValue="allNotes" className="w-full flex-grow flex flex-col">
      <div className="flex justify-between px-4 lg:px-16 items-center py-2 shadow">
        <TabsList className="gap-4 bg-transparent text-[14px] leading-[22px] font-bold text-[#5E5D5A]">
          <TabsTrigger value="allNotes" className="flex gap-2 px-2">
            <Image src={AllNotesIcon} alt="icon" />
            All Notes
          </TabsTrigger>
          <TabsTrigger value="linkedDocs" className="flex gap-2 px-2">
            <Image src={LinkedNotesIcon} alt="icon" />
            Linked Docs
          </TabsTrigger>
        </TabsList>
        <div className="flex gap-3 items-center">
          <CreateNote />
          <Button title="Import" svg={UploadIcon} />
          <Button title="Search" svg={SearchIcon} />
          <Button title="Filters" svg={FilterIcon} />
          <Button title="View" svg={ViewIcon} />
        </div>
      </div>

      <TabsContent
        value="allNotes"
        className=" px-10 mt-5 max-h-[600px] overflow-y-auto"
      >
        <Notes />
      </TabsContent>
    </Tabs>
  );
}

export default NotesWiki;
