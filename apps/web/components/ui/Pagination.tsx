"use client";
import { useInView } from "react-intersection-observer";
import { useAuth } from "@clerk/nextjs";
import {
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useEffect } from "react";

interface UsePaginationParams {
  // eslint-disable-next-line no-unused-vars
  key: string;
  // eslint-disable-next-line no-unused-vars
  queryFn: (params: any) => Promise<any>;
  url: string;
  limit?: number
}


function usePagination({key, queryFn, url, limit=12 }: UsePaginationParams): {
  ref: any;
  data: any;
  hasNextPage: boolean;
  fetchNextPage: any;
} {
  const { ref, inView } = useInView();
  const { getToken } = useAuth();
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [key, url, getToken, limit],
    queryFn: queryFn,
    initialPageParam: 0,
    getNextPageParam: (lastPage: any) => lastPage.nextPage,
  });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return { ref, data, hasNextPage, fetchNextPage };
}

export default usePagination