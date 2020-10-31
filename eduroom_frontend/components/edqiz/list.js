import React, { Fragment, useState } from "react";
import EdqizText from "../edqiz/edqizText";
import CardQuiz from "../edqiz/cardQuiz";
const Page1 = () => {
  return (
    <Fragment>
      <div>
        <EdqizText type="list" />
        <div className="title">
          <div className="card" >
            <CardQuiz/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          display: flex;
          justify-content: center;
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
          // height: 100%;
          border-radius: 5vh;
          padding: 20px;


        }
      `}</style>
    </Fragment>
  );
};
export default Page1;
