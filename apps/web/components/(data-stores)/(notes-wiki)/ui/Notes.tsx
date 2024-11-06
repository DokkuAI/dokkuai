import { Table, TableHeader, TableRow } from "@/components/ui/table";
import HeadCell from "../../ui/HeadCell";
import NotesFiles from "./NotesFiles";
import { Suspense } from "react";
import Skeleton from "@/components/ui/Skeleton";

export default function Notes() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <HeadCell title="" className="w-14" />
          <HeadCell title="NAME" className="" />
          <HeadCell title="LAST MODIFIED" className="w-40" />
          <HeadCell title="LINK TO" className="" />
          <HeadCell title="PAGES" className="w-10" />
          <HeadCell title="TAGS" className="" />
          <HeadCell title="CREATED BY" className="" />
          <HeadCell title="OPTIONS" className="text-center w-10" />
        </TableRow>
      </TableHeader>

        <Suspense fallback={<Skeleton />}>
          <NotesFiles />
        </Suspense>
    </Table>
  );
}
