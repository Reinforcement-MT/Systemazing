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
        Drag and drop to build your system diagram!
      </div>
      <div
        className="dndnode loadBalancer"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        <TbLoadBalancer />
        &nbsp; Load Balancer
      </div>
      <div
        className="dndnode server"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        <GrServer />
        &nbsp; Server
      </div>
      <div
        className="dndnode database"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        <BsDatabase />
        &nbsp; Database
      </div>
      <div
        className="dndnode cache"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        <SiCachet />
        &nbsp; Cache
      </div>
      <div
        className="dndnode custom"
        onDragStart={(event) => onDragStart(event, 'custom')}
        draggable
      >
        <IoPersonOutline />
        &nbsp; Custom Input
      </div>
    </aside>
  );
};