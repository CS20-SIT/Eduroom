import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "./icons/KeyboardArrowDownIcon";
import MessageRight from "./messageRight";
import MessageLeft from "./messageLeft";
import MessageError from "./messageError";
import style from "../../styles/chat/chat";
import ChatRoomTopBar from "./chatRoomTopBar";
import ChatRoomBottomBar from "./chatRoomBottomBar";

export default function chatRoom(props) {
  const [messageDivStyle,setMessageDivStyle] = useState({ marginTop: 60, marginBottom: 100,visibility: 'hidden'});
  const chatRoom = props.chatRoom;
  let collapse = false;
  const [smoothScroll, setSmoothScroll] = useState({
    overflowY: "scroll",
  });
  const [scrollBarStyle, setScrollBarStyle] = useState('nochat');
  const [scrollDownStyle, setScrollDownStyle] = useState({
    fontSize: 50,
    cursor: "pointer",
  });
  const handleExpand = () => {
    if (collapse == true) {
      collapse = false;
      chatRoom.setExpandChat({ width: "calc(75% - 14px)", position: "relative",marginLeft:14 });
      chatRoom.setExpandEdit({ display: "none" });
    } else {
      collapse = true;
      chatRoom.setExpandChat({ width: "calc(50% - 14px)", position: "relative",marginLeft:14 });
      chatRoom.setExpandEdit({ width: "25%" });
    }
  };
  const handleScroll = (e) => {
    const scrollTopMax = e.target.scrollHeight - e.target.clientHeight;
    const scrollTop = e.target.scrollTop;
    if (scrollTop < scrollTopMax - 100) {
      setScrollDownStyle({
        fontSize: 50,
        cursor: "pointer",
      });
    } else {
      setScrollDownStyle({
        fontSize: 50,
        display: "none",
        cursor: "pointer",
      });
    }
  };
  const scrollDown = () => {
    var obj = document.getElementById("scroll");
    obj.scrollTop = obj.scrollHeight;
    setMessageDivStyle({ marginTop: 60, marginBottom: 100})
  };
  let message = [{
    me:true,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:true,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:true,
    error:true,
    text: 'Hello Text',
    sentTime: '13:50'
  },{
    me:true,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:true,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:true,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:false,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:true,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:false,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  },{
    me:true,
    error:false,
    text: 'Hello Text',
    sentTime: '13:50',
  }]
  useEffect(() => {
    console.log(style);
    scrollDown();
    setSmoothScroll({ overflowY: "scroll", scrollBehavior: "smooth" });
  }, []);

  return (
    <div>
        <div
          id="scroll"
          onScroll={(e) => {
            handleScroll(e);
          }}
          className={scrollBarStyle}
          onMouseOver={() => {
            setScrollBarStyle('chat');
          }}
          onMouseOut={() => {
            setScrollBarStyle('nochat');
          }}
          style={smoothScroll}
        >
          <ChatRoomTopBar
            chatRoom={{
              name: "Krishadawut Olde Monnikhof",
              handleExpand: handleExpand,
            }}
          />
          <div style={messageDivStyle}>
            {
              message ? message.map(el=>{
                if(el.me){
                  if(el.error){
                    return (<MessageError message={{text:el.text,sentTime:el.sentTime,color:chatRoom.messageRightColor}}/>)
                  } else {
                    return (<MessageRight message={{text:el.text,sentTime:el.sentTime,color:chatRoom.messageRightColor}}/>)
                  }
                }
                else {
                  return (<MessageLeft message={{text:el.text,sentTime:el.sentTime,color:chatRoom.messageLeftColor}}/>)
                }
              }):null
            }
            
          </div>
        <div className="arrowDown">
          <KeyboardArrowDownIcon style={scrollDownStyle} color={chatRoom.messageRightColor} onClick={scrollDown} />
        </div>
        <ChatRoomBottomBar chatRoom={{}} />
      </div>

      <style jsx>{style}</style>
    </div>
  );
}
