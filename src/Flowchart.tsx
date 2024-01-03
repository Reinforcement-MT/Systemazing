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
import CustomNode from './nodeTypes/CustomNode';
import ServerNode from './nodeTypes/ServerNode';

import './Flowchart.css';
import DatabaseNode from './nodeTypes/DatabaseNode.js';
import CacheNode from './nodeTypes/CacheNode.js';
import ClientNode from './nodeTypes/ClientNode.js';
import LoadBalancerNode from './nodeTypes/LoadBalancerNode.js';

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

let id = 4;
const getId = () => `dndnode_${id++}`;

const Flowchart = () => {
  const nodeTypes = useMemo(() => ({
    custom: CustomNode,
    server: ServerNode,
    database: DatabaseNode,
    cache: CacheNode,
    client: ClientNode,
    loadbalancer: LoadBalancerNode}), []);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const setCustomData = (id: string, newCustomData: string) => {
    // Traverse nodes, find the right ID, then update its data, then setNodes to the new Nodes object
    setNodes(prevNodes => {
      return prevNodes.map( node => {
        if (node.id === id) {
          const data = {...node.data, customData: newCustomData};
          const newNode = {...node, data};
          return newNode;
        }
        else return node;
      })
    })
  }

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
        data: { label: `${type}`, setCustomData },
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
      </ReactFlowProvider>

    </div>
  );
};

export default Flowchart;
