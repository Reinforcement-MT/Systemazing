import { Handle, Position } from 'reactflow';
import { useState, useCallback } from 'react';

function DatabaseNode( {data, id}: NodeProps ) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className='react-flow__node-default node-column'>
        Database
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default DatabaseNode;