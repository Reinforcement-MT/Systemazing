import React from 'react';

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  //drag and drop nodes: loadBalancer, server, database, cache,
  return (
    <aside>
      <div className="description">Drag and drop to build your system diagram!</div>
      <div className="dndnode loadBalancer" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Load Balancer
      </div>
      <div className="dndnode server" onDragStart={(event) => onDragStart(event, 'server')} draggable>
        Server
      </div>
      <div className="dndnode database" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Database
      </div>
      <div className="dndnode cache" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Cache
      </div>
      <div className="dndnode custom" onDragStart={(event) => onDragStart(event, 'custom')} draggable>
        Custom Input
      </div>
    </aside>
  );
}