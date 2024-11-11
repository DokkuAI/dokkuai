"use client";
import ExportIcon from "@/public/Export_2.svg";

import { useReactFlow, getViewportForBounds, getNodesBounds } from "@xyflow/react";
import { toPng } from "html-to-image";
import Image from "next/image";
function downloadImage(dataUrl: any) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const imageWidth = 1440;
const imageHeight = 900;

function Export() {
  const { getNodes } = useReactFlow();
  const onClick = () => {
    // we calculate a transform for the nodes so that all nodes are visible
    // we then overwrite the transform of the `.react-flow__viewport` element
    // with the style option of the html-to-image library
    const nodesBounds = getNodesBounds(getNodes());
    const viewport = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2,
      0.1
    );
    const element = document.querySelector(".react-flow__viewport")  as HTMLElement;
    if (element) {
      toPng(element, {
        backgroundColor: "#FFFFFF",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: imageWidth,
          height: imageHeight,
          transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
        },
      }).then(downloadImage);
    }
  };
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex px-3 gap-2 bg-[#F3F4F6] items-center rounded border-2 border-[#F3F4F6] hover:border-black"
    >
      <Image src={ExportIcon} alt="icon" />
      <div className="text-[14px] leading-[22px] font-normal font-[#323842]">
        Export
      </div>
    </div>
  );
}
export default Export;
