import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PenIcon from "@/public/Pen.svg";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import VerticalDotsIcon from "@/public/VerticalDots.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../index.css";
import Editor from "@/components/(editor)/Editor";
import { JSONContent } from "novel";

const CustomNode = ({
  id,
  data: {
    currentTitle = undefined,
    currentDescription = { type: "doc", content: [] },
    currentEmoji = "👍",
  },
}: any) => {
  const { getNode, updateNodeData } = useReactFlow();
  const [title, setTitle] = useState<string | undefined>(currentTitle);
  const [description, setDescription] = useState<string | undefined>(
    extractTextFromTiptap(currentDescription)
  );
  const [json, setJson] = useState<JSONContent>(currentDescription);
  const [emoji, setEmoji] = useState(currentEmoji);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    updateNodeData(id, () => {
      return {
        currentTitle: title,
        currentDescription: json,
        currentEmoji: emoji,
      };
    });
  }, [title, emoji, description]);

  function handleSubmit(e: any) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const newTitle: string = JSON.stringify(fd.get("title")).replace(/"/g, "");
    setTitle(newTitle); 
    const newDescription = extractTextFromTiptap(json);
    setDescription(newDescription);
  }
  
  function extractTextFromTiptap(content: JSONContent | undefined): string {
    // Handle empty or invalid content
    if (!content) return "";

    // If content is just a string, return it
    if (typeof content === "string") return content;

    // Initialize text accumulator
    let text = "";

    // Handle content that's an array (like paragraphs)
    if (Array.isArray(content)) {
      return content.map((node) => extractTextFromTiptap(node)).join(" ");
    }

    // Handle marks and nodes
    if (content.type) {
      switch (content.type) {
        case "doc":
        case "paragraph":
        case "heading":
        case "bulletList":
        case "orderedList":
        case "listItem":
          if (content.content) {
            text += extractTextFromTiptap(content.content);
          }
          break;

        case "text":
          text += content.text || "";
          break;

        case "hardBreak":
        case "horizontalRule":
          text += "\n";
          break;

        default:
          // Handle unknown node types by attempting to extract their content
          if (content.content) {
            text += extractTextFromTiptap(content.content);
          }
      }
    }

    // Clean up the text by removing extra whitespace
    return text.replace(/\s+/g, " ").trim();
  }

  return (
    <>
      <Handle position={Position.Bottom} type="source" id="b" />
      <Handle position={Position.Top} type="target" id="t" />
      <Handle position={Position.Right} type="target" id="r" />
      <Handle position={Position.Left} type="source" id="l" />
      <Sheet>
        <SheetTrigger className="cursor-move">
          <div
            className={`bg-white h-fit py-4 px-3 flex flex-col gap-3  border-2 rounded-lg items-center max-w-[400px] min-w-[200px] ${getNode(id)?.selected ? "border-black" : null} ${id}`}
          >
            <div className="flex gap-3 items-center w-full justify-between">
              <div className="text-2xl bg-gray-200 rounded">{emoji}</div>

              {title ? (
                <div className="text-[14px] leading-[22px] text-black font-medium overflow-y-auto">
                  {title}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-4">
                  <input
                    maxLength={80}
                    name="title"
                    placeholder="No title makes no sense"
                    className="border-2 rounded pl-2"
                  />
                </form>
              )}

              <div className="w-[30px] h-[30px] hover:bg-gray-200 rounded">
                <Image
                  src={VerticalDotsIcon}
                  alt="icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
            {description ? (
              <div className="text-[14px] leading-[22px] text-ellipsis text-black font-medium overflow-y-auto text-center">
                {description}
              </div>
            ) : null}
          </div>
        </SheetTrigger>
        <SheetContent
          className="w-[400px] sm:min-w-[410px] min-h-full p-0"
          side="right"
        >
          <div className="w-full flex flex-col gap-4 p-4 h-full overflow-y-auto">
            <h2 className="text-lg font-semibold">Edit Node</h2>
            <div className="flex justify-between items-center px-4">
              <div
                onClick={() => {
                  setShowPicker((value) => {
                    return !value;
                  });
                }}
                className="hover:bg-gray-300 text-2xl bg-gray-200 rounded cursor-pointer"
              >
                {emoji}
              </div>
              <div className="cursor-pointer hover:bg-gray-300 h-8 w-8 flex justify-center items-center rounded">
                <Image
                  src={PenIcon}
                  alt="pen icon"
                  onClick={() => {
                    setShowPicker((value) => {
                      return !value;
                    });
                  }}
                />
              </div>
            </div>
            {showPicker && (
              <div className="flex justify-center w-full">
                <Picker
                  data={data}
                  onEmojiSelect={(emoji: any) => {
                    setEmoji(emoji.native);
                  }}
                />
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 flex-col my-2 justify-between flex-grow"
            >
              <div className="flex gap-2 flex-col">
                <div>Title</div>
                <input
                  maxLength={80}
                  name="title"
                  placeholder="No title makes no sense"
                  className="border-2 rounded pl-2"
                  defaultValue={title}
                />
                <div className="mt-2">Description</div>
                <Editor
                  initialValue={json}
                  onChange={(value: JSONContent) => {
                    setJson(value);
                  }}
                  delay={0}
                />
              </div>
              <button
                type="submit"
                className="min-w-15 border-2 border-black p-1 rounded bg-black text-white hover:bg-white hover:text-black"
              >
                Save
              </button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CustomNode;
