import { Handle, Position } from 'reactflow';
import { CiLaptop } from 'react-icons/ci';

function ClientNode() {

  return (
    <>
      <div className='default-node'>
        <CiLaptop />
        <p>Client</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default ClientNode;