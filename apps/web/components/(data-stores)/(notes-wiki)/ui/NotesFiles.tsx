"use client";

import { useEffect, useState } from "react";
import Row from "./NotesRow";
import axios from "axios";

const NotesFiles = () => {
  const [notes, setNotes] = useState([]);
  const [dlt, setDlt] = useState(false);

  useEffect(() => {
    getLibraryFiles();
    async function getLibraryFiles() {
      const { data } = await axios.get("http://localhost:8080/v1/notes");
      setNotes(data.slice(0, 8));
    }
  }, [dlt]);
  return (
    <>
      {notes.map((note: any, index: any) => {
        return (
          <Row
            key={index}
            id={note._id}
            name={note.name}
            lastModified={note.updatedAt.slice(0, 10)}
            linkTo={note.linkTo || "-"}
            pages={note.page || "-"}
            tags={note.tag || "-"}
            createdBy={note.createdBy || "-"}
            pinned={note.pinned}
            setDlt={setDlt}
          />
        );
      })}
    </>
  );
};

export default NotesFiles;
