"use client";
import { getFiles } from "@/lib/action";
import Row from "./DocsRow";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAuth } from "@clerk/nextjs";

function LibraryFiles() {
  const { ref, inView } = useInView();
  const { getToken } = useAuth();
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["items", getToken],
    queryFn: getFiles,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  useEffect(() => {
    if (inView) {
      console.log("called");
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
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
