import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import HeadCell from "../../(data-stores)/ui/HeadCell";
import Row from "./ProjectRow";

const Projects = () => {
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
        <Row
          name="Robotics"
          dateCreated="November 21, 2024"
          tags="$250.00"
          createdBy="John"
        />
        <Row
          name="Telepathy"
          dateCreated="June 2, 2024"
          tags="-"
          createdBy="me"
        />
      </TableBody>
    </Table>
  );
};

export default Projects;
