
import { QueryKey } from "@tanstack/react-query";
import axios from "axios";
const limit = 12;
export async function getFiles({ pageParam, queryKey }: { pageParam: number, queryKey: QueryKey}) {
    const offset = pageParam*limit;
    const getToken: any = queryKey[1];
  const res = await axios.get(`http://localhost:8080/v1/library?offset=${offset}`, {
    headers: { Authorization: `Bearer ${await getToken()}` },
  });
   return {
     data: res.data.files,
     currentPage: pageParam,
     nextPage:
       offset + limit < res.data.totalFiles ? pageParam+1 : null
   };
}
