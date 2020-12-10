import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import socketIOClient from "socket.io-client";

const axios = require("axios");
const Page1 = ({
  id,
  time,
  goto,
  data,
  questionNumber,
  sentMessage,
  response,
  setquestionNumber,
}) => {
  const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
    path: "/kahoot",
  });
  const router = useRouter();
  const room = { name: "room1", PIN: router.query.id };

  const [diff, setDiff] = useState(null);
  const [countPlayer, setCountPlayer] = useState([]);
  // console.log('countPlayer',countPlayer)

  const setCountP = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    const temp = [];
    socket.emit("room", (router.query.id));
    socket.on("get-countAnswer", (pin, questionNo,playerAnswer) => {
      temp.push([playerAnswer]);
      console.log('getCount',playerAnswer)
      countPlayer.push(temp);
      console.log(temp,"temp")
    });
  };




  const [endTime, setEndTime] = useState(null);
  var intervalID = null;

  const responseTime = () => {
    socket.emit('room',router.query.id)
    socket.on("sent-end-time", (pin, time) => {
      if(pin==id.id){
      // console.log('sent-end-time',pin,time)
      setEndTime(time);
      }
    });
  };
  useEffect(() => {
   
    
  }, [countPlayer]);

  useEffect(() => {
    socket.emit("start-game", id.id, data[questionNumber].time);
    setCountP();
    responseTime();
  }, []);
  useEffect(() => {
    responseTime();
    if (diff != null) {
      socket.emit("set-diff", diff, id.id);
      // console.log(diff);
    }
  }, [diff]);

  function doStuff() {
    const now = new Date().getTime();
    const temp = Math.floor((endTime - now) / 1000);
    setDiff(temp);
    if (temp <= 0) {
      clearInterval(intervalID);
      goto(2);
    }
  }

  useEffect(() => {
    if (endTime !== null) {
      intervalID = setInterval(doStuff, 100);
      return () => {
        clearInterval(intervalID);
      };
    }
  }, [endTime]);

  useEffect(() => {
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function setSkip() {
    clearInterval(intervalID);
    socket.emit("set-skip", true,id.id);
    if(questionNumber==data.length){
      goto(5);
    }
    goto(2);
  }

  return (
    <Fragment>
      <div className="landing">
        <Grid container style={{ marginTop: "4vh" }}>
          <Grid item xs={10}>
            <div className="text-title">
              PIN :<div style={{ color: "#FB9CCB" }}>{room.PIN}</div>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="landing-button"
              onClick={() => {
                setSkip();
                doStuff(true);
              }}
            >
              SKIP
            </button>
          </Grid>
        </Grid>
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="text">{data[questionNumber].question}</div>
          </div>
          <Grid
            container
            style={{
              marginTop: "4vh",
              display: "flex",
              height: "45vh",
              alignItems: "center",
            }}
          >
            <Grid item xs={4}>
              <div className="text-time">TIME</div>
              <div className="text-timeNum">{diff ? diff : time}</div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/images/questionPic.jpg "
                  alt="my image"
                  style={{
                    width: "90%",
                    borderStyle: "dotted",
                    padding: "20px",
                    borderRadius: "20px",
                    borderColor: "#B3ABBC",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="text-time">ANSWER</div>
              <div className="text-timeNum" style={{ color: "#FB9CCB" }}>
                {countPlayer.length}
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            style={{ marginTop: "4vh", display: "flex", alignItems: "center" }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: "flex-end",
                display: "flex",
                padding: "1vw",
              }}
            >
              <button
                className="buttonAnswer"
                style={{ backgroundColor: "#F39AC4" }}
                onClick={() => {}}
              >
                {data[questionNumber].ans[0]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <button
                className="buttonAnswer"
                style={{ backgroundColor: "#D5C1FC" }}
              >
                {data[questionNumber].ans[1]}
              </button>
            </Grid>
          </Grid>
          <Grid
            container
            style={{ marginTop: "1vh", display: "flex", alignItems: "center" }}
          >
            <Grid
              item
              xs={6}
              style={{
                justifyContent: "flex-end",
                display: "flex",
                padding: "1vw",
              }}
            >
              <button
                className="buttonAnswer"
                style={{ backgroundColor: "#FDD4C1" }}
              >
                {data[questionNumber].ans[2]}
              </button>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <button
                className="buttonAnswer"
                style={{ backgroundColor: "#A6CEEE" }}
              >
                {data[questionNumber].ans[3]}
              </button>
            </Grid>
          </Grid>
        </div>
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
            font-family: "Quicksand", sans-serif;
            color: #473f47;
            font-weight: 600;
            font-size: 1.7rem;
            padding: 0px;
            display: flex;
            justify-content: center;
            width: 95vw;
          }
          .text-time {
            font-family: "Quicksand", sans-serif;
            align-items: center;
            color: #3d467f;
            font-weight: 600;
            font-size: 1.3rem;
            padding: 0px;
            display: flex;
            justify-content: center;
          }
          .text-timeNum {
            font-family: "Quicksand", sans-serif;
            color: #d5c1fc;
            font-weight: 600;
            font-size: 2.5rem;
            padding: 0px;
            display: flex;
            justify-content: center;
          }
          .text-title {
            font-family: "Quicksand", sans-serif;
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
            background-image: url("/images/edqiz/BGgame.svg");

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
            // position: absolute;
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
