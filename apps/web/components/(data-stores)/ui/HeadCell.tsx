import { TableHead } from "@/components/ui/table";

export default function HeadCell({ title, className }: any) {
  return (
    <TableHead
      className={`text-[14px] leading-[22px] text-[#565E6C] bg-[#F3F4F6] font-semibold ${className}`}
    >
      {title}
    </TableHead>
  );
}