import { Handle, Position } from 'reactflow';

function LoadBalancerNode() {

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default'>
        Load Balancer
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default LoadBalancerNode;