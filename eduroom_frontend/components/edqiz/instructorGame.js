import React, { Fragment, useState, useEffect } from "react";
import Page1 from "./gamePage1";
import Page2 from "./gamePage2";
import socketIOClient from "socket.io-client";
import { useRouter } from "next/router";

const Content = ({ id }) => {
  // console.log("idPlay",id.id)
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  const [questionNumber, setquestionNumber] = useState(0);
  const [messages, setMessages] = useState([]);

  const handleChangeQuestionNumber = (val) => {
    setquestionNumber(val);
  };

  const data = [
    {
      question:
        "directory anything else. The name cannot be changed and is the only directory used to serve static assets?",
      time: "90",
      point: "2000",
      ans: [
        "have a static file with the same",
        "directory at build time will be served",
        "Files added at runtime won't be available",
        "ecommend using a third party service ",
      ],
      correct: 0,
      image: null,
    },
    {
      question: "Question2",
      time: "90",
      point: "2000",
      ans: ["a", "b", "c", "d"],
      correct: 1,
      image: null,
    },
    {
      question: "Question3",
      time: "90",
      point: "2000",
      ans: ["a", "b", "c", "d"],
      correct: 2,
      image: null,
    },
    {
      question: "Question4",
      time: "90",
      point: "2000",
      ans: ["a", "b", "c", "d"],
      correct: 3,
      image: null,
    },
  ];
  const response = () => {
    const socket = socketIOClient("http://localhost:8000/");
    const temp = messages.slice();
    socket.on("new-message", (newMessage, pin) => {
      temp.push([newMessage, pin]);
      setMessages(temp.slice());
    });
  };

  const sentMessage = () => {
    const socket = socketIOClient("http://localhost:8000/");
    socket.emit("sent-message", data[questionNumber], id.id);
  };
  // console.log("questionNo", questionNumber);
  const renderMessage = () => {
    const arr = messages.map((msg, index) => {
      console.log("test");

      if (messages[index][1] == id.id) {
        console.log(messages);
        console.log(messages[index][1] == id.id);

        return <div key={index}>{msg}ha</div>;
      }
    });
    return ''
  };

  useEffect(() => {
    // response();
  }, []);
  console.log(messages);
  const goto = (val) => {
    setCurrent(val);
  };

  const renderPage = () => {
    switch (current) {
      case 1:
        return (
          <Page1
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            sentMessage={sentMessage}
            response={response}
          />
        );
      case 2:
        return (
          <Page2
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
          />
        );
    }
  };
  return (
    <Fragment>
      <div className="landing">
        <div>
          <div className="card">{renderPage()}</div>
          {renderMessage()}
        </div>
      </div>
      <style jsx>{`
        .content {
          width: 100vw;
          padding: 3% 5%;
          height: 90vh;
        }
        .landing {
          justify-content: center;
          width: 100vw;
          height: 100vh;
          background-image: url("/images/edqiz/create-bg.svg");
          background-repeat: no-repeat;
          background-size: cover;
          overflow: auto;
        }
        .card {
          background: white;
          border-radius: 2vh;
          transition: 0.3s;
          width: 100%;
          height: 100vh;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          flex-flow: column;
          justify-content: space-around;
        }
      `}</style>
    </Fragment>
  );
};
export default Content;
