import { useReactFlow } from "@xyflow/react";
import { useEffect } from "react";

export default function useDeleteBinding() {
  const { setNodes, setEdges } = useReactFlow();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key?.toLowerCase();
      if (key === "delete") {
        setNodes((prevNode) => prevNode.filter((node) => !node.selected));
        setEdges((prevEdges) => prevEdges.filter((edge) => !edge.selected));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
