import React from 'react';
import { traverse } from './utils/traverse';
import ChatBox from './ChatBox'

type BottomBarProps = {nodes: any, edges: any };
const Btmbar = ({nodes, edges}: BottomBarProps) => {
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
      <ChatBox/>
    </div>
  );
};

export default Btmbar;
