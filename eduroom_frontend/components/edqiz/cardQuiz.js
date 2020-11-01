import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
const Page1 = ({quizname,description}) => {
  return (
    <Fragment>
      <div>
        <div className="card">
          <Grid container>
            <Grid
              item
              xs={3}
              style={{
                justifyContent: "flex-end",
                display: "flex",
                padding: "1vw",
              }}
            >
              <div className="yourGame">Your game</div>
            </Grid>
            <Grid
              item
              xs={9}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button className="close">
                <div className="x">x</div>
              </button>
            </Grid>
            <Grid item xs={12}>
            <div className="quizName">{quizname}</div>
            </Grid>
            <Grid item xs={12} style={{marginTop:'5px'}}>
            <div className="description">{description}</div>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ marginTop: "1vh", padding: "0 0 0 20px" }}
            >
              <button className="playButton">play</button>
            </Grid>
            <Grid item xs={6} style={{ marginTop: "3vh" }}>
              <button className="button">
                <i
                  className="fas fa-pen"
                  style={{
                    color: "#EB7DB1",
                    fontSize: "1.5rem",
                  }}
                ></i>
                <span style={{ padding: "0 0 0 10px", fontSize: "1.1rem" }}>
                  Edit{" "}
                </span>
              </button>
             
            </Grid>
          </Grid>
        </div>
      </div>
      <style jsx>{`
        .button {
          background-color: white;
          border: none;
          outline: none;
        }

        .button span {
          cursor: pointer;
          display: inline-block;
          position: relative;
          transition: 0.5s;
        }

        .button span:after {
          content: ">>";
          position: absolute;
          opacity: 0;
          top: 0;
          right: -25px;
          transition: 0.5s;
        }

        .button:hover span {
          padding-right: 25px;
        }

        .button:hover span:after {
          opacity: 1;
          right: 1;
        }

        .playButton {
          width: 8vw;
          height: 7vh;
          border-radius: 1vh;
          outline: 1vh;
          background-color: white;
          color: #473f47;
          font-size: 1.2rem;
          font-weight: 500;
          box-shadow: 0 5px #999;
        }
        .playButton:active {
          box-shadow: 0 1px #666;
          transform: translateY(4px);
        }
        .description {
          font-weight: 400;
          font-size: 1rem;
          color: #5b5b5b;
          padding: 0 0 0 20px;
        }
        .quizName {
          font-weight: 600;
          font-size: 1.5rem;
          color: #473f47;
          padding: 0 0 0 20px;
        }
        .x {
          display: flex;
          justify-content: flex-end;
        }
        .close {
          width: 10vw;
          height: 8vh;
          background-color: transparent;
          border: none;
          font-size: 1.5rem;
          color: #5b5b5b;
          outline: none;
          padding: 0 10px 0 0;
        }
        .close:hover {
          color: black;

          transition: 0.3s;
        }
        .yourGame {
          border-radius: 5vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #a27cef;
          color: white;
          width: 10vw;
          height: 5vh;
          font-weight: 600;
        }
        .title {
          display: flex;
          justify-content: center;
        }
        .card {
          display: flex;
          justify-content: center;
          background: white;
          padding: 0px;
          transition: 0.3s;
          width: 40vw;
          height: 30vh;
          border-radius: 2vh;
          border: 2px solid black;
          padding: 0 20px 10px 0;
        }
      `}</style>
    </Fragment>
  );
};
export default Page1;
