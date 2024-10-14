"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
const UploadFile = () => {
  const [file, setFile] = useState<any>(null);
  const { getToken } = useAuth();
  const searchParams = useSearchParams();


  useEffect(() => {
    console.log("CALLED", file);
    if (file) {
      handleUpload();
    }
    async function handleUpload() {
      const fd = new FormData();
      fd.append("file", file[0]);
      const projectId = searchParams.get("id");
      let body: any = {};
      if(projectId) {
        body.projectId = projectId ;        
      }
      fd.append("data", JSON.stringify(body));
      await axios.post("http://localhost:8080/v1/library/upload", fd, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      // await axios.post(
      //   "http://localhost:8080/v1/activity",
      //   {
      //     type: "imported-file",
      //     title: "Imported File",
      //   },
      //   { headers: { Authorization: `Bearer ${await getToken()}` } }
      // );
    }
  }, [file]);

  return (
    <form>
      <label
        htmlFor="myFileUpload"
        className="cursor-pointer h-9 flex items-center gap-2 px-2 rounded bg-black text-white  hover:bg-white hover:text-black hover:border-2 hover:border-black"
      >
        Browse Files
      </label>
      <input
        type="file"
        id="myFileUpload"
        accept=".pdf"
        hidden
        onChange={(e) => {
          setFile(e.target.files);
        }}
      />
    </form>
  );
};

export default UploadFile;
