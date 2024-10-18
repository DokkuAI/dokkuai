"use client";
import { LibraryIcon } from "./svg";
import { EditIcon } from "./svg";
import { WorkspaceIcon } from "./svg";
import { NotesIcon } from "./svg";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const path = usePathname();
  return (
    <Breadcrumb className="flex-grow">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/workspace">
            <div className="flex gap-2 items-center text-[16px] leading-[26px] font-normal text-black">
              <WorkspaceIcon />
              Workspace
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {path.includes("project") ? (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/project">Project</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
        {path.includes("reference-library") ? (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/reference-library">
                <div className="flex gap-2 items-center text-[16px] leading-[26px] font-normal text-black">
                  <LibraryIcon />
                  Reference Library
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
        {path.includes("notes-wiki") ? (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/notes-wiki">
                <div className="flex gap-2 items-center text-[16px] leading-[26px] font-normal text-black">
                  <NotesIcon />
                  Notes-Wiki
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
        {path.includes("editor") ? (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/editor">
                <div className="flex gap-2 items-center text-[16px] leading-[26px] font-normal text-black">
                  <EditIcon />
                  Editor
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
