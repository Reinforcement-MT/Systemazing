import React,{ FormEvent,ReactEventHandler } from "react";
import { traverse } from "./utils/traverse";
import { useState } from "react";
import { AiOutlineEnter } from 'react-icons/ai';

export default function ChatBox({ nodes,edges }: TraverseProps) {
  const intialText = `Once the design is complete, enter your system design requirements below for review`
  const [text,setText] = useState(intialText);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Grab system requirement description from form field
    const target = e.target as typeof e.target & { systemReq: { value: string }; };
    const description = target.systemReq.value

    // Traverse graph
    const graph = traverse(nodes,edges,'dndnode_1');

    //fetch request with system requests and traversal
    try {
      const body = JSON.stringify({ description: description,graph: graph });

      // console.log("Body: ",body);
      const response = await fetch('http://localhost:3000/api/queryChat',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body
      })

      const data = await response.json();

      setText(data);
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div id="chatbox">
      <div id="chatbox-text-area">
        <p>{text}</p>
      </div>
      <form id="chatbox-input-area" onSubmit={(e) => onSubmit(e)}>
        <input type="text" name="systemReq" placeholder="Enter system requirements" />
        <button type='submit'><AiOutlineEnter /></button>
      </form>
    </div>
  )
}