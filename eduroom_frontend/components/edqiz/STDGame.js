import React, { Fragment, useState, useEffect } from "react";
import Page1 from "./gamePage1std";
import Page2 from "./correctAnswer";
import Page3 from "./gamePage2std";
import Page4 from "./wrongAnswer";
import Page5 from "./showRankSTD";


import socketIOClient from "socket.io-client";
import { useRouter } from "next/router";
import api from '../../api';

const Content = ({ id }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  const [questionNumber, setquestionNumber] = useState(0);
  const [messages, setMessages] = useState([]);
  const [nextQuestion, setNextQuestion] = useState([]);
  const [answer, setAnswer] = useState('99');
  const pin=router.query.id;

  const handleChangeQuestionNumber = (val) => {
    setquestionNumber(val);
  };
  console.log('answer',answer)
  
  const data = [
    {
      question:
        'directory anything else. The name cannot be changed and is the only directory used to serve static assets?',
      time: '10',
      point: '2000',
      ans: [
        'have a static file with the same',
        'directory at build time will be served',
        "Files added at runtime won't be available",
        'ecommend using a third party service ',
      ],
      correct: 0,
      image: null,
    },
    {
      question: ' COVID-19 and related health topics?',
      time: '10',
      point: '2000',
      ans: ['Abortion: Safety Abortion: Safety · Addictive behaviours: Gaming disorder', ' Ageing: Global population Ageing: Global ', ' Care and support at home', 'What assistance can I get at home'],
      correct: 1,
      image: null,
    },
    {
      question: 'Browse the WebMD Questions and Answers',
      time: '10',
      point: '1000',
      ans: ['A-Z library for insights and advice for better health', 'tap Edit question or Delete question', 'When your question is answered', ' you will get a notification'],
      correct: 2,
      image: null,
    },
    {
      question: ' can have difficulty finding the right words or phrases to answer?',
      time: '10',
      point: '3000',
      ans: ['simple questions. Here are 20 of the most common questions', 'We have compiled a list of 46 common interview questions you might be asked', 'plus advice on how to answer each and every one of them', 'Read tips and example answers for 125 of the most common job interview'],
      correct: 3,
      image: null,
    },
  ];
 
  const response = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.emit("room", (router.query.id));
    socket.on("get-skip", (isSkip) => {
      // if (isSkip) {
      //   goto(4);
      // }
    });
  };
  // console.log(questionNumber,data.length)
  
  const getQuestionNo = () => {
    
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    
    socket.on("new-questionNo", (question) => {
   
     setquestionNumber(question)
     

      
    });
  };


  const responseTime = (tempAnswer) => {
 
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.on("sent-seconds", (timeTemp) => {
      
      setTime(timeTemp);
      console.log(timeTemp)
      if (timeTemp == 0) {
        console.log(tempAnswer+'socketInSide')
        if (tempAnswer == data[questionNumber].correct) {
        console.log('right')
          goto(2);
        } else {
          goto(4);
          console.log('wrong')
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
      let tempq=questionNumber
      tempq+=1;
      
      goto(1);
    });
  };

  const sentMessage = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.emit("sent-message", data[questionNumber], id.id);
  };
  // let pin=router.query.id;
  useEffect(() => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.emit("room", (router.query.id));
    socket.on("get-Nextquestion", (isNext, pin, questionNo) => {
  
      if(questionNo<data.length){
      setquestionNumber(questionNo)
      if(isNext){
        goto(1)
      }
      }else{
        goto(5);
        console.log(pin,'goto 5')
      }
      
     

    })
    response();
    getQuestionNo();
    responseTime(answer);
    console.log(questionNumber,data.length)
  }, [questionNumber]);
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
            answer={answer}
            responseTime={responseTime}
            pin={pin}
          />
        );
      case 2:
        return (
          <Page2
          id={id.id}
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            responseNextQuestion={responseNextQuestion}
            answer={answer}
          />
        );
      case 3:
        return (
          <Page3
          id={id.id}
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            responseNextQuestion={responseNextQuestion}
            answer={answer}
          />
        );
      case 4:
        return (
          <Page4
            id={id.id}
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            responseNextQuestion={responseNextQuestion}
            answer={answer}
          />
        );
        case 5:
        return (
          <Page5
            pin={id.id}
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            responseNextQuestion={responseNextQuestion}
            answer={answer}
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
