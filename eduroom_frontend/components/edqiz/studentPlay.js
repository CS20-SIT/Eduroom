import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import style from '../../styles/edqiz/managePage';
import Page1 from './join';
import Page2 from './edqizManagePage2';
import Page3 from './edqizManagePage3';
import LandingPage from './edqizLanding';
import socketIOClient from 'socket.io-client';

const Content = ({ mode }) => {
  const router = useRouter();
  // console.log(router.query.room);

  const [current, setCurrent] = useState(1);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState(['hello1', 'hello2']);
  const goto = (val) => {
    const data = { name, description, image, questionList };
    console.log(data);
    if (val != current) {
      if (val <= 2 || isValidForm()) {
        setCurrent(val);
      }
    }
  };
  const checkPinIsValid = () => {
    let temp = 0;
    for (let i = 0; i < mockData.length; i++) {
      temp++;
      if (mockData[i].pin === router.query.room) {
        break;
      } else if (
        temp === mockData.length &&
        mockData[i].pin !== router.query.room
      ) {
        alert('ROOM IS NOT VALID');
        router.push('/edqiz');
      }
    }
  };

  const renderPage = () => {
    switch (current) {
      case 1:
        return <Page1 goto={goto} />;
      case 2:
        return <Page2 goto={goto} />;
      case 3:
        return <Page3 goto={goto} />;
    }
  };

  const response = () => {
    const socket = socketIOClient('http://localhost:8000/');
    const temp = messages.slice();
    socket.on('new-message', (newMessage) => {
      console.log('we got new messgae ', newMessage);
      temp.push(newMessage);
      console.log('temp is ', temp);
      setMessages(temp);
    });
  };
  const sentMessage = () => {
    const socket = socketIOClient('http://localhost:8000/');
    console.log('we sent new message ', inputMessage);
    socket.emit('sent-message', inputMessage);
  };

  const renderMessage = () => {
    const arr = messages.map((msg, index) => {
      return <div key={index}>{msg}</div>;
    });
    return arr;
  };
  const test = () => {
    return (
      <div style={{ padding: '30px' }}>
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
  useEffect(() => {
    // checkPinIsValid();
    response();
  }, []);
  return (
    <Fragment>
      <div>
        <div>{renderPage()}</div>
        <div>{test()}</div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
