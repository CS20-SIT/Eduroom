import RefreshIcon from "./icons/RefreshIcon";
import React, { useState, useEffect } from "react";

export default function messageError(props) {
  const message = props.message;
  return (
    <div>
      <div style={{ textAlign: "right", width: "100%" }}>
        <div className='messageError'>
  <span style={{ fontSize: 18 }}>{message.text}</span>
        </div>
        <RefreshIcon style={{ marginRight: 50 }} />
        <br />
        <span style={{ paddingRight: 75 }}>Message Can't Be Sent!</span>
      </div>
      <style jsx>{`
        .messageError {
          background-color: ${message.color};
          color: white;
          border-radius: 10px 10px 0 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 20px;
          padding-right: 20px;
          margin-top: 20px;
          margin-right: 10px;
          margin-left: 50px;
          display: inline-block;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
