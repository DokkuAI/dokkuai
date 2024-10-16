import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PdfTypeIcon from "@/public/PdfType.svg";
import LinkTypeIcon from "@/public/LinkType.svg";
import SearchIcon from "@/public/Search.svg";
import FilterIcon from "@/public/Filter.svg";
import ViewIcon from "@/public/View.svg";
import OtherSourcesIcon from "@/public/OtherSources.svg";
import AllFilesIcon from "@/public/AllFiles.svg";
import Image from "next/image";
import Button from "../ui/Button";
import Library from "./ui/Library";
import UploadIcon from "@/public/Upload.svg";
import ImportProject from "./ui/ImportProject";

function ReferenceLibrary() {
  return (
    <>
      <Tabs defaultValue="allFiles" className="w-full flex-grow flex flex-col">
        <div className="flex justify-between px-4 lg:px-16 items-center py-2 shadow">
          <TabsList className="gap-4 bg-transparent text-[14px] leading-[22px] font-bold text-[#5E5D5A]">
            <TabsTrigger value="allFiles" className="flex gap-2 px-2">
              <Image src={AllFilesIcon} alt="icon" />
              All Files
            </TabsTrigger>
            <TabsTrigger value="onlyPDFs" className="flex gap-2 px-2">
              <Image src={PdfTypeIcon} alt="icon" />
              Only PDFs
            </TabsTrigger>
            <TabsTrigger value="onlyLinks" className="flex gap-2 px-2">
              <Image src={LinkTypeIcon} alt="icon" />
              Only Links
            </TabsTrigger>
            <TabsTrigger value="other" className="flex gap-2 px-2">
              <Image src={OtherSourcesIcon} alt="icon" />
              Other Sources
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-3 items-center">
            <ImportProject title="Import" svg={UploadIcon} />
            <Button title="Search" svg={SearchIcon} />
            <Button title="Filters" svg={FilterIcon} />
            <Button title="View" svg={ViewIcon} />
          </div>
        </div>

        <TabsContent
          value="allFiles"
          className=" px-10 mt-5 max-h-[600px] overflow-y-auto"
        >
          <Library />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default ReferenceLibrary;
