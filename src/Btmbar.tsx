import React from 'react';

const Btmbar = () => {
  return (
    <div>
      <div>btmbar</div>
      <button
        onClick={(e) => {
          traverse(nodes, edges, 'dndnode_1');
        }}
      >
        Analyze
      </button>
    </div>
  );
};

export default Btmbar;
