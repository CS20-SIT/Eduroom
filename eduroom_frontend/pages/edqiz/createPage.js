import React, { Fragment } from "react";
import { useRouter } from "next/router";

const Content = () => {
  const router = useRouter();
  return (
    //Elevationl1.svg
    <Fragment>
      <div className="landing">
        <div>
          <img
            className="landing-img"
            alt="landing-img"
            src="../images/edqiz/CREATE-NEW -dqiz!.svg"
          />
          <div className="card">
            <img
              className="Elevation"
              alt="landing-img"
              src="../images/edqiz/Elevationl1.svg"
            />
            <div style={{ textAlign: "center" }}>
              <p className="landing-header">QUIZ NAME</p>
              <span style={{ color: "#3d467f" }}>
                let's start by giving the quiz a name
              </span>
            </div>
            <br />
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="QUZI NAME . . ."
            />
            <br />
            <br /><br/>
            <button
            className="landing-button"
            onClick={() => router.push("/login")}
          >
            <a className="landing-button-text">GO!</a>
            <br />
          </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .landing-header {
            font-size: 2em;
            font-family: "Quicksand", sans-serif;
            font-weight: bold;
            color: #3d467f;
            margin-top: 20vh;
          }

          .Elevation {
            width: 70vw;
            height: 75vh;
            position: absolute;
            pointer-events: none;
            transition: 0.3s;
            margin-left: 7.5vw;
            margin-top: -30vh;
          }
          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
            background: white;
            border-radius: 2vh;
            transition: 0.3s;
            width: 85vw;
            height: 75vh;
            position: absolute;
            margin-left: 7vw;
            margin-top: 20vh;
          }
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
          }

          .landing-img {
            width: 35vw;
            transition: 0.3s;
            pointer-events: none;
            margin-left: 33vw;
            margin-top: 10vh;
            position: absolute;
          }
          .landing {
            justify-content: center;
            width: 100vw;
            height: 100vh;

            background-image: url("../images/edqiz/Frame1.svg");
            background-repeat: no-repeat;

            background-size: cover;
          }
          .landing-content {
            position: absolute;

            font-family: "Quicksand", sans-serif;
          }

          .landing-button {
            background: #A880F7;
            position: fixed;
            border-radius: 10vh;
            height: 6.5vh;
            width: 14vw;
            transition: 0.3s;
            padding: 0.5rem 1.5rem;
            border: none;
            outline: none;
            justify: center;
            align-content: center;
            margin-left: 36vw;
          }
          .landing-button:hover {
            cursor: pointer;
            opacity: 0.8;
            transition: 0.25s;
          }
          .landing-button-text {
            color: white;
            font-weight: 540;
            font-size: 3vh;
            font-family: "Quicksand", sans-serif;
          }

          input[type="text"],
          select {
            width: 20vw;
            height: 8vh;
            padding: 1.5vh 2vh;
            margin-left: 33vw;
            transition: 0.3s;
            color: #6e5a5c;
            font-weight: 500;
            font-size: 2vh;
            background-color: #eff0f6;
            display: inline-block;
            border: none;
            border-radius: 2vh;
            box-sizing: border-box;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Content;
