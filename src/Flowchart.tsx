import { useState,useRef,useCallback,useMemo } from 'react';
import ReactFlow,{
  ReactFlowProvider,
  Controls,
  ReactFlowInstance,
  Node,
  Edge
} from 'reactflow';
import 'reactflow/dist/style.css';

import { traverse } from './utils/traverse.js';
import CustomNode from './nodeTypes/CustomNode.js';
import ServerNode from './nodeTypes/ServerNode.js';

import './Flowchart.css';
import DatabaseNode from './nodeTypes/DatabaseNode.js';
import CacheNode from './nodeTypes/CacheNode.js';
import ClientNode from './nodeTypes/ClientNode.js';
import LoadBalancerNode from './nodeTypes/LoadBalancerNode.js';
import ChatBox from './ChatBox.js';

let id = 4;
const getId = () => `dndnode_${id++}`;

type FlowchartProps = { nodes: Node[],edges: Edge[],onNodesChange: any,onEdgesChange: any,onConnect: any,setNodes: any };
const Flowchart = ({ nodes,edges, setNodes, onNodesChange, onEdgesChange,onConnect }: FlowchartProps) => {
  const nodeTypes = useMemo(() => ({
    custom: CustomNode,
    server: ServerNode,
    database: DatabaseNode,
    cache: CacheNode,
    client: ClientNode,
    loadbalancer: LoadBalancerNode
  }),[]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance,setReactFlowInstance] = useState<ReactFlowInstance | null>(null);


  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  },[]);

  const setCustomData = (id: string,newCustomData: string) => {
    // Traverse nodes, find the right ID, then update its data, then setNodes to the new Nodes object
    setNodes((prevNodes: Node[]) => {
      return prevNodes.map(node => {
        if (node.id === id) {
          const data = { ...node.data,customData: newCustomData };
          const newNode = { ...node,data };
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
      console.log('Instance: ',reactFlowInstance?.toObject());
      const position = reactFlowInstance!.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}`,setCustomData },
      };

      setNodes((nds: Node[]) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow" >
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
            {/* <Controls /> */}
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Flowchart;
