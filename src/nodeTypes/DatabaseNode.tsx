import { Handle, Position } from 'reactflow';
import { useState, useCallback } from 'react';

function DatabaseNode( {data, id}: NodeProps ) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback((evt) => {
    data.setCustomData(id, evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default node-column'>
        Database
        <button className="foldButton" onClick={() => {setDropdownOpen(dd => !dd)}}>➤</button>
        {dropdownOpen && <textarea placeholder='Add Details' onChange={onChange}></textarea> }
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default DatabaseNode;