import React, { useState, useEffect } from "react";
import style from "../../styles/chat/chat";
import Avatar from "@material-ui/core/Avatar";
import Colour from "./colour";
import ChangeThemeColorTitle from "./changeThemeColorTitle";
import AddMember from "./addMember";
import CreateIcon from "./icons/CreateIcon";
import CancelIcon from "./icons/CancelIcon";
import Leave from "./leave";
import DeleteGroup from ".//deleteGroup";
import CameraAltIcon from "./icons/CameraAlt";

export default function editChat(props) {
  const [scrollBarStyle, setscrollBarStyle] = useState('nochat');
  const edit = props.edit;
  const changeColor = (l, r) => {
    edit.setMessageLeftColor(l);
    edit.setMessageRightColor(r);
    console.log(edit.messageRightColor);
  };
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
        }}
        className={scrollBarStyle}
        onMouseOver={() => {
          setscrollBarStyle('chat');
        }}
        onMouseOut={() => {
          setscrollBarStyle('nochat');
        }}
      >
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
          <h4 style={{ textAlign: "center" }}>Group name</h4>
          <ChangeThemeColorTitle />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              width: "90%",
            }}
          >
            <div onClick={() => changeColor("#5B5B5B", "#EB7DB1")}>
              <Colour
                color={{ color1: "#5B5B5B", color2: "#EB7DB1", active: true }}
              />
            </div>
            <div onClick={() => changeColor("#5B5B5B", "#A27CEF")}>
              <Colour color={{ color1: "#5B5B5B", color2: "#A27CEF" }} />
            </div>
            <div onClick={() => changeColor("#5B5B5B", "#F3B496")}>
              <Colour color={{ color1: "#5B5B5B", color2: "#F3B496" }} />
            </div>
            <div onClick={() => changeColor("#3D467F", "#8CC0EA")}>
              <Colour color={{ color1: "#3D467F", color2: "#8CC0EA" }} />
            </div>
          </div>
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
            <CreateIcon style={{ marginLeft: "auto", cursor: "pointer" }} />
            <CancelIcon style={{ cursor: "pointer" }} />
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
            <CreateIcon style={{ marginLeft: "auto", cursor: "pointer" }} />
            <CancelIcon style={{ cursor: "pointer" }} />
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
            <CreateIcon style={{ marginLeft: "auto", cursor: "pointer" }} />
            <CancelIcon style={{ cursor: "pointer" }} />
          </div>
          <Leave />
          <DeleteGroup />
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
