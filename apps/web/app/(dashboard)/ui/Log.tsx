import Image from "next/image";
import WorkspaceIcon from "@/public/Activity.svg";
import NotesIcon from "@/public/Created.svg";
import DeletedIcon from "@/public/Deleted.svg";
import ImportedIcon from "@/public/Imported.svg";
import AddedIcon from "@/public/Added.svg";



export function Log({ title, name, type, date, avatar }: any) {
   function selectTypeIcon(type: string) {
     switch (type) {
       case "created-note":
         return <Image src={NotesIcon} alt="icon" />;
       case "created-workspace":
         return <Image src={WorkspaceIcon} alt="icon" />;
       case "imported-file":
         return <Image src={ImportedIcon} alt="icon" />;
       case "added":
         return <Image src={AddedIcon} alt="icon" />;
       case "deleted":
         return <Image src={DeletedIcon} alt="icon" />;
     }
   }
  return (
    <div className="flex gap-4">
      {selectTypeIcon(type)}
      <div className="flex flex-col gap-1">
        <div className="text-[#565E6C] font-normal text-[12px] leading-5">
          {date}
        </div>
        <div className="text-[#171A1F] font-bold text-[14px] leading-[22px]">
          {title}
        </div>
        <div className="flex gap-1 items-center">
          <Image src={avatar} width={20} height={20} alt="avatar" />
          <div className="text-xs leading-5 teext-[#171A1F] font-bold">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
