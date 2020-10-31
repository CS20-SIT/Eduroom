import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import ChatRoom from "../../components/chat/chatRoom";
import ChatContact from "../../components/chat/chatContact";
import EditChat from "../../components/chat/editChat";
import Nav from "../../components/layouts/sidenav/sidenav";

export default function Chat() {
  const [messageLeftColor, setMessageLeftColor] = useState("#5B5B5B");
  const [messageRightColor, setMessageRightColor] = useState("#EB7DB1");
  const [expand, setExpand] = useState({
    width: "calc(75% - 14px)",
    position: "relative",
    marginLeft: 14,
  });
  const [expand2, setExpand2] = useState({
    display: "none",
  });

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <Nav />
        </div>
        <div
          style={{
            marginLeft: "5%",
            width: " 95%",
            height: "100%",
            position: "absolute",
          }}
        >
          <Grid container justify="center" direction="row">
            <div style={{ width: "25%", backgroundColor: "#f4f5f7" }}>
              <ChatContact />
            </div>
            <div style={expand}>
              <ChatRoom
                style={{ backgroundColor: "#f4f5f7" }}
                chatRoom={{
                  setExpandChat: setExpand,
                  setExpandEdit: setExpand2,
                  messageLeftColor: messageLeftColor,
                  messageRightColor: messageRightColor,
                }}
              />
            </div>
            <div item style={expand2}>
              <EditChat
                edit={{
                  messageLeftColor: messageLeftColor,
                  messageRightColor: messageRightColor,
                  setMessageLeftColor: setMessageLeftColor,
                  setMessageRightColor: setMessageRightColor,
                }}
              />
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
}
