"use client";
import { getFiles } from "@/lib/action";
import Row from "./DocsRow";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Fragment, useEffect } from "react";
import usePagination from "@/components/ui/Pagination";

function LibraryFiles() {
  const { ref, data, hasNextPage } = usePagination({
    queryFn: getFiles,
    url: "http://localhost:8080/v1/library",
  });
  return (
    <>
      <TableBody>
        {data?.pages.map((page: any) => {
          return (
            <Fragment key={page.currentPage}>
              {page.data.map((file: any) => {
                return (
                  <Row
                    key={file._id}
                    id={file._id}
                    type="pdf"
                    name={file.name}
                    year={file.year || "-"}
                    authors={file.author || "-"}
                    source={file.scorce || "-"}
                    tags={file.year || "-"}
                    dateAdded={file.createdAt.slice(0, 10)}
                    pinned={file.pinned}
                    setDlt={false}
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

export default LibraryFiles;
