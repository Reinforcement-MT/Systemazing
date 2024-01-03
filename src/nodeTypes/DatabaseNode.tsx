import { Handle, Position } from 'reactflow';
import { BsDatabase } from 'react-icons/bs';
import React, { useState, useCallback } from 'react';

function DatabaseNode( {data, id}: NodeProps ) {
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