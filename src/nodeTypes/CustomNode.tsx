// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { useCallback } from 'react';

function CustomNode( {data, id}: NodeProps ) {

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((evt) => {
    data.setCustomData(id, evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className='custom-node'>
        <input id="text" name="text"  className="nodrag" onChange={onChange} placeholder="Edit Text"/>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default CustomNode;