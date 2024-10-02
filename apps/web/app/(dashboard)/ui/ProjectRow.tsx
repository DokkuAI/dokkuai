import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ThreeDotIcon from "@/public/ThreeDot.svg";
import StarIcon from "@/public/Star.svg";

export default function ProjectRow({
  name,
  dateCreated,
  tags,
  createdBy,
}: any) {
  return (
    <TableRow className="text-[14px] leading-[22px] text-[#171A1F] font-normal">
      <TableCell>
        <Image src={StarIcon} alt="file icon" />
      </TableCell>
      <TableCell className="font-bold">{name}</TableCell>
      <TableCell>{dateCreated}</TableCell>
      <TableCell className="">{tags}</TableCell>
      <TableCell>{createdBy}</TableCell>
      <TableCell className="flex justify-center">
        <Image src={ThreeDotIcon} alt="three dot icon" />
      </TableCell>
    </TableRow>
  );
}
