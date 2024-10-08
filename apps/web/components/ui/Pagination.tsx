"use client";
import { useInView } from "react-intersection-observer";
import { useAuth } from "@clerk/nextjs";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const usePagination = ({queryFn, url}:any) => {
   const { ref, inView } = useInView();
   const { getToken } = useAuth();
   const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
     queryKey: ["items",url, getToken],
     queryFn: queryFn,
     initialPageParam: 0,
     getNextPageParam: (lastPage:any) => lastPage.nextPage,
   });
   useEffect(() => {
     if (inView) {
       console.log("called");
       fetchNextPage();
     }
   }, [fetchNextPage, inView]);
   return { ref, data, hasNextPage };
}

export default usePagination