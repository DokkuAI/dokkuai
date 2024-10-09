import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import StarIcon from "@/public/Star.svg";
import YellowStarIcon from "@/public/YellowStar.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProjectTitle from "./ProjectTitle";
import DeleteProject from "./DeleteProject";

export default function ProjectRow({
  favourite,
  title,
  dateCreated,
  tags,
  createdBy,
  id,
  setDlt
}: any) {
  function selectTypeIcon(value: boolean) {
    switch (value) {
      case true:
        return <Image src={YellowStarIcon} alt="favourite icon" />;
      case false:
        return <Image src={StarIcon} alt="non-favourite icon" />;
    }
  }
  return (
    <TableRow className="text-[14px] leading-[22px] text-[#171A1F] font-normal">
      <TableCell>{selectTypeIcon(favourite)}</TableCell>
      <TableCell className="font-bold hover:underline cursor-pointer hover:border-black border-l-2">
        <ProjectTitle title={title} id={id} />
      </TableCell>
      <TableCell>{dateCreated}</TableCell>
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
              <DeleteProject id={id} setDlt={setDlt} />
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
