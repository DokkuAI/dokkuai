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
    <Breadcrumb className="font-semibold">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-xl" href="/workspace">
            <div className="flex gap-2 items-center">
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
              <BreadcrumbLink className="text-xl" href="/project">
                Project
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
        {path.includes("reference-library") ? (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl" href="/reference-library">
                <div className="flex gap-2 items-center">
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
              <BreadcrumbLink className="text-xl" href="/notes-wiki">
                <div className="flex gap-2 items-center">
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
              <BreadcrumbLink className="text-xl" href="/editor">
                <div className="flex gap-2 items-center">
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
