import React, { FormEvent, ReactEventHandler } from "react";
import { useState } from "react";
import { AiOutlineEnter } from 'react-icons/ai';

export default function ChatBox(){
  const intialText = `Once the design is complete, enter your system design requirements below for review`
  const [text, setText] = useState(intialText);

  const onSubmit = (e) =>{
    e.preventDefault();
    const systemReq = e.target.systemReq.value
    console.log(e.target.systemReq.value)
    //fetch request with system requests and traversal
    // try{
    //   fetch('/queryChat', {
    //     method: 'post',
    //     body:{
    //       systemReq: JSON.stringify(systemReq),
    //       graph: JSON.stringify(graph)
    //     }
    //   })
    // }
    //set text to result of fetch request
    // setText(e.target.systemReq.value)

    //clear input box if time
  }  
  return (
    <div id="chatbox">
      <div id="chatbox-text-area">
        <p>{text}</p>
      </div>
      <form id="chatbox-input-area" onSubmit={(e) => onSubmit(e)}>
        <input type="text" name="systemReq" placeholder="Enter system requirements"/>
        <button type='submit'><AiOutlineEnter/></button>
      </form>
    </div>
  )
}