"use client";
import ActivityIcon from "@/public/Activity.svg";
import { Log } from "./Log";
import { Fragment  } from "react";
import usePagination from "@/components/ui/Pagination";
import { getFiles } from "@/lib/action";

export default function ActivityLog() {
  const { ref, data, hasNextPage } = usePagination({
    queryFn: getFiles,
    url: "http://localhost:8080/v1/activity",
  });
  return (
    <div className="flex-grow w-full overflow-y-auto">
      {data?.pages.map((page: any) => {
        return (
          <Fragment key={page.currentPage}>
            {page.data.map((log: any, index: number) => {
              return (
                <>
                  <Log
                    name={log.name}
                    date={log.createdAt.slice(0, 10)}
                    title={log.title}
                    avatar="/Avatar.png"
                    svg={ActivityIcon}
                  />
                  {index != page.data.length - 1 ? <BlueLine /> : null}
                </>
              );
            })}
          </Fragment>
        );
      })}
      {hasNextPage && (
        <div ref={ref}>
          <div className="w-full text-center">LOADING.....</div>
        </div>
      )}
    </div>
  );
}

function BlueLine() {
  return <div className="mx-6 h-10 border-l-2 border-[#5E8AF7]"></div>;
}
