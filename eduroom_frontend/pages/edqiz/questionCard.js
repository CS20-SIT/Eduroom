import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";

import { useState } from "react";
import CreatePage2 from "./createPage2";
const Content = (props) => {
  CreatePage2;
  const router = useRouter();

  return (
    //Elevationl1.svg
    <Fragment>
      <div className="landing">
        <div>
          <div className="card">
            <br />
            <div>
              <p className="landing-header">Question{props.countTime}</p>
              <Grid container style={{ padding: "20px" }}>
          <Grid item xs={8}>
          <input  style={{width:'95%'}}
                type="text"
                id="fname"
                name="firstname"
                placeholder="YOUR QUESTION . . ."
              />
          </Grid>
          <Grid item xs={4}>
          <div >
                <select  style={{width:'40vh'}}>
                  <option value="0">Time:</option>
                  <option value="1">30</option>
                  <option value="2">45</option>
                  <option value="3">60</option>
                  <option value="3">90</option>

                  
                </select>
              </div>
          </Grid>
        </Grid>
             
              
             
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
            background: white;
            border-radius: 2vh;
            transition: 0.3s;
            width: 70vw;
            height: 50vh;

            margin-left: 5vw;
            margin-top: 3vh;
          }
          .landing-header {
            font-size: 1em;
            font-family: "Quicksand", sans-serif;
            font-weight: bold;
            color: #3d467f;
            margin-top: 2vh;
            margin-left: 3vw;
          }
          input[type="text"],
          select {
            // width: 40vw;
            padding: 1.5vh 2vh;
            // margin-left: 3vw;
            color: #6e5a5c;
            font-weight: 500;
            font-size: 2vh;

            margin-top: 1vh;
            outline: none;
            display: inline-block;
            border: 0.3vh solid #5b5b5b;
            border-radius: 1vh;
            box-sizing: border-box;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Content;
