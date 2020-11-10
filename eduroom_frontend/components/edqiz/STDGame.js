import React, { Fragment, useState, useEffect } from "react";
import Page1 from "./gamePage1std";
import Page2 from "./correctAnswer";
import Page3 from "./gamePage2std";
import Page4 from "./wrongAnswer";

import socketIOClient from "socket.io-client";
import { useRouter } from "next/router";

const Content = ({ id }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  const [questionNumber, setquestionNumber] = useState(0);
  const [messages, setMessages] = useState([]);
  const [nextQuestion, setNextQuestion] = useState([]);
  const [answer, setAnswer] = useState('99');

  console.log(answer)
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
      time: "45",
      point: "2000",
      ans: ["a", "b", "c", "d"],
      correct: 1,
      image: null,
    },
    {
      question: "Question3",
      time: "60",
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
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    const temp = messages.slice();
    socket.on("new-question", (isSkip, pin, questionNo) => {
      temp.push([isSkip, pin, questionNo]);
      setMessages(temp.slice());

      if (temp[questionNumber][0] == true) {
        goto(2);
      }
    });
  };
  const [time, setTime] = useState();

  const responseTime = (tempAnswer) => {
    console.log(tempAnswer,'socket')
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.on("sent-seconds", (timeTemp) => {
      setTime(timeTemp);
     

      if (timeTemp == 0) {
        console.log(tempAnswer+'socketInSide')
        if (tempAnswer == data[questionNumber].correct) {
        
          goto(2);
        } else {
          goto(4);
        }
      }
    });
  };

  const responseNextQuestion = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    const temp = messages.slice();
    socket.on("new-Nextquestion", (isNext, pin, questionNo) => {
      temp.push([isNext, pin, questionNo]);
      setNextQuestion(temp.slice());
      setquestionNumber(questionNumber + 1);
      goto(1);
    });
  };

  const sentMessage = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.emit("sent-message", data[questionNumber], id.id);
  };

  useEffect(() => {
    response();
    responseTime(answer);
  }, []);
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
            messages={messages}
            setAnswer={setAnswer}
            time={time}
            responseTime={responseTime}
          />
        );
      case 2:
        return (
          <Page2
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            responseNextQuestion={responseNextQuestion}
            time={time}
          />
        );
      case 3:
        return (
          <Page3
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            responseNextQuestion={responseNextQuestion}
            time={time}
          />
        );
      case 4:
        return (
          <Page4
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            responseNextQuestion={responseNextQuestion}
          />
        );
    }
  };
  return (
    <Fragment>
      <div className="landing">
        <div>
          <div className="card">{renderPage()}</div>
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
