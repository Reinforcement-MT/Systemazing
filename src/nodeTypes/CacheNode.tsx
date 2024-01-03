import { Handle, Position } from 'reactflow';
import { SiCachet } from 'react-icons/si';


function CacheNode() {

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className='default-node'>
        <SiCachet />
        <p>Cache</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default CacheNode;