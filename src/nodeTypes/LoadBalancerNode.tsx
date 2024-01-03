import { Handle, Position } from 'reactflow';
import { TbLoadBalancer } from 'react-icons/tb';

function LoadBalancerNode() {

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className='default-node'>
        <TbLoadBalancer />
        <p>LB</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default LoadBalancerNode;