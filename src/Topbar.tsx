import React from 'react';
import { TbLoadBalancer } from 'react-icons/tb';
import { GrServer } from 'react-icons/gr';
import { BsDatabase } from 'react-icons/bs';
import { SiCachet } from 'react-icons/si';
import { IoPersonOutline } from 'react-icons/io5';
import { CiLaptop } from 'react-icons/ci';
import './Topbar.css';
import './Flowchart.css';

export default function Topbar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  //drag and drop nodes: loadBalancer, server, database, cache,
  return (
    <div>
      <div className="title">
      Systemazing
      </div>
      <div className="description">
        Drag and drop to build your system diagram!
      </div>
      <div className="topdndnode">
        <div
          className="dndnode client"
          onDragStart={(event) => onDragStart(event, 'client')}
          draggable
        >
          <CiLaptop />
          &nbsp; Client
        </div>
        <div
          className="dndnode loadbalancer"
          onDragStart={(event) => onDragStart(event, 'loadbalancer')}
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
          className="dndnode custom"
          onDragStart={(event) => onDragStart(event, 'custom')}
          draggable
        >
          <IoPersonOutline />
          &nbsp; Custom Input
        </div>
      </div>
    </div>
  );
}
