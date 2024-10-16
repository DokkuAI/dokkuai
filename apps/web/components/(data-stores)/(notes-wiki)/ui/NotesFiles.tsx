"use client";

import Row from "./NotesRow";
import usePagination from "@/components/ui/Pagination";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getFiles } from "@/lib/action";
import { Fragment } from "react";

const NotesFiles = () => {
   const { ref, data, hasNextPage } = usePagination({
    key: "notes",
     queryFn: getFiles,
     url: "http://localhost:8080/v1/notes",
   });
return (
  <>
    <TableBody>
      {data?.pages.map((page: any) => {
        return (
          <Fragment key={page.currentPage}>
            {page.data.map((note: any) => {
              return (
                <Row
                  key={note._id}
                  id={note._id}
                  name={note.name}
                  lastModified={note.updatedAt.slice(0, 10)}
                  linkTo={note.linkTo || "-"}
                  pages={note.page || "-"}
                  tags={note.tag || "-"}
                  createdBy={note.createdBy || "-"}
                  pinned={note.pinned}
                />
              );
            })}
          </Fragment>
        );
      })}
      {hasNextPage && (
        <TableRow ref={ref}>
          <TableCell className="text-center">LOADING.....</TableCell>
        </TableRow>
      )}
    </TableBody>
  </>
);
}
export default NotesFiles;
