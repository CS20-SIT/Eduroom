import React, { useState, useEffect } from "react";
import style from "../../styles/chat/chat";
import Avatar from "@material-ui/core/Avatar";
import CancelIcon from "./icons/CancelIcon";
import ExitIcon from "./icons/ExitIcon";
import AcceptIcon from "./icons/AcceptIcon";

export default function chatInvitation(props) {
  const [scrollBarStyle, setscrollBarStyle] = useState('nochat');
  const edit = props.edit;
  const uploadPic = () => {
    document.getElementById("uploadChatPic").click();
  };
  return (
    <>
      <div
        style={{
          borderLeft: "1px solid #dddddd",
          overflowY: "scroll",
          overflowX: "hidden",
          position: "relative",
        }}
        className={scrollBarStyle}
        onMouseOver={() => {
          setscrollBarStyle('chat');
        }}
        onMouseOut={() => {
          setscrollBarStyle('nochat');
        }}
      >
        <ExitIcon
          style={{ position: "absolute", top: 20, right: 10, fontSize: 18,cursor:'pointer' }}
          onClick={props.handleClose}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: 20,
            flexDirection: "column",
            height: "100%",
          }}
        >
            <h4>Invitations</h4>
            <div
            style={{
              width: "75%",
              borderBottom: "1px solid #dddddd",
              marginLeft: 14,
              marginBottom:15
            }}
          />
          <div className="memberDiv">
            <Avatar
              style={{ width: 35, height: 35 }}
              alt="Krishadawut Olde Monnikhof"
              src=""
            />
            <p className="memberName" style={{ color: "#7279A3" }}>
              Krishadawut Olde Monnikhof
            </p>
            <AcceptIcon style={{ cursor: "pointer", marginLeft: "auto" }}/>
            <CancelIcon style={{ cursor: "pointer"}} />
          </div>
          <div className="memberDiv">
            <Avatar
              style={{ width: 35, height: 35 }}
              alt="Krishadawut Olde Monnikhof"
              src=""
            />
            <p className="memberName" style={{ color: "#7279A3" }}>
              Krishadawut Olde Monnikhof
            </p>
            <AcceptIcon style={{ cursor: "pointer", marginLeft: "auto" }}/>
            <CancelIcon style={{ cursor: "pointer"}} />
          </div>
          <div className="memberDiv">
            <Avatar
              style={{ width: 35, height: 35 }}
              alt="Krishadawut Olde Monnikhof"
              src=""
            />
            <p className="memberName" style={{ color: "#7279A3" }}>
              Krishadawut Olde Monnikhof
            </p>
            <AcceptIcon style={{ cursor: "pointer", marginLeft: "auto" }}/>
            <CancelIcon style={{ cursor: "pointer"}} />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
