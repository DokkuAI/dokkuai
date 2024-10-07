import { Suspense } from "react";
import NotesEditor from "./ui/NotesEditor";
import Skeleton from "@/components/ui/Skeleton";

const page = ({params}:{params: {editor: string}}) => {
  return (
    <Suspense fallback={<Skeleton />}>
        <NotesEditor id={params.editor}/>
    </Suspense>
  );
};

export default page;
