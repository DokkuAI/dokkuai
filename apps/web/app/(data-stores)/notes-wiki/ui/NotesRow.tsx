import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import OtherTypeIcon from "@/public/OtherType.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteNote from "./DeleteNote";
import NoteTitle from "../../ui/RecordTitle";

export default function NotesRow({
  id,
  name,
  lastModified,
  linkTo,
  pages,
  tags,
  createdBy,
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
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DeleteNote id={id} setDlt={setDlt} />
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
