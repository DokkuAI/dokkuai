"use client";

import { JSONContent } from "novel";
import Editor from "@/components/(editor)/Editor";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NotesEditor = ({ id }: { id: string }) => {
  const [noteContent] = useState<JSONContent>({
    type: "doc",
    content: [],
  });
  const handleNoteChange = async (content: JSONContent) => {
    // setNoteContent(content);
    console.log(id);
    await axios.put(`http://localhost:8080/v1/notes/${id}`, {
      content: JSON.stringify(content),
    });
  };
  // useEffect(() => {
  //   getNoteContent();
  //   async function getNoteContent() {
  //     const res = await axios.get("");
  //     setNoteContent(JSON.parse(res.data.content));
  //   }
  // }, []);
  return (
    <div className="flex flex-col border w-full min-h-dvh rounded-md">
      <div className="font-bold text-2xl text-center w-full">Notes Editor</div>
      <Editor initialValue={noteContent} onChange={handleNoteChange} />
    </div>
  );
};

export default NotesEditor;
