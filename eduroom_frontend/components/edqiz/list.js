import React, { Fragment, useState } from "react";
import EdqizText from "../edqiz/edqizText";
import CardQuiz from "../edqiz/cardQuiz";
import AddNewQuiz from "../edqiz/addNewQuiz";
import Grid from "@material-ui/core/Grid";
const Page1 = ({ data, goto, handleQuestionNumber }) => {
  const renderQuestion = () => {
    return data.map((el, index) => {
      return (
        <CardQuiz
          key={index}
          data={el}
          index={index}
          quizname={data[index].quizname}
          description={data[index].description}
          goto={goto}
          handleQuestionNumber={(val) => {
            handleQuestionNumber(val);
          }}
        />
      );
    });
  };

  return (
    <Fragment>
      <div className="landing">
        <div style={{ marginTop: "5vh", width: "100vw" }}>
          <EdqizText type="list" />
        </div>
        <div className="title">
          <div className="card">
            <div
              style={{
                color: "#3D467F",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid container style={{display:'flex',justifyContent:'center'}}>
                {renderQuestion()}
                <AddNewQuiz />
              </Grid>

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
