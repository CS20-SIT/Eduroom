import React, { Fragment, useState } from "react";
import EdqizText from "../edqiz/edqizText";
import CardQuiz from "../edqiz/cardQuiz";
import AddNewQuiz from "../edqiz/addNewQuiz";
import Link from 'next/link'
import Grid from "@material-ui/core/Grid";

const Page1 = () => {
  const data = [
    { quizname: "quizname1", description: "this is a test of description1" },
    { quizname: "quizname2", description: "this is a test of description2" },
    { quizname: "quizname3", description: "this is a test of description3" },
    { quizname: "quizname4", description: "this is a test of description4" },
  ];
  let getData = [];
  function Getdata() {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        getData.push(
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <CardQuiz
              quizname={data[key].quizname}
              description={data[key].description}
            />
          </Grid>
        );
      }
    }
    getData.push(
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Link href="/create"><AddNewQuiz /></Link>
      </Grid>
    );
  }
  return (
    <Fragment>
      <div className="landing">
        <div style={{ marginTop: "5vh", width:'98vw' }}>
          <EdqizText type="list" />
        </div>
        <div className="title">
          <div className="card">
            <div style={{ color: "#3D467F", fontWeight: 600 }}>
              <Grid container>{(Getdata(), getData)}</Grid>
              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
      <style jsx>{`
        .title {
          display: flex;
          justify-content: center;
          margin-top: 5vh;
        }
        .card {
          display: flex;
          align-items: center;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
          justify-content: center;
          background: white;
          padding: 0px;
          transition: 0.3s;
          width: 95vw;
          border-radius: 5vh;
          padding: 20px;
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
export default Page1;
