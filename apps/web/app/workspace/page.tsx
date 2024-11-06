"use client";
import { Suspense } from "react";
import Editor from "../../components/(editor)/Editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import UtilityBar from "./ui/UtilityBar";
import { useState } from "react";
import FileView from "./(file-renderer)/FileView";
import { JSONContent } from "novel";
import CommentBox from "./(comment)/CommentBox";
import Chat from "./(chat)/Chat";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Hamburger from "./ui/Hamburger";

export default function Page() {
  const searchParams = useSearchParams();
  const [chat, setChat] = useState<boolean>(
    searchParams.get("chat") === "true"
  );
  const [comment, setComment] = useState<boolean>(
    searchParams.get("comment") === "true"
  );
  const [note, setNote] = useState<boolean>(
    searchParams.get("note") === "true"
  );

  const id = searchParams.get("id");
  const [noteContent, setNoteContent] = useState<JSONContent>({
    type: "doc",
    content: [],
  });

  const handleNoteChange = (content: JSONContent) => {
    setNoteContent(content);
  };

  return (
    <div className="h-dvh flex  flex-col ">
      <div className="h-[56px] w-full flex items-center gap-4 pl-4 text-[#565E6C] border-2">
        <Hamburger />
        <Navbar />
        <UtilityBar
          chat={chat}
          setChat={setChat}
          comment={comment}
          setComment={setComment}
          note={note}
          setNote={setNote}
        />
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex flex-grow">
        <ResizablePanel
          minSize={25}
          collapsible={true}
          order={1}
        >
          <Suspense>
            <FileView />
          </Suspense>
        </ResizablePanel>
        {comment ? (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel
            defaultSize={40}
              order={2}
              className="flex"
              minSize={25}
              collapsible={true}
            >
              <CommentBox />
            </ResizablePanel>
          </>
        ) : null}
        {chat ? (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel
              order={3}
              className="flex"
              minSize={30}
              collapsible={true}
            >
              <Chat />
            </ResizablePanel>
          </>
        ) : null}
        {note ? (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel
              order={4}
              className="flex overflow-y-auto"
              minSize={25}
              collapsible={true}
            >
              <div className="flex flex-col p-2 border w-full gap-6 rounded-md bg-card">
                <Editor
                  initialValue={noteContent}
                  onChange={handleNoteChange}
                />
              </div>
            </ResizablePanel>
          </>
        ) : null}
      </ResizablePanelGroup>
    </div>
  );
}
