import React, { Fragment, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
const Page4 = ({ data,responseNextQuestion, questionNumber,id }) => {
  useEffect(() => {
    responseNextQuestion();
  }, []);
  return (
    <Fragment>
      <Grid
        container
        style={{ height: "7vh", display: "flex", alignItems: "center" }}
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
        <i
          className="fas fa-times"
          style={{ color: "white", fontSize: "10vw" }}
        ></i>
        <span className="correct">Wrong!!</span>
      </div>
      <Grid
        container
        style={{ height: "7vh", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <div className="question">Points</div>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <div className="pin" style={{ color: "#F39AC4" }}>
            {data[questionNumber].point}
          </div>
        </Grid>
      </Grid>
      <style>
        {`
        .font{
            color:white;
            font-size:1rem;
            font-weight:500;

        }
        .correct{
            color:white;
            font-size:3rem;
            font-weight:700;

        }
        .main{
            background-color: #BD8B97;
            height: 86vh;
            display: flex ;
            justify-content: center;
            flex-direction:column ;
            align-items: center;

        }
        .pin{
            color:#A880F7;
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
export default Page4;
