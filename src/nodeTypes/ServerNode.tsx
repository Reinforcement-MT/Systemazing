import { Handle, Position } from 'reactflow';

function ServerNode() {

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default'>
        Server
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default ServerNode;