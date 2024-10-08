import { Table, TableHeader, TableRow } from "@/components/ui/table";
import HeadCell from "../../ui/HeadCell";
import LibraryFiles from "./LibraryFiles";
import { Suspense } from "react";
import Skeleton from "@/components/ui/Skeleton";
import React from "react";

export default function Library() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <HeadCell title="TYPE" className="w-10" />
            <HeadCell title="TITLE" className="" />
            <HeadCell title="YEAR" className="w-10" />
            <HeadCell title="AUTHORS" className="" />
            <HeadCell title="SOURCE" className="" />
            <HeadCell title="TAGS" className="" />
            <HeadCell title="DATE ADDED" className="w-40" />
            <HeadCell title="OPTIONS" className="text-center w-10" />
          </TableRow>
        </TableHeader>
        <Suspense fallback={<Skeleton />}>
          <LibraryFiles />
        </Suspense>
      </Table>
    </>
  ); 
}
