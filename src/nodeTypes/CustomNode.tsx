// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode() {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className='custom-node'>
        <input id="text" name="text"  className="nodrag" placeholder="Edit Text"/>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}

export default CustomNode;