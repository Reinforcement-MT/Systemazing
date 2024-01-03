import { Handle, Position } from 'reactflow';

function DatabaseNode() {

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default'>
        Database
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default DatabaseNode;