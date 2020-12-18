import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar'

export default function messageLeft(props) {
  const message = props.message;
  return (
    <div style={{display:'flex',alignItems:'center'}}>
      <Avatar
						style={{ width: 40, height: 40, marginLeft:50,marginRight:14,marginTop:20}}
						alt={message.name}
						src={message.profilePic}
					/>
          <div style={{marginBottom:0}}>
      <div style={{  marginBottom:0,marginTop:15 }}>{message.name}</div>
      <div style={{ textAlign: "left", width: "100%" }}>
        <div className="messageLeft">
          <span style={{ fontSize: 18 }}>{message.text}</span>
        </div>
        </div>
        <span style={{}}>{message.sentTime}</span>
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
          margin-top: 5px;
          margin-right: 50px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
