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
      const sessionToken = await getToken();
      const res = await axios.get("http://localhost:8080/v1/library", {
        headers: { Authorization: `Bearer ${sessionToken}` },
      });
      setFiles(res.data.slice(0, 4));
    }
  }, [ getToken]);
  return (
    <>
      {files.map((file: any, index: number) => {
        return (file.pinned ?
          <Card
            key={index}
            pinned={file.pinned}
            name={file.author || "me"}
            date={file.createdAt.slice(0, 10) || "-"}
            title={file.name || "Telepathy"}
            avatar="/Avatar.png"
          /> : null
        );
      })}
    </>
  );
};

export default ProjectCards;
