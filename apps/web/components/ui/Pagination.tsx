"use client";
import { useInView } from "react-intersection-observer";
import { useAuth } from "@clerk/nextjs";
import {
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useEffect } from "react";

interface UsePaginationParams {
  // eslint-disable-next-line no-unused-vars
  queryFn: (params: any) => Promise<any>;
  url: string;
}


function usePagination({
  queryFn,
  url,
}: UsePaginationParams): {ref: any, data: any, hasNextPage: boolean} {
  const { ref, inView } = useInView();
  const { getToken } = useAuth();
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["items", url, getToken],
    queryFn: queryFn,
    initialPageParam: 0,
    getNextPageParam: (lastPage: any) => lastPage.nextPage,
  });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return { ref, data, hasNextPage };
}

export default usePagination