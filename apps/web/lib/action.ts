import { QueryKey } from "@tanstack/react-query";
import axios from "axios";

export async function getFiles({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: QueryKey;
}) {
  const [, url, getToken, limit]: any = queryKey;

  const offset = pageParam * limit;
  const res = await axios.get(`${url}?offset=${offset}&limit=${limit}`, {
    headers: { Authorization: `Bearer ${await getToken()}` },
  });
  
  return {
    data: res.data.files,
    currentPage: pageParam,
    nextPage: offset + limit < res.data.totalFiles ? pageParam + 1 : null,
  };
}

export async function getDetails({ queryKey }: { queryKey: QueryKey }) {
  const [, url, getToken]: any = queryKey;
  const res = await axios.get(`${url}`, {
    headers: { Authorization: `Bearer ${await getToken()}` },
  });
  return { data: res.data };
}
