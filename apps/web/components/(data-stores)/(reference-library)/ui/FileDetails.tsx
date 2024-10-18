"use client";
import { useAuth } from "@clerk/nextjs";
// import StarIcon from "@/public/Star.svg";
import Image from "next/image";
import ReadPdfIcon from "@/public/ReadPdf.svg";
import ExportIcon from "@/public/Export.svg";
import PenIcon from "@/public/Pen.svg";
import AddTagIcon from "@/public/AddTag.svg";
// import LinkTypeIcon from "@/public/LinkType.svg";
import DetailsIcon from "@/public/Details.svg";
import { Textarea } from "@/components/ui/textarea";
import RemoveIcon from "@/public/Remove.svg";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const FileDetails = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const id = searchParams.get("showDetails");
  const { getToken } = useAuth();
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState<any>({
    name: "-",
    abstract: "-",
    year: "-",
    author: "me",
  });
  const [note, setNote] = useState("");

  useEffect(() => {
    if (id) {
      getDetails();
    }
    async function getDetails() {
      const res = await axios.get(
        `http://localhost:8080/v1/library/find/${id}`,
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );
      setData(res.data);
      setNote(res.data?.note);
    }
    return () => {
      setNote("");
      setData({
        name: "-",
        abstract: "-",
        year: "-",
        author: "me",
      });
      setEdit(false);
    };
  }, [id]);

  async function handleSubmit(e: any) {
   e.preventDefault();
   const formData = new FormData(e.target);
   const fileData = {
     name: formData.get("name"),
     author: formData.get("author"),
     year: formData.get("year"),
     abstract: formData.get("abstract"),
     url: formData.get("url"),
   };
   await axios.patch(
     `http://localhost:8080/v1/library/${id}`,
     fileData,
     { headers: { Authorization: `Bearer ${await getToken()}` } }
   );
   setData(fileData);
   setEdit(false);
  }

  async function handleClick() {
    await axios.patch(
      `http://localhost:8080/v1/library/${id}`,
      { note: note },
      { headers: { Authorization: `Bearer ${await getToken()}` } }
    );
  }

  return id ? (
    <div className="fixed w-full h-dvh -translate-x-50 -translate-y-50 z-10  bg-gray-800/50 flex justify-center items-center">
      <div className="flex flex-col bg-white w-2/5 min-w-[500px] px-6 pb-6 pt-3 gap-2 rounded-lg border-2">
        <div className="flex justify-end cursor-pointer">
          <Link href={`${path}`}>
            <Image src={RemoveIcon} alt="close icon" />
          </Link>
        </div>
        <div className="flex gap-3 w-full my-1">
          <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
            Journal Article
          </div>
          {/* <Image src={StarIcon} alt="star icon" className="cursor-pointer" /> */}
          <div className="flex flex-grow items-center cursor-pointer justify-end">
            <Image
              src={PenIcon}
              alt="pen icon"
              onClick={() => {
                setEdit(!edit);
              }}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {edit ? (
            <input
              name="name"
              className="border-2 border-gray-400 rounded"
              defaultValue={data.name}
              placeholder="file name"
            />
          ) : (
            <div className="text-[20px] leading-[30px] text-[#171A1F] font-bold w-full">
              {data.name}
            </div>
          )}
          {edit ? (
            <input
              name="author"
              className="border-2 border-gray-400 rounded"
              defaultValue={data.author}
              placeholder="author"
            />
          ) : (
            <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
              {data.author}
            </div>
          )}
          {edit ? (
            <input
              name="year"
              type="number"
              className="border-2 border-gray-400 rounded"
              defaultValue={data.year}
              placeholder="year"
            />
          ) : (
            <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
              {data.year}
            </div>
          )}
          <div className="mt-2 mb-1 flex gap-7 h-9">
            <div className="flex gap-2 px-2 bg-[#FDF2F2] items-center rounded cursor-pointer text-[#DE3B40]">
              <Image src={ReadPdfIcon} alt="read pdf icon" />
              Read PDF
            </div>
            <div className="flex gap-2 px-2 bg-[#F0F4FE] items-center rounded cursor-pointer text-[#2D66F5]">
              <Image src={ExportIcon} alt="export icon" />
              Export Citation
            </div>
          </div>
          <div className="w-full border border-[#DEE1E6]"></div>
          <div className="flex justify-between items-center">
            <div className="text-[14px] leading-[22px] text-[#171A1F] font-bold">
              Abstract
            </div>
          </div>
          {edit ? (
            <Textarea
            name="abstract"
            maxLength={300}
            placeholder="abstract"
              defaultValue={data.abstract}
            className="placeholder:text-[#171A1F] bg-[#F3F4F6] min-h-[80px] max-h-[80px]"
          />
          ) : (
            <div className="text-[14px] leading-[22px] text-[#565E6C] font-normal">
              {data?.abstract ?? "-"}
              {/* <span className="text-[#2D66F5] cursor-pointer">Read More</span> */}
            </div>
          )}
          <div className="flex items-center gap-1 mt-2">
            <div className="text-[14px] leading-[22px] text-[#171A1F] font-bold">
              Tags
            </div>
            <Image src={AddTagIcon} alt="Add icon" className="cursor-pointer" />
          </div>
          <div></div>
          <div className="mt-2 flex justify-between w-full text-[14px] leading-[22px] text-[#171A1F] ">
            <div className="font-bold">URL</div>
            {edit ? (
              <input
              name='url'
                className="border-2 border-gray-400 rounded w-1/2"
                defaultValue={data.url}
                placeholder="file url"
              />
            ) : (
              <div className="font-semibold">{data?.url ?? "-"}</div>
            )}
          </div>

          <div className="mt-2 flex justify-between w-full text-[14px] leading-[22px] text-[#171A1F] ">
            <div className="font-bold">File type</div>
            <div className="flex gap-2">
              {/* <Image src={LinkTypeIcon} alt="icon" />{" "} */}
              <div className="font-semibold">PDF</div>
            </div>
          </div>
          <div className="mt-2 flex justify-between w-full text-[14px] leading-[22px] text-[#171A1F] ">
            <div className="font-bold">Size</div>
            <div className="font-semibold">-</div>
          </div>
          {edit && (
            <div className="flex justify-center">
              <button
                type="submit"
                className="cursor-pointer w-20 h-22 mt-4 text-center rounded text-white bg-black border-2 border-black hover:bg-white hover:text-black"
              >
                Save
              </button>
            </div>
          )}
        </form>
        <div className="flex gap-2 items-center">
          <Textarea
            maxLength={300}
            value={note}
            className="mt-6 placeholder:text-[#171A1F] bg-[#F3F4F6] min-h-[80px] max-h-[80px]"
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          <div
            onClick={handleClick}
            className="cursor-pointer py-2  min-w-24  text-center rounded text-white bg-black border-2 border-black hover:bg-white hover:text-black"
          >
            Save Note
          </div>
        </div>
      </div>{" "}
      : null
    </div>
  ) : null;
};

export default FileDetails;

export const Details = ({ id }: { id: string }) => {
  const path = usePathname();
  return (
    <Link
      className="w-full px-2 py-1.5"
      href={{ pathname: `${path}`, query: { showDetails: id } }}
    >
      <div className="flex items-center gap-2">
        <Image src={DetailsIcon} alt="chat icon" />
        Details
      </div>
    </Link>
  );
};
