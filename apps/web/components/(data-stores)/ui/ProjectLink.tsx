"use client";

import usePagination from "@/components/ui/Pagination";
import { getFiles } from "@/lib/action";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import RemoveIcon from "@/public/Remove.svg";

import { useSearchParams, usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import clsx from "clsx";

export function ProjectLinkUnlink() {
  const searchParams = useSearchParams();
  const id = searchParams.get("showProjects");
  const url = searchParams.get("url");
  const [link, setLink] = useState(false);
  const [unlink, setUnlink] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const path = usePathname();
  const { ref, data, hasNextPage } = usePagination({
    key: "project",
    queryFn: getFiles,
    url: "http://localhost:8080/v1/library",
  });

  async function handleClick() {
    await axios.patch(`http://localhost:8080/v1/${url}${id}`, {
      projectId: projectId,
    });
  }

  return id ? (
    <div className="fixed w-full h-dvh -translate-x-50 -translate-y-50 z-10  bg-gray-800/50 flex justify-center items-center">
      <div className="flex flex-col bg-white w-2/5 min-w-[500px] px-6 pb-6 pt-3 gap-2 rounded-lg border-2 max-h-[750px] overflow-y-auto">
        <div className="flex justify-end cursor-pointer">
          <Link href={`${path}`}>
            <Image src={RemoveIcon} alt="close icon" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="min-w-[200px]">Unlink from this project ?</div>
            <input
              className="h-5 w-5 cursor-pointer rounded shadow hover:shadow-md"
              type="checkbox"
              name="team"
              checked={unlink}
              onChange={(e) => {
                setLink(false);
                setUnlink(e.target.checked);
                setProjectId(null);
              }}
            />
          </div>
          <div className="flex gap-4 items-center">
            <div className="min-w-[200px]">Link to another project ?</div>
            <input
              className="h-5 w-5  cursor-pointer rounded shadow hover:shadow-md"
              type="checkbox"
              name="team"
              checked={link}
              onChange={(e) => {
                setUnlink(false);
                setLink(e.target.checked);
              }}
            />
          </div>
          {link ? (
            <div className="flex flex-col max-h-[500px] overflow-y-auto px-2">
              {data?.pages.map((page: any) => {
                return (
                  <Fragment key={page.currentPage}>
                    {page.data.map((project: any) => {
                      return (
                        <div
                          key={project._id}
                          className={clsx(
                            "text-center font-semibold h-8 cursor-pointer border-2 rounded my-1 hover:bg-gray-100",
                            {
                              "border-black": projectId === project._id,
                            }
                          )}
                          onClick={() => {
                            setProjectId(project._id);
                          }}
                        >
                          {project.name}
                        </div>
                      );
                    })}
                  </Fragment>
                );
              })}
              {hasNextPage && (
                <div ref={ref} className="text-center">
                  LOADING.....
                </div>
              )}
            </div>
          ) : null}
          <button
            onClick={handleClick}
            className="mb:w-[374px] w-[280px] h-[44px] bg-[#171A1F] rounded-lg text-[16px] leading-[26px] font-normal text-[#FFFFFF] flex items-center justify-center mx-auto"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export function ProjectLink({ id, url }: { id: string; url: string }) {
  const path = usePathname();
  return (
    <Link
      className="w-full px-2 py-1.5"
      href={{ pathname: `${path}`, query: { showProjects: `${id}`, url: url } }}
    >
      Link Project
    </Link>
  );
}
