import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import style from "../../styles/edqiz/landing";
const Page1 = ({ goto, mockData,change }) => {

  const router = useRouter();
  // console.log(router.query.room)
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="col-12">
            <div
              style={{
                fontSize: "5rem",
                fontWeight: 600,
                color: "#3D467F",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              Play NOW!
            </div>
            <div
              style={{
                fontSize: "1.7rem",
                fontWeight: 550,
                color: "#3D467F",
                display: "flex",
                justifyContent: "center",
              }}
            >
              YOUR'RE IN GAME PIN
            </div>
            <div
              className="col-12"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  color: "#A27CEF",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#EFF0F6",
                  width: "20vw",
                  alignItems: "center",
                  borderRadius: "5px",
                  height: "10vh",
                }}
              >
                {router.query.room}
              </div>
            </div>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: 550,
                color: "#3D467F",
                display: "flex",
                justifyContent: "center",
              }}
            >
              FILL IN YOUR NAME :
            </div>
            <div className="row">
              <input
                type="text"
                id="fname"
                name="firstname"
                onChange={(e) => change(e.target.value)}
                placeholder="fill in your name . ."
              />
            </div>
            <div className="row">
              <button className="landing-button" onClick={() => goto(2)} >
                <span className="landing-button-text">JOIN GAME</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Page1;
