"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useAuth } from "@clerk/nextjs";

const ProjectCards = () => {
  const [files, setFiles] = useState([]);
  const { getToken } = useAuth();
  useEffect(() => {
    getProjectFiles();
    async function getProjectFiles() {
      const res = await axios.get("http://localhost:8080/v1/library", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      setFiles(res.data.files.slice(0,4));
    }
  }, [ getToken]);
  return (
    <>
      {files.map((file: any, index: number) => {
        return (
          <Card
            key={index}
            pinned={file.pinned}
            name={file.author || "me"}
            date={file.createdAt.slice(0, 10) || "-"}
            title={file.name || "Telepathy"}
            avatar="/Avatar.png"
          /> 
        );
      })}
    </>
  );
};

export default ProjectCards;
