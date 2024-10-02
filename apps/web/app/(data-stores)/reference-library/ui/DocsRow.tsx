import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import OtherTypeIcon from "@/public/OtherType.svg";
import PdfTypeIcon from "@/public/PdfType.svg";
import LinkTypeIcon from "@/public/LinkType.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteFile from "./DeleteFile";
import FileTitle from "../../ui/RecordTitle";

export default function DocsRow({
  id,
  type,
  name,
  year,
  authors,
  source,
  tags,
  dateAdded,
  setDlt,
}: any) {
  function selectTypeIcon(type: string) {
    switch (type) {
      case "other":
        return <Image src={OtherTypeIcon} alt="file icon" />;
      case "pdf":
        return <Image src={PdfTypeIcon} alt="pdf icon" />;
      case "link":
        return <Image src={LinkTypeIcon} alt="link icon" />;
    }
  }

  return (
    <TableRow className="text-[14px] leading-[22px] text-[#171A1F] font-normal">
      <TableCell>{selectTypeIcon(type)}</TableCell>
      <TableCell className="font-bold hover:underline cursor-pointer hover:border-black border-l-2">
        <FileTitle name={name} id={id} url={"library"} />
      </TableCell>
      <TableCell>{year}</TableCell>
      <TableCell>{authors}</TableCell>
      <TableCell>{source}</TableCell>
      <TableCell className="">{tags}</TableCell>
      <TableCell>{dateAdded}</TableCell>
      <TableCell className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={ThreeDotIcon} alt="three dot icon" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DeleteFile id={id} setDlt={setDlt} />
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
