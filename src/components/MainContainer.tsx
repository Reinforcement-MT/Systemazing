// import React from 'react'
import Flowchart from '../Flowchart';
import Topbar from '../Topbar';
import Btmbar from '../Btmbar';
import Infobox from '../Infobox';
import { useState, useCallback } from 'react';

import {
  useOnSelectionChange,
  addEdge,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Connection,
} from 'reactflow';

const initialNodes: Node[] = [
  {
    id: 'dndnode_1',
    type: 'client',
    data: { label: 'Client', customData:"" },
    position: {
      x: 250,
      y: 5,
    },
  },
  {
    id: 'dndnode_2',
    type: 'server',
    data: { label: 'Server', customData:"" },
    position: {
      x: 273,
      y: 92.25,
    },
  },
  {
    id: 'dndnode_3',
    type: 'database',
    data: { label: 'Database', customData:"" },
    position: {
      x: 280.5,
      y: 196.25,
    },
  },
];

const initialEdges: Edge[] = [
  {
    source: 'dndnode_1',
    sourceHandle: null,
    target: 'dndnode_2',
    targetHandle: null,
    id: 'client-to-server',
  },
  {
    source: 'dndnode_2',
    sourceHandle: null,
    target: 'dndnode_3',
    targetHandle: null,
    id: 'server-to-db',
  },
];

type GraphSelection = { nodes: Node[]; edges: Edge[]; };

const MainContainer = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [infoState, setInfoState] = useState("INFO");
  console.log("infoState: ", infoState);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  useOnSelectionChange({
    onChange: ({ nodes: selectedNodes,  edges: selectedEdges }) => {
      nodes.forEach(node => {
        if (node.selected) {
          console.log("Setting info state: ", node.data.customData)
          setInfoState(node.data.customData);
        }}
      )}}
    );

  const setCustomData = (newCustomData: string) => {
    // Traverse nodes, find the right ID, then update its data, then setNodes to the new Nodes object
    console.log("Custom data!!", newCustomData)
    setNodes((prevNodes: Node[]) => {
      return prevNodes.map(node => {
        if (node.selected) {
          const data = { ...node.data,customData: newCustomData };
          const newNode = { ...node,data };
          return newNode;
        }
        else return node;
      })
    })
  }


  const onChange = useCallback( (evt) => {
    setInfoState(evt.target.value);
    setCustomData(evt.target.value);
  }, []);


  return (
      <div id="main">
        <div id="top">
          <Topbar />
        </div>
        <div id="chart">
          <Flowchart
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
          />
        </div>
        <Infobox infoState={infoState} onChange={onChange} />
        <div id="btm">
          <Btmbar nodes={nodes} edges={edges} />
        </div>
      </div>
  );
};

export default MainContainer;
