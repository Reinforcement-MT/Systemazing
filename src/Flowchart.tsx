import { useState, useRef, useCallback, useMemo } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  ReactFlowInstance,
  Connection,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { traverse } from './utils/traverse.js';
import Sidebar from './Sidebar';
import CustomNode from './nodeTypes/CustomNode';

import './Flowchart.css';

const initialNodes: Node[] = [
  {
    id: 'dndnode_1',
    type: 'default',
    data: { label: 'Client' },
    position: {
      x: 250,
      y: 5,
    },
  },
  {
    id: 'dndnode_2',
    type: 'default',
    data: { label: 'Server' },
    position: {
      x: 273,
      y: 92.25,
    },
  },
  {
    id: 'dndnode_3',
    type: 'default',
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

let id = 0;
const getId = () => `dndnode_${id++}`;

const Flowchart = () => {
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  /*
  const onChange = () => {
    console.log('onChange!!');
    traverse(nodes, edges, 'dndnode_1');
  };
  */

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      console.log('Instance: ', reactFlowInstance?.toObject());
      const position = reactFlowInstance!.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
      <button onClick={(e) => {traverse(nodes, edges, 'dndnode_1')}}>Analyze</button>
    </div>
  );
};

export default Flowchart;
