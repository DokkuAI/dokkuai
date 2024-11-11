
import { ReactFlowProvider } from "@xyflow/react";
import MindMap from "./ui/MindMap";
import Navbar from "./ui/Navbar";
import { DnDProvider } from "./ui/DnDContext";

export default function page() {
  return (
    <ReactFlowProvider>
      <div className="h-dvh w-full flex flex-col">
        <Navbar />
        <DnDProvider>
          <MindMap />
        </DnDProvider>
      </div>
    </ReactFlowProvider>
  );
}
