"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ImportProject({ title, svg }: any) {
  const path = usePathname();
  return (
    <Link href={{ pathname: `${path}`, query: { showUpload: "y" } }}>
      <div className="cursor-pointer h-9 flex items-center gap-2 px-2 rounded bg-[#F3F4F6] border-2 border-[#F3F4F6] hover:border-black">
        <Image src={svg} alt="icon" />
        {title}
      </div>
    </Link>
  );
}
