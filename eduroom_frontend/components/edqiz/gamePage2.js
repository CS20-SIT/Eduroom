import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import socketIOClient from 'socket.io-client';
const Page1 = ({
  responseTime,
  goto,
  data,
  questionNumber,
  ChangeQuestionNumber,
  setTime,
  setNextQuestion,
  id,
}) => {
  const router = useRouter();
  const setTimeSocket = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: '/kahoot',
    });

    socket.emit('set-seconds', data[questionNumber].time, id);
  };
  const room = { name: 'room1', PIN: router.query.id };

  const Correct = [];
  const getCorrectAnswer = () => {
    if (data[questionNumber].correct == 0) {
      Correct.push(
        <div key={1}>
          <Grid
            container
            style={{ marginTop: '4vh', display: 'flex', alignItems: 'center' }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#EB7DB1',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
                onClick={() => {}}
              >
                {data[questionNumber].ans[0]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#D5C1FC',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[1]}
              </button>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              marginTop: '1vh',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
            }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#FDD4C1',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[2]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#A6CEEE',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[3]}
              </button>
            </Grid>
          </Grid>
        </div>
      );
    }
    //////////////////////////111111111//////////////////////////////////////////////////////////////////
    if (data[questionNumber].correct == 1) {
      Correct.push(
        <div key={Correct.length}>
          <Grid
            container
            style={{ marginTop: '4vh', display: 'flex', alignItems: 'center' }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#F39AC4',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  opacity: '0.5',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
                onClick={() => {}}
              >
                {data[questionNumber].ans[0]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#A27CEF',
                  opacity: '1',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[1]}
              </button>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              marginTop: '1vh',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
            }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#FDD4C1',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[2]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#A6CEEE',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[3]}
              </button>
            </Grid>
          </Grid>
        </div>
      );
    }
    //////////////////////////22222222222222222222//////////////////////////////////////////////////////////////////
    if (data[questionNumber].correct == 2) {
      Correct.push(
        <div>
          <Grid
            container
            style={{ marginTop: '4vh', display: 'flex', alignItems: 'center' }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#F39AC4',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  opacity: '0.5',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
                onClick={() => {}}
              >
                {data[questionNumber].ans[0]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#A27CEF',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[1]}
              </button>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              marginTop: '1vh',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
            }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#F3B496',
                  opacity: '1',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[2]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#A6CEEE',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[3]}
              </button>
            </Grid>
          </Grid>
        </div>
      );
    }
    //////////////////////////33333333333333333//////////////////////////////////////////////////////////////////
    if (data[questionNumber].correct == 3) {
      Correct.push(
        <div>
          <Grid
            container
            style={{ marginTop: '4vh', display: 'flex', alignItems: 'center' }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#F39AC4',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  opacity: '0.5',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
                onClick={() => {}}
              >
                {data[questionNumber].ans[0]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#A27CEF',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[1]}
              </button>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              marginTop: '1vh',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
            }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                padding: '1vw',
              }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#F3B496',
                  opacity: '0.5',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[2]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <button
                className="buttonAnswer"
                style={{
                  backgroundColor: '#8CC0EA',
                  opacity: '1',
                  width: '30vw',
                  height: '10vh',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  outline: 'none',
                }}
              >
                {data[questionNumber].ans[3]}
              </button>
            </Grid>
          </Grid>
        </div>
      );
    }
  };
  return (
    <Fragment>
      <div className="landing">
        <Grid container style={{ marginTop: '4vh' }}>
          <Grid item xs={10}>
            <div className="text-title">
              PIN :<div style={{ color: '#FB9CCB' }}>{room.PIN}</div>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <button
              className="landing-button"
              onClick={() => {
                goto(1);
                ChangeQuestionNumber(questionNumber + 1);
                setNextQuestion();
                // setTime(data[questionNumber + 1].time);
                // setTimeSocket();
              }}
            >
              NEXT
            </button>
          </Grid>
        </Grid>
        <br />

        <div className="text">{data[questionNumber].question}</div>
        <Grid
          container
          style={{
            marginTop: '4vh',
            display: 'flex',
            height: '40vh',
            alignItems: 'center',
          }}
        >
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <div
              style={{
                backgroundColor: '#EFF0F6',
                padding: '20px',
                fontSize: '1.3rem',
                fontWeight: 600,
              }}
            >
              {data[questionNumber].ans[data[questionNumber].correct]}
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        {getCorrectAnswer()}
        {Correct}
      </div>
      <style jsx>
        {`
          .buttonAnswer {
            width: 30vw;
            height: 10vh;
            border: none;
            opacity: 0.8;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
            outline: none;
          }
          .buttonAnswer:hover {
            opacity: 1;
            transition: 0.3s;
            box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
          }
          .text {
            font-family: 'Quicksand', sans-serif;
            color: #473f47;
            font-weight: 600;
            font-size: 1.7rem;
            padding: 0px;
            display: flex;
            justify-content: center;
          }
          .text-time {
            font-family: 'Quicksand', sans-serif;
            align-items: center;
            color: #3d467f;
            font-weight: 600;
            font-size: 1.3rem;
            padding: 0px;
            display: flex;
            justify-content: center;
          }
          .text-timeNum {
            font-family: 'Quicksand', sans-serif;
            color: #d5c1fc;
            font-weight: 600;
            font-size: 2.5rem;
            padding: 0px;
            display: flex;
            justify-content: center;
          }
          .text-title {
            font-family: 'Quicksand', sans-serif;
            color: #473f47;
            font-weight: 600;
            font-size: 1.5rem;
            padding: 0px;
            display: flex;
            margin-left: 4vw;
          }
          .container: {
            height: 10vh;
            padding: 0px;
          }

          .card {
            display: flex;
            align-items: center;
            // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
            background: white;
            padding: 0px;
            transition: 0.3s;
            width: 100vw;
            height: 7vh;
          }

          .landing {
            padding: 0px;
            width: 100%;
            height: 100%;
            background-image: url('/images/edqiz/BGgame.svg');
            background-size: cover;
            overflow: auto;
          }
          .landing-button {
            background: #f39ac4;
            border-radius: 10vh;
            height: 4.5vh;
            width: 8vw;
            transition: 0.3s;
            color: white;
            font-weight: 600;
            border: none;
            outline: none;
            justify: center;
            align-content: center;
            position: absolute;
            margin: 0px;
          }
          .landing-button:hover {
            opacity: 0.8;
            width: 9vw;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Page1;
