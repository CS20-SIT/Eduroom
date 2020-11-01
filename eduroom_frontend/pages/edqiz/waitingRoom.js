import React, { Fragment, useState } from "react";
import GeneralNoSide from "../../components/template/generalnoside";
import Grid from "@material-ui/core/Grid";
import Link from 'next/link'
const Content = () => {
  const student = [
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },
    { name: "NICKNAME" },


  
  ];
  let getStudentData = [];

  //   console.log(student);
  function GetStudent() {
    for (var key in student) {
      if (student.hasOwnProperty(key)) {
        // getStudentData.push(student[key].name+" ");
        getStudentData.push(
          <Grid
            item
            xs={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {student[key].name}
          </Grid>
        );

        if ((key + 1) % 3 == 0 && key != 0) {
          getStudentData.push(<br />);
          getStudentData.push(<br />);
        }
      }
    }
  }
  return (
    <Fragment>
    <GeneralNoSide>
      <div className="landing">
        <div className="main">
          <br />
          <div className="font">JOIN WITH GAME-PIN</div>
          <br />
          <div className="div">00000</div>
          <br />
          <div className="card">
            <br />
            <Grid container>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="player">{student.length} players</button>
              </Grid>
              <Grid item xs={4}>
                <span className="text-title">
                  <span className="navy-text">E</span>
                  <span className="purple-text">D</span>
                  <span className="navy-text">Q</span>
                  <span className="pink-text">I</span>
                  <span className="navy-text">Z!</span>
                </span>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href={'./game'}><button className="startButton">start</button></Link >
              </Grid>
            </Grid>
            <br />
            <br />
            <div style={{ color: "#3D467F", fontWeight: 600 }}>
              <Grid container>{(GetStudent(), getStudentData)}</Grid>
              <br/>
            </div>
          </div>
           <br/>
        </div>
      </div>
      </GeneralNoSide>
      <style jsx>{`
        .startButton {
          border-radius: 1.2vw;
          width: 13vw;
          height: 5.2vh;
          color: white;
          border: none;
          background-color: #f39ac4;
          font-weight: 600;
          font-size: 1rem;
          outline: none;
        }
        .startButton:hover {
          width: 15vw;
          transition: 0.3s;
          opacity: 0.8;
        }
        .player {
          border-radius: 1.2vw;
          width: 13vw;
          height: 5.2vh;
          color: #a880f7;
          border: 2px solid #a880f7;
          background-color: white;
          font-weight: 600;
          outline: none;

          font-size: 1rem;
        }
        .text-title {
          font-family: "Quicksand", sans-serif;
          display: flex;
          justify-content: center;
          font-size: 3rem;
          font-weight: 600;
        }
        .navy-text {
          color: #3d467f;
        }
        .purple-text {
          color: #a880f7;
        }
        .pink-text {
          color: #f39ac4;
        }
        .main {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .font {
          font-weight: 700;
          color: #3d467f;
          font-size: 2rem;
        }
        .div {
          background-color: #eff0f6;
          height: 10vh;
          width: 15vw;
          border-radius: 1.2vw;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #a880f7;
          font-weight: 600;
          font-size: 2rem;
        }
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 1.2vw;
        //   height: 70vh;
          width: 90vw;
          background-color: white;
          //   display: flex;
          //   justify-content: center;
          font-size: 1.2rem;

          align-content: flex-start;
        }
        .landing {
          justify-content: center;
          width: 100vw;
          height: 100vh;
          background-image: url("/images/edqiz/create-bg.svg");
          background-repeat: no-repeat;
          background-size: cover;
          overflow: auto;
        }
      `}</style>
    </Fragment>
  );
};
export default Content;
