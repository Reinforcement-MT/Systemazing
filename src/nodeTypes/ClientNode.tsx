import { Handle, Position } from 'reactflow';

function ClientNode() {

  return (
    <>
      <div className='react-flow__node-input'>
        Client
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default ClientNode;