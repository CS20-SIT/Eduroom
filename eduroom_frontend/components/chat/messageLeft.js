import React, { useState, useEffect } from "react";

export default function messageLeft(props) {
  const message = props.message;
  return (
    <div>
      <div style={{ textAlign: "left", width: "100%" }}>
        <div className="messageLeft">
          <span style={{ fontSize: 18 }}>{message.text}</span>
        </div>
        <br />
        <span style={{ paddingLeft: 50 }}>{message.sentTime}</span>
      </div>
      <style jsx>{`
        .messageLeft {
          background-color: ${message.color};
          color: white;
          border-radius: 10px 10px 10px 0;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 20px;
          padding-right: 20px;
          margin-top: 20px;
          margin-left: 50px;
          margin-right: 50px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
