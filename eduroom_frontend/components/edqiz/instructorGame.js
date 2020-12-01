import React, { Fragment, useState, useEffect } from 'react';
import Page1 from './gamePage1';
import Page2 from './gamePage2';
import socketIOClient from 'socket.io-client';
import { useRouter } from 'next/router';

const Content = ({ id }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  const [endTime, setEndTime] = useState(null);
  const [questionNumber, setquestionNumber] = useState(0);
  const [messages, setMessages] = useState([]);

  const handleChangeQuestionNumber = (val) => {
    setquestionNumber(val);
  };

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
      time: '45',
      point: '2000',
      ans: ['Abortion: Safety Abortion: Safety · Addictive behaviours: Gaming disorder', ' Ageing: Global population Ageing: Global ', ' Care and support at home', 'What assistance can I get at home'],
      correct: 1,
      image: null,
    },
    {
      question: 'Browse the WebMD Questions and Answers',
      time: '60',
      point: '2000',
      ans: ['A-Z library for insights and advice for better health', 'tap Edit question or Delete question', 'When your question is answered', ' you will get a notification'],
      correct: 2,
      image: null,
    },
    {
      question: ' can have difficulty finding the right words or phrases to answer?',
      time: '90',
      point: '2000',
      ans: ['simple questions. Here are 20 of the most common questions', 'We have compiled a list of 46 common interview questions you might be asked', 'plus advice on how to answer each and every one of them', 'Read tips and example answers for 125 of the most common job interview'],
      correct: 3,
      image: null,
    },
  ];
  const [time, setTime] = useState(data[questionNumber].time);

  const response = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: '/kahoot',
    });

    const temp = messages.slice();
    socket.on('new-message', (newMessage, pin) => {
      temp.push([newMessage, pin]);
      setMessages(temp.slice());
    });
  };
  const responseTime = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: '/kahoot',
    });
    socket.on('sent-end-time', (pin, time) => {
      setEndTime(time);
    });
  };
  const setTimeSocket = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: '/kahoot',
    });
    socket.emit('start-game', id.id);
  };

  const sentMessage = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: '/kahoot',
    });

    socket.emit('sent-message', data[questionNumber], id.id);
  };

  const setNextQuestion = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: '/kahoot',
    });
    console.log('go to the next question');
    socket.emit('start-game', id.id);
    socket.on('sent-end-time', (time) => {
      console.log('time is ', time);
      setEndTime(time);
    });
  };

  const renderMessage = () => {
    const arr = messages.map((msg, index) => {
      if (messages[index][1] == id.id) {
        return <div key={index}>{msg}ha</div>;
      }
    });
    return '';
  };

  useEffect(() => {

  }, []);
  const goto = (val) => {
    setCurrent(val);
  };

  const renderPage = () => {
    switch (current) {
      case 1:
        return (
          <Page1
            id={id}
            goto={goto}
            time={data[questionNumber].time}
            endTime={endTime}
            data={data}
            questionNumber={questionNumber}
            sentMessage={sentMessage}
            response={response}
            setquestionNumber={handleChangeQuestionNumber}
          />
        );
      case 2:
        return (
          <Page2
            goto={goto}
            data={data}
            questionNumber={questionNumber}
            ChangeQuestionNumber={handleChangeQuestionNumber}
            setNextQuestion={setNextQuestion}
            setTime={setTime}
            setTimeSocket={setTimeSocket}
            id={id.id}
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
          background-image: url('/images/edqiz/create-bg.svg');
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
