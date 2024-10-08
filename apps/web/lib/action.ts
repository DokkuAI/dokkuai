
import { QueryKey } from "@tanstack/react-query";
import axios from "axios";
const limit = 12;
export async function getFiles({ pageParam, queryKey }: { pageParam: number, queryKey: QueryKey}) {
    const offset = pageParam*limit;
    const [, url, getToken]: any = queryKey;
  const res = await axios.get(`${url}?offset=${offset}`, {
    headers: { Authorization: `Bearer ${await getToken()}` },
  });
   return {
     data: res.data.files,
     currentPage: pageParam,
     nextPage:
       offset + limit < res.data.totalFiles ? pageParam+1 : null
   };
}
