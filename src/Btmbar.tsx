import React from 'react';
import { traverse } from './utils/traverse';
import ChatBox from './ChatBox'

const Btmbar = (props: TraverseProps) => {
  return (
    <div>
      <ChatBox {...props} />
    </div>
  );
};

export default Btmbar;
