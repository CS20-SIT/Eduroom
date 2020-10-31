import React, { Fragment, useState } from "react";
const Page1 = () => {
  return (
    <Fragment>
      <div>
        <div className="card">
          ha
        </div>
      </div>
      <style jsx>{`
        .title {
          display: flex;
          justify-content: center;
        }
        .card {
          padding:20px;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
          justify-content: center;
          background: white;
          padding: 0px;
          transition: 0.3s;
          width: 35vw;
          height: 25vh;
          border-radius: 5vh;

        }
      `}</style>
    </Fragment>
  );
};
export default Page1;
