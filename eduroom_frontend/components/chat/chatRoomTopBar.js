import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "./icons/SettingsIcon";

export default function chatRoomTopBar(props) {
  const [chatRoom, setChatRoom] = useState(props.chatRoom);
  return (
    <div>
      <div className="topBar" >
        <Avatar
          alt={chatRoom.name}
          src=""
          style={{ marginTop: 4, marginLeft: 10, marginRight: 10 }}
        />
        <p style={{ marginRight: 10 }}>{chatRoom.name}</p>
        <SettingsIcon
          style={{ float: "right", marginLeft: "auto", marginRight: 10,cursor: "pointer",}}
          onClick={chatRoom.handleExpand}
        />
      </div>
      <style jsx>{`
        .topBar {
          width: calc(100% - 28px);
          float: right;
          background-color: #ffffff;
          border-bottom: 1px solid #dddddd;
          position: absolute;
          top: 0;
          display: flex;
          align-items: center;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
