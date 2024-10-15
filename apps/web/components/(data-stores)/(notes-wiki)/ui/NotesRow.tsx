import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import OtherTypeIcon from "@/public/OtherType.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteNote from "./DeleteNote";
import NoteTitle from "../../ui/RecordTitle";
import NotePin from "./NotePin";
import Link from "next/link";
import { ProjectLink } from "../../ui/ProjectLink";
import { FilesLink } from "./NotesLink";

export default function NotesRow({
  id,
  name,
  lastModified,
  linkTo,
  pages,
  tags,
  createdBy,
  pinned,
  setDlt,
}: any) {
  return (
    <TableRow className="text-[14px] leading-[22px] text-[#171A1F] font-normal">
      <TableCell>
        <Image src={OtherTypeIcon} alt="file icon" />
      </TableCell>
      <TableCell className="font-bold hover:underline cursor-pointer hover:border-black border-l-2">
        <NoteTitle name={name} id={id} url={"notes"} />
      </TableCell>
      <TableCell>{lastModified}</TableCell>
      <TableCell>{linkTo}</TableCell>
      <TableCell>{pages}</TableCell>
      <TableCell className="">{tags}</TableCell>
      <TableCell>{createdBy}</TableCell>
      <TableCell className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={ThreeDotIcon} alt="three dot icon" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <DeleteNote id={id} setDlt={setDlt} />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NotePin pinned={pinned} id={id} />
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <ProjectLink id={id} url="notes" />
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <FilesLink id={id}/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
