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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteFile from "./DeleteFile";
import FileTitle from "../../ui/RecordTitle";
import Link from "next/link";
import FilePin from "./FilePin";
import { ProjectLink } from "../../ui/ProjectLink";
import { Details } from "./FileDetails";
import NoteIcon from "@/public/Note.svg";
import ReadIcon from "@/public/Read.svg";
import CommentIcon from "@/public/Comment.svg";
import ChatIcon from "@/public/Chat.svg";
import DownloadIcon from "@/public/Download.svg";

export default function DocsRow({
  id,
  type,
  name,
  year,
  authors,
  source,
  tags,
  dateAdded,
  pinned,
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
      <TableCell className="font-bold hover:underline cursor-pointer">
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
          <DropdownMenuContent className="mr-8">
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-2">
                <Image src={ReadIcon} alt="chat icon" />
                Read
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-2">
                <Image src={DownloadIcon} alt="chat icon" />
                Download
              </div>
            </DropdownMenuItem>
            <DeleteFile id={id} />
            <DropdownMenuItem className="p-0 cursor-pointer">
              <Details id={id} />
            </DropdownMenuItem>
            <FilePin pinned={pinned} id={id} />
            <DropdownMenuItem className="p-0 cursor-pointer">
              <ProjectLink id={id} url="library" />
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <Link
                className="w-full px-2 py-1.5"
                href={{
                  pathname: "/workspace",
                  query: { chat: true },
                }}
              >
                <div className="flex items-center gap-2">
                  <Image src={ChatIcon} alt="chat icon" />
                  Chat with document
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <Link
                className="w-full px-2 py-1.5"
                href={{
                  pathname: "/workspace",
                  query: { comment: true },
                }}
              >
                <div className="flex items-center gap-2">
                  <Image src={CommentIcon} alt="chat icon" />
                  Add in comments
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <Link
                className="w-full px-2 py-1.5"
                href={{
                  pathname: "/workspace",
                  query: { note: true },
                }}
              >
                <div className="flex items-center gap-2">
                  <Image src={NoteIcon} alt="chat icon" />
                  Write in notes
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
