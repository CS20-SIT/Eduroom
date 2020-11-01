import React, { useState, useEffect } from "react";
import style from "../../styles/chat/chat";
import Avatar from "@material-ui/core/Avatar";
import AddMember from "./addMember";
import CancelIcon from "./icons/CancelIcon";
import CameraAltIcon from "./icons/CameraAlt";
import BlueInput from "./blueInput";
import Submit from "./submit";
import ExitIcon from "./icons/ExitIcon";

export default function createChatRoom(props) {
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
          <div>
            <div onClick={uploadPic} className="chatPic">
              <div className="picOverlay">
                <CameraAltIcon />
              </div>
              <Avatar
                style={{ width: 60, height: 60 }}
                alt="Krishadawut Olde Monnikhof"
                src=""
              />
              <input
                id="uploadChatPic"
                type="file"
                name="uploadChatPic"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <BlueInput />
          <AddMember />
          <div className="memberDiv">
            <Avatar
              style={{ width: 35, height: 35 }}
              alt="Krishadawut Olde Monnikhof"
              src=""
            />
            <p className="memberName" style={{ color: "#7279A3" }}>
              Krishadawut Olde Monnikhof
            </p>
            <CancelIcon style={{ cursor: "pointer", marginLeft: "auto" }} />
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
            <CancelIcon style={{ cursor: "pointer", marginLeft: "auto" }} />
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
            <CancelIcon style={{ cursor: "pointer", marginLeft: "auto" }} />
          </div>
          <Submit />
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
