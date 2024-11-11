"use client";

import { JSONContent } from "novel";
import Editor from "@/components/(editor)/Editor";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

const NotesEditor = () => {
  const searchParams = useSearchParams();
  const {getToken} = useAuth();
  const [noteContent, setNoteContent] = useState<JSONContent>({
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 1 },
        content: [{ type: "text", text: "Untitled" }],
      },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: " Empty Page" }],
      },
      { type: "paragraph", content: [{ type: "text", text: " Start writing" }] },
      { type: "paragraph", content: [{ type: "text", text: " Add new:" }] },
      {
        type: "bulletList",
        attrs: { tight: true },
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Checklist" }],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              { type: "paragraph", content: [{ type: "text", text: "Code" }] },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "Equations" },
                  { type: "hardBreak" },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
  const handleNoteChange = async (content: JSONContent) => {
    // setNoteContent(content);
    await axios.put(`http://localhost:8080/v1/notes/${searchParams.get('id')}`, {
      content: JSON.stringify(content),
    });
  };
  useEffect(() => {
    getNoteContent();
    async function getNoteContent() {
      const res = await axios.get(
        `http://localhost:8080/v1/notes/${searchParams.get('id')}`,
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );
      setNoteContent(JSON.parse(res.data.content));
    }
  }, []);
  return (
    <div className="flex flex-col border w-full flex-grow rounded-md overflow-y-auto">
      <Editor initialValue={noteContent} onChange={handleNoteChange} />
    </div>
  );
};

export default NotesEditor;
