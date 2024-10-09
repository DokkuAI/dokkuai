import Skeleton from "@/components/ui/Skeleton";
import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <SignUp />
    </Suspense>
  );
  
}
