"use client";

import { useAuth } from "@clerk/nextjs";
import {
  addEdge,
  Background,
  Controls,
  MarkerType,
  MiniMap,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import ".././index.css";
import CustomNode from "./CustomNode";
import { useDnD } from "./DnDContext";
import FloatingConnectionLine from "./FloatingConnectionLine";
import FloatingEdge from "./FloatingEdge";
import Sidebar from "./Sidebar";
import useDeleteBinding from "./useDeleteBinding";

const flowKey: string = "example-flow";
const initialNodes: any = [];
const snapGrid: [number, number] = [25, 25];
const initialEdges: any = [];
const nodeTypes = { createNode: CustomNode };
const edgeTypes = {
  floating: FloatingEdge,
};
const nodeOrigin: [number, number] = [0.5, 0];
export default function MindMap() {
  const { getToken } = useAuth();
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();
  useDeleteBinding();

  useEffect(() => {
    async function getMindmap() {
      const res = await axios.get(
        "http://localhost:8080/v1/mindmap/6720b582e704b8e89efcb7ca",
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      localStorage.setItem(flowKey, JSON.stringify(res.data));
      onRestore();
    }
    getMindmap();
    const id = setInterval(onSave, 3000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const onConnect = useCallback(
    (params: any) => {
      const id = crypto.randomUUID();
      setEdges((eds: any) =>
        addEdge(getEdge(id, params.source, params.target, type), eds)
      );
    },
    [setEdges, type]
  );
  const getEdge = useCallback(
    (id: string, source: any, target: any, type: any) => {
      switch (type) {
        case "flowingOneDirectional":
          return {
            id,
            source: source,
            target: target,
            animated: true,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
            },
            type: "floating",
          };

        case "biDirectional":
          return {
            id,
            source: source,
            target: target,
            animated: false,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
            },
            type: "floating",
            markerStart: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
            },
          };
        default:
          return {
            id,
            source: source,
            target: target,
            animated: false,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
            },
            type: "floating",
          };
      }
    },
    []
  );

  const onConnectEnd = useCallback(
    (event: any, connectionState: any) => {
      // when a connection is dropped on the pane it's not valid
      if (!connectionState.isValid) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = crypto.randomUUID();
        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: {},
          origin: [0.5, 0.0],
          type: "createNode",
        };
        setNodes((nds: any) => nds.concat(newNode));
        const newEdge = getEdge(id, connectionState.fromNode.id, id, type);
        setEdges((eds: any) => eds.concat(newEdge));
      }
    },
    [screenToFlowPosition, type]
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      // check if the dropped element is valid

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: crypto.randomUUID(),
        type: "createNode",
        position,
        data: {},
      };

      setNodes((nds: any) => nds.concat(newNode));
    },
    [screenToFlowPosition]
  );

  const onSave = useCallback(() => {
    console.log("called");
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  return (
    <div className="dndflow">
      <div
        className="flex-grow w-full floatingedges reactflow-wrapper"
        ref={reactFlowWrapper}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onConnectEnd={onConnectEnd}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodeOrigin={nodeOrigin}
          snapToGrid={true}
          snapGrid={snapGrid}
          connectionLineComponent={FloatingConnectionLine}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setRfInstance}
        >
          <Controls />
          <MiniMap />
          <Background gap={24} size={2} />
        </ReactFlow>
      </div>
      <Sidebar
        handleClick={async () => {
          onSave();
          await axios.put(
            "http://localhost:8080/v1/mindmap/6720b582e704b8e89efcb7ca",
            { content: localStorage.getItem(flowKey) },
            { headers: { Authorization: `Bearer ${await getToken()}` } }
          );
        }}
      />
    </div>
  );
}
