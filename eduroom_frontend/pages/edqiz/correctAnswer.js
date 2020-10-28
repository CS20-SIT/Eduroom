import React, { Fragment } from "react";
import GeneralNoNav from "../../components/template/generalnonav";
import Grid from "@material-ui/core/Grid";
const Content = () => {
  return (
    <Fragment>
      <GeneralNoNav />
      <Grid
        container
        style={{ height: "7vh", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <div className="question">question : 1</div>
        </Grid>
        <Grid item xs={6}>
          <div className="pin">PIN:00000</div>
        </Grid>
      </Grid>
      <div className="main">
        <i
          class="fas fa-check"
          style={{ color: "white", fontSize: "10vw" }}
        ></i>
        <span className="correct">correct!</span>
        <div className="font">1000 points for you</div>
        <div className="font">You are now in 3 th position</div>
      </div>
      <Grid
        container
        style={{ height: "7vh", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <div className="question">Points</div>
        </Grid>
        <Grid item xs={6}>
          <div className="pin" style={{color:'#F39AC4'}}>2000</div>
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
            background-color: #96AE97;
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
            font-size:1.5rem;
            padding:0px 0px 0px 20px;
        }
        
                    `}
      </style>
    </Fragment>
  );
};
export default Content;
