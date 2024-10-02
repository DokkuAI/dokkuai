import { Suspense } from "react";
import Details from "./Details";
import Skeleton from "@/components/ui/Skeleton";

const page = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Details />
    </Suspense>
  );
};

export default page;
