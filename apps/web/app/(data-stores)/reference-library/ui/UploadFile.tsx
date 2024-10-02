"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

const UploadFile = () => {
  const [file, setFile] = useState<any>(null);
  const { getToken } = useAuth();

  useEffect(() => {
    if (file) {
      handleUpload();
    }
    async function handleUpload() {
      const fd = new FormData();
      fd.append("file", file[0]);
      await axios.post("http://localhost:8080/v1/library/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const token = getToken();

      await axios.post(
        "http://localhost:8080/v1/activity",
        {
          type: "imported-file",
          name: "devesh",
          title: "Imported File",
          workspaceId: "",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
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
