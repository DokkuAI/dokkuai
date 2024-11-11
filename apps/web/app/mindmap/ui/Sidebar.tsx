"use client";
import axios from "axios";
import { useDnD } from "./DnDContext";

export default ({handleClick}: any) => {
  const onDragStart = (event: any) => {
    event.dataTransfer.effectAllowed = "move";
  };
  const [type, setType] = useDnD();
  return (
    <aside className="flex flex-col">
      <div className="description">
        You can drag the nodes to the pane on the right.
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event)}
        draggable
      >
        Default Node
      </div>
      <hr />
      <div className="description mt-10">Select Edge Type</div>
      <div
        className={`dndnode cursor-pointer hover:bg-gray-300 ${type === "oneDirectional" ? "bg-gray-200" : null}`}
        onClick={() => {
          setType("oneDirectional");
        }}
      >
        Default Edge
      </div>
      <div
        onClick={() => {
          setType("flowingOneDirectional");
        }}
        className={`dndnode cursor-pointer hover:bg-gray-300 ${type === "flowingOneDirectional" ? "bg-gray-200" : null}`}
      >
        Flowing Edge
      </div>
      <div
        onClick={() => {
          setType("biDirectional");
        }}
        className={`dndnode cursor-pointer hover:bg-gray-300 ${type === "biDirectional" ? "bg-gray-200" : null}`}
      >
        Bi-directional Node
      </div>
      <hr />
      <div className="flex-grow flex flex-col justify-end"><div
        onClick={handleClick}
        className="bg-black text-white border-2 border-black hover:bg-white hover:text-black p-2 text-center rounded"
      >
        Save Mindmap to Cloud
      </div></div>
      
    </aside>
  );
};
