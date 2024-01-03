// import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { useCallback } from 'react';

type NodeProps = {data: any, id: string}
function CustomNode( {data, id}: NodeProps ) {

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((evt) => {
    data.setCustomData(id, evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default'>
        <input id="text" name="text"  className="nodrag" onChange={onChange} placeholder="Edit Text"/>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default CustomNode;