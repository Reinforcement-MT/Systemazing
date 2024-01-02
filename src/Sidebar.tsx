import React from 'react';
import { TbLoadBalancer } from 'react-icons/tb';
import { GrServer } from 'react-icons/gr';
import { BsDatabase } from 'react-icons/bs';
import { SiCachet } from 'react-icons/si';
import { IoPersonOutline } from 'react-icons/io5';

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  //drag and drop nodes: loadBalancer, server, database, cache,
  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode loadBalancer"
        onDragStart={(event) => onDragStart(event, 'loadBalancer')}
        draggable
      >
        <TbLoadBalancer />
        &nbsp; Load Balancer
      </div>
      <div
        className="dndnode server"
        onDragStart={(event) => onDragStart(event, 'server')}
        draggable
      >
        <GrServer />
        &nbsp; Server
      </div>
      <div
        className="dndnode database"
        onDragStart={(event) => onDragStart(event, 'database')}
        draggable
      >
        <BsDatabase />
        &nbsp; Database
      </div>
      <div
        className="dndnode cache"
        onDragStart={(event) => onDragStart(event, 'cache')}
        draggable
      >
        <SiCachet />
        &nbsp; Cache
      </div>
      <div
        className="dndnode client"
        onDragStart={(event) => onDragStart(event, 'client')}
        draggable
      >
        <IoPersonOutline />
        &nbsp; Client
      </div>
    </aside>
  );
}
