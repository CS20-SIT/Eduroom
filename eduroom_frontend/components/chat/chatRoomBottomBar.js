import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Input from "@material-ui/core/Input";
import SendIcon from "./icons/SendIcon";
import InsertEmoticonIcon from "./icons/InsertEmoticonIcon";

export default function chatRoomBottomBar(props) {
  const [chatRoom, setChatRoom] = useState(props.chatRoom);
  return (
    <>
      <div className="bottomBar">
        <Avatar
          alt="Krishadawut Olde Monnikhof"
          src=""
          style={{ marginTop: 4, marginRight: 15,}}
        />
        <Input
          placeholder="Write here..."
          inputProps={{ "aria-label": "description" }}
          style={{ width: "50%" }}
        />
        <InsertEmoticonIcon style={{ marginLeft: 15,cursor:'pointer', }} />
        <SendIcon style={{ marginLeft: 15,cursor:'pointer', }} />
      </div>
      <style jsx>{`
        .bottomBar {
          background-color: #ffffff;
          width: calc(100% - 28px);
          border-top: 1px solid #dddddd;
          height: 80px;
          bottom: 0;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }
      `}</style>
    </>
  );
}
