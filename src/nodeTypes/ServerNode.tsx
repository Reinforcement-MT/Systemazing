import { Handle, Position } from 'reactflow';
import { GrServer } from 'react-icons/gr';

function ServerNode() {

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className='default-node'>
        <GrServer />
        <p>Server</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default ServerNode;