import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import style from "../../styles/edqiz/managePage";
import Page1 from "./join";
import Page2 from "./join2";
import Page3 from "./edqizManagePage3";

import socketIOClient from "socket.io-client";

const Content = () => {
  const router = useRouter();
  // console.log(router.query.room);

  const [name, setName] = useState("");
  const mockData = [
    { id: "1", pin: "3456" },
    { id: "2", pin: "1234" },
    { id: "3", pin: "2345" },
    { id: "4", pin: "6789" },
  ];

  const [current, setCurrent] = useState(1);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomPin, setRoomPin] = useState([]);
  // console.log(roomPin)

  const goto = (val) => {
    if (val != current) {
      if (val <= 2 || isValidForm()) {
        setCurrent(val);
      }
    }
  };
  const handleChangeQuizName = (val) => {
    // console.log(val);
    setName(val);
  };

  const renderPage = () => {
    switch (current) {
      case 1:
        return (
          <Page1
            goto={goto}
            mockData={mockData}
            change={handleChangeQuizName}
          />
        );
      case 2:
        return <Page2 goto={goto} mockData={mockData} name={name} />;
      case 3:
        return <Page3 goto={goto} />;
    }
  };

  const response = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
      
    });
    const temp = messages.slice();
    socket.on("new-message", (newMessage, pin) => {
      temp.push([newMessage, pin]);
      setMessages(temp.slice());
    });
  };

  const checkOpenRoom = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    const temp = messages.slice();
    socket.on("new-room", (isOpen, pin) => {
      temp.push([isOpen, pin]);
      setRoomPin(temp.slice());
    });
  };
  const sentMessage = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.emit("sent-message", inputMessage);
   
  };

  const renderMessage = () => {
    const arr = roomPin.map((msg, index) => {
      if (roomPin[index][1] == router.query.room) {
         router.push('../../edqiz')
      }
    });
    return arr;
  };
  console.log("roomPin", roomPin);
  const renderPin = () => {
    const arr = roomPin.map((pin, index) => {
      return <div key={index}>{pin}</div>;
    });
    return arr;
  };
  const test = () => {
    return (
      <div style={{ padding: "30px" }}>
        <input
          type="text"
          onChange={(e) => setInputMessage(e.target.value)}
        ></input>
        <button onClick={sentMessage}>Sent</button>
        <h2>This is the message</h2>
        <div>{renderMessage()}</div>
      </div>
    );
  };
  const startGame = () => {
    
    roomPin.map((el, index) => {
      console.log(roomPin[index][0]==true && roomPin[index][1]==router.query.room)
     if(roomPin[index][0]==true && roomPin[index][1]==router.query.room){
       console.log('gotoanother Page')
     }
    })

  };
  useEffect(() => {
    response();
    checkOpenRoom();
    startGame();
  }, []);

  return (
    <Fragment>
      <div>
        <div>{renderPage()}</div>
        {renderMessage()}
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
