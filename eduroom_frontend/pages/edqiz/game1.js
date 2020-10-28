import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
const Content = () => {
  const room={name:'room1',PIN:'99999'};
  const [questionNum,setQuestionNum]=useState('0');
  const [player, setPlayer] = useState([
    {
    
    }
  ]);

  const question = [
    {
      question: "test system",
      time: "45",
      point: "2000",
      ans: ["a", "b", "c", "d"],
      correct: 0,
      image: null,
    },{
      question: "test system1",
      time: "90",
      point: "2000",
      ans: ["a1", "b2", "c3", "d4"],
      correct: 2,
      image: null,
    }
  ];
  const addHistory=(choice)=>{
    let temp=[];
    let getScore=0;
    if(choice==question[questionNum].correct){
      getScore=question[questionNum].point;
    }
    temp.push({questionNo:questionNum,
      answer:question[questionNum].ans[choice],
      score:getScore
    })
    setPlayer(temp);
    temp=[];
    console.log(player);
    
  }
  function questionNext(){
    var num=questionNum;
    num++;
    setQuestionNum(num);

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
            <button className="landing-button"  onClick={() => {
                questionNext();
              }}>SKIP </button>
          </Grid>
        </Grid>
        <br />
        <div className="text">QUESTION</div>
        <Grid
          container
          style={{
            marginTop: "4vh",
            display: "flex",
            height: "15vh",
            alignItems: "center",
          }}
        >
          <Grid item xs={4}>
            <div className="text-time">TIME</div>
        <div className="text-timeNum">{question[questionNum].time}</div>
          </Grid>
          <Grid item xs={4}>
            {/* picture */}
          </Grid>
          <Grid item xs={4}>
            <div className="text-time">ANSWER</div>
            <div className="text-timeNum" style={{ color: "#FB9CCB" }}>
              0
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
              onClick={() => {
                addHistory(0);
               
              }}
            >
              {question[questionNum].ans[0]}
            </button>
          </Grid>
          <Grid item xs={6}>
            <button
              className="buttonAnswer"
              style={{ backgroundColor: "#D5C1FC" }}
            >
               {question[questionNum].ans[1]}
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
               {question[questionNum].ans[2]}
            </button>
          </Grid>
          <Grid item xs={6}>
            <button
              className="buttonAnswer"
              style={{ backgroundColor: "#A6CEEE" }}
            >
               {question[questionNum].ans[3]}
            </button>
          </Grid>
        </Grid>
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
            width: 100vw;
            height: 100vh;
            background-image: url("/images/edqiz/BG game.svg");
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
export default Content;
