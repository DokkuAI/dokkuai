"use client";

import LeftArrowIcon from "@/public/ChevronLeft.svg";
import RightArrowIcon from "@/public/ChevronRight.svg";
import { useState } from "react";
import Card from "./Card";
import usePagination from "@/components/ui/Pagination";
import { getFiles } from "@/lib/action";
import Image from "next/image";

const ProjectCards = () => {
  const [page, setPage] = useState(0);
  const { fetchNextPage, data, hasNextPage } = usePagination({
    key: "cards",
    queryFn: getFiles,
    url: "http://localhost:8080/v1/library",
    limit: 4 ,
  });
  async function handleNext() {
    if (page === data?.pages.length - 1 && hasNextPage) {
      await fetchNextPage();
    }
    setPage((page) => {
      return page + 1;
    });
  }
  return (
    <div className="flex w-full">
      <button
        disabled={page === 0}
        onClick={() => {
          setPage((page) => {
            return page - 1;
          });
        }}
      >
        <Image src={LeftArrowIcon} alt="left arrow" />
      </button>
      <div className="flex-grow flex justify-evenly gap-2">
        {data?.pages[page].data.map((file: any, index: number) => {
          return (
            <Card
              key={index}
              pinned={file.pinned}
              name={file.author || "me"}
              date={file.createdAt.slice(0, 10) || "-"}
              title={file.name || "Telepathy"}
              avatar="/Avatar.png"
            />
          );
        })}
      </div>
      <button
        onClick={handleNext}
        disabled={!hasNextPage && page === data?.pages.length - 1}
      > 
        <Image src={RightArrowIcon} alt="right arrow" />
      </button>
    </div>
  );
};

export default ProjectCards;
