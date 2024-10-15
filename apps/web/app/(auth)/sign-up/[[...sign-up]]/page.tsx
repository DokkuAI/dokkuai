import Skeleton from "@/components/ui/Skeleton";
import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
    <div className="w-full flex flex-grow justify-center items-center">
      
      <SignUp /></div>
    </Suspense>
  );
  
}
