// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode() {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default'>
        <input id="text" name="text"  className="nodrag" placeholder="Edit Text"/>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default CustomNode;