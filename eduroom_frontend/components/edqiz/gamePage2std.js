import React, { Fragment, useEffect,useState } from "react";
import socketIOClient from "socket.io-client";
import { useRouter } from "next/router";

import Grid from "@material-ui/core/Grid";
const Page3 = ({questionNumber,goto,answer,data,id}) => {
  const router = useRouter();

  const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
    path: '/kahoot',
  });
  const [diff, setDiff] = useState(null);
 
  useEffect(() => {
    socket.emit("room", (router.query.id));
    // console.log('watiting',answer)
    socket.on('get-diff', (time) => {
      setDiff(time);
      if(time==0 && answer!=99){
        if(answer == data[questionNumber].correct){
        goto(2)
        console.log('right timeup')
      }
        else{
          goto(4)
        console.log('wrong timeup')

        }
      }
    });
    socket.on("get-skip", (isSkip) => {
      if ((isSkip || answer == data[questionNumber].correct)&&answer!=99) {
        if (answer == data[questionNumber].correct) {
          console.log(answer == data[questionNumber].correct,'skip');
          goto(2);
        } else {
          goto(4);
          console.log('wrong skip')
        }
      }
    });
  }, []);
  return (
    <Fragment>
      <Grid
        container
        style={{ height: "3vh", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <div className="question">question : {questionNumber+1}</div>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
  <div className="pin">PIN:{id}</div>
        </Grid>
      </Grid>
      <div className="main">
    
        <span className="correct">Please Wait!</span>
        <div className="font">Another Players</div>
  <div className="font">time left : {diff}</div>
      </div>
      <Grid
        container
        style={{ height: "3vh", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <div className="question">Points</div>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <div className="pin">
          {data[questionNumber].point}
          </div>
        </Grid>
      </Grid>
      <style>
        {`
        .font{
            color:white;
            font-size:2rem;
            font-weight:500;

        }
        .correct{
            color:white;
            font-size:3rem;
            font-weight:700;

        }
        .main{
            background-color: #6699FF;
            height: 86vh;
            display: flex ;
            justify-content: center;
            flex-direction:column ;
            align-items: center;

        }
        .pin{
            color:#6699FF;
            font-weight:600;
            font-size:1.5rem;
            justify-content:flex-end;
            display:flex;
            padding:0px 20px 0px 0px;
        }
        .question{
            font-weight:600;
            display:flex;
            justify-content:start;
            font-size:1.5rem;
            padding:0px 0px 0px 20px;
        }
        
                    `}
      </style>
    </Fragment>
  );
};
export default Page3;
