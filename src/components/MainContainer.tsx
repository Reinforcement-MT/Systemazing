// import React from 'react'
import Flowchart from '../Flowchart';
import Topbar from '../Topbar';
import Btmbar from '../Btmbar';

import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Connection
} from 'reactflow';

import { useCallback } from 'react';


const initialNodes: Node[] = [
  {
    id: 'dndnode_1',
    type: 'client',
    data: { label: 'Client' },
    position: {
      x: 250,
      y: 5,
    },
  },
  {
    id: 'dndnode_2',
    type: 'server',
    data: { label: 'Server' },
    position: {
      x: 273,
      y: 92.25,
    },
  },
  {
    id: 'dndnode_3',
    type: 'database',
    data: { label: 'Database' },
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


const MainContainer = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


  const onConnect = useCallback((params: Connection) => { setEdges((eds) => addEdge(params, eds)); }, []);

  return (
    <div id="main">
      <div id="top">
        <Topbar />
      </div>
      <div id="chart">
        <Flowchart nodes={nodes} setNodes={setNodes} onNodesChange={onNodesChange} edges={edges} setEdges={setEdges} onEdgesChange={onEdgesChange} />
      </div>
      <div id="btm">
        <Btmbar nodes={nodes} edges={edges} />
      </div>
    </div>
  );
};

export default MainContainer;
