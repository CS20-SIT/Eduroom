import React, { Fragment, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import GeneralNoSide from "../../components/template/generalnoside";
import api from '../../api';

const page3 = ({pin}) => {
  const [sessionid, setSesstionID] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    // let pin = 9513;
    console.log('pin',pin)
    const res = await api.get(`/api/kahoot/sessionid/${pin}`);
    setSesstionID(res.data.sessionid)
  };
  const fetchDataRank = async () => {

    if (sessionid != null) {
      const res1 = await api.get(`/api/kahoot/getRankScore/${sessionid}`);
      setData(res1.data)
    }

  };
  const renderStudent = () => {
    if (data != null) {
      return data.rank.map((el, index) => {
        return (
          <Grid container style={{ width:'80vw' }}>
          <Grid item xs={4} >
          <div key={index} style={{ display: 'flex', justifyContent: 'flex-start', padding: '20px' }}>{(index + 1) + '.' + el}</div>
          </Grid>
          <Grid item xs={4} >
          </Grid>
          <Grid item xs={4} style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '20px',marginLeft:'-40px'}}>
          {data.score[index]}
          </Grid>

          </Grid>
        );
      });
    }
  };
  useEffect(() => {

    fetchData();
    fetchDataRank();
  }, [sessionid]);
  useEffect(() => {
    if (data != null)
      console.log('data', data)
  }, [data]);
  return (
    <Fragment>
      <GeneralNoSide>
        <div className="landing">
          <Grid container style={{ height: "10vh" }}>
            <Grid item xs={4} >
              <div className="pin">
  PIN: <div style={{ color: "#FB9CCB" }}>{pin}</div>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className="header">
                <h1> SCOREBOARD</h1>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className="buttonAREA">
                <button className="button">GO TO EDQIZ LIST</button>
              </div>
            </Grid>
            <Grid item xs={12} style={{ justifyContent: 'center', display: 'flex' }}>
              <div className="card">
                <Grid container style={{ justifyContent: 'center', display: 'flex' }}>
                  <Grid item xs={4} >
                    <div className="player">NAME PLAYER</div>
                  </Grid>
                  <Grid item xs={4} >

                  </Grid>
                  <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px' }}>
                    <div className="player" style={{ borderColor: '#FB9CCB', color: '#FB9CCB' }}>SCORE</div>
                  </Grid>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' ,width:'100%' ,marginLeft:'4vw'}}>
                  <div >{renderStudent()}</div>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>


        </div>
      </GeneralNoSide>
      <style jsx>{`
      .player {
        border-radius: 1.2vw;
        width: 13vw;
        height: 5.2vh;
        color: #a880f7;
        border: 2px solid #a880f7;
        background-color: white;
        font-weight: 600;
        display:flex;
        justify-content:center;
        align-items:center;
        outline: none;
        margin-left:20px;
        font-size: 1rem;
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        display:flex;
        justify-content:center;
        border-radius: 1.2vw;
        width: 90vw;
        background-color: white;
        font-size: 1.2rem;
        align-content: flex-start;
        padding:20px;
        margin-top:2vh;
      }
      .button{
        background-color:#a880f7;
        border:none;
        color:white;
        font-weight:600;
        width:10vw;
        height:5vh;
        border-radius:10vw;
        opacity: 0.9;
      }
      .button:hover{
        opacity: 1;
            transition: 0.3s;
            box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
      }
      .buttonAREA{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        padding-right:30px;
        margin-right:40px;
        height:9vh;
      }
      .pin{
        display:flex;
        padding-left:30px;
        margin-left:50px;
        font-size:1.8vw;
        align-items:center;
        font-weight:600;
        height:9vh;
        color:#473F47;
      }
      .header{
        height:9vh;
        display:flex;
        justify-content:center;
        color:#473F47;

      }
   .landing {
      padding: 0px;
      width: 100vw;
      height: 100vh;
      background-image: url("/images/edqiz/BGgame.svg");
      background-size: cover;
      overflow: auto;
  }
        
      `}</style>
    </Fragment>
  );
};
export default page3;
