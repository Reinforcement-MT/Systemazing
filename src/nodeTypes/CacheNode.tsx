import { Handle, Position } from 'reactflow';

function CacheNode() {

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default'>
        Cache
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default CacheNode;