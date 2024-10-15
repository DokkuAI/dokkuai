import SideSectionIcon from "@/public/SideSectionIcon.svg";
import SearchIcon from "@/public/SearchIcon.svg";
import ZoomInIcon from "@/public/ZoomInIcon.svg";
import ZoomOutIcon from "@/public/ZoomOutIcon.svg";
import ThreeDotsIcon from "@/public/ThreeDotsIcon.svg";
import HamburgerIcon from "@/public/Hamburger.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";

export default function Hamburger() {
  return (
      <Sheet>
        <SheetTrigger><Image src={HamburgerIcon} alt='hamburger icon' /></SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]" side="left">
          <SheetHeader>
            <SheetTitle>DokkuAI</SheetTitle>
            <SheetDescription></SheetDescription>
            <Link href="/reference-library">Reference Library</Link>
            <Link href="/notes-wiki">Notes Wiki</Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
  );
}
