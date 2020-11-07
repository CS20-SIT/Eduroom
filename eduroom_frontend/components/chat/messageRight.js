import React, { useState, useEffect } from "react";

export default function messageRight(props) {
  const message = props.message;
  return (
    <div>
      <div style={{ textAlign: "right", width: "100%" }}>
        <div className='messageRight'>
          <span style={{ fontSize: 18 }}>{message.text}</span>
        </div>
        <br />
  <span style={{ paddingRight: 50 }}>Read {message.sentTime}</span>
      </div>
      <style jsx>{`
        .messageRight{
            background-color: ${message.color};
            color: white;
            border-radius:10px 10px 0 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            padding-right: 20px;
            margin-top:20px;
            margin-right:50px;
            margin-left:50px;
            display:inline-block
          }
      `}</style>
    </div>
  );
}
