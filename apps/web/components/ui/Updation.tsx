import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";


const useUpdation = ({key, query, url}: any) => {
    const {getToken} = useAuth();
    const {status} = useQuery({queryKey: ['update', key, query, url, getToken]});
    return status;
}

export default useUpdation;