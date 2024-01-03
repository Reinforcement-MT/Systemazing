import { Handle, Position } from 'reactflow';
import { BsDatabase } from 'react-icons/bs';
import { useState, useCallback } from 'react';

function DatabaseNode( {data, id}: NodeProps ) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback((evt) => {
    data.setCustomData(id, evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className='default-node'>
        <BsDatabase />
        <p>DB</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default DatabaseNode;