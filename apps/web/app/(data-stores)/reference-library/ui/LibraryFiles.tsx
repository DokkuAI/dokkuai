"use client";

import { useEffect, useState } from "react";
import Row from "./DocsRow";
import axios from "axios";

const LibraryFiles = () => {
  const [files, setFiles] = useState([]);
  const [dlt, setDlt] = useState(false);
  useEffect(() => {
    getLibraryFiles();
    async function getLibraryFiles() {
      const { data } = await axios.get("http://localhost:8080/v1/library");
      setFiles(data.slice(0,8));
    }
  }, [dlt]);
  return (
    <>
      {files.map((file: any, index: any) => {
        return <Row
          key={index}
          id={file._id}
          type="pdf"
          name={file.name}
          year={file.year || "-"}
          authors={file.author || "-"}
          source={file.scorce || "-"}
          tags={file.year || "-"}
          dateAdded={file.createdAt.slice(0,10)}
          setDlt={setDlt}
        />;
      })}
    </>
  );
};

export default LibraryFiles;
