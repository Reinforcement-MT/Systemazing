import React from 'react';

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  //drag and drop nodes: loadBalancer, server, database, cache,
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode loadBalancer" onDragStart={(event) => onDragStart(event, 'loadBalancer')} draggable>
        Load Balancer
      </div>
      <div className="dndnode server" onDragStart={(event) => onDragStart(event, 'server')} draggable>
        Server
      </div>
      <div className="dndnode database" onDragStart={(event) => onDragStart(event, 'database')} draggable>
        Database
      </div>
      <div className="dndnode cache" onDragStart={(event) => onDragStart(event, 'cache')} draggable>
        Cache
      </div>
      <div className="dndnode client" onDragStart={(event) => onDragStart(event, 'client')} draggable>
        Client
      </div>
    </aside>
  );
};