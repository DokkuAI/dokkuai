import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import React, { Suspense } from "react";
import HeadCell from "@/components/(data-stores)/ui/HeadCell";
import Skeleton from "@/components/ui/Skeleton";
import Projects from "./Projects";

const MyProjects = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <HeadCell title="" className="w-14" />
          <HeadCell title="PROJECTS" className="" />
          <HeadCell title="DATE CREATED" className="w-40" />
          <HeadCell title="TAGS" className="" />
          <HeadCell title="CREATED BY" className="" />
          <HeadCell title="OPTIONS" className="text-center w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        <Suspense fallback={<Skeleton />}>
          <Projects />
        </Suspense>
      </TableBody>
    </Table>
  );
};

export default MyProjects;
