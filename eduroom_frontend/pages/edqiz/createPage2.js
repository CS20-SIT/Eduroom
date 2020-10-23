import React, { Fragment } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import QuestionCard from "./questionCard";

const Content = (props) => {
  const [count, setCount] = useState(0);
  console.log(count);
  const router = useRouter();
  const items = [];
  const number = [];
  for (var i = 0; i < count; i++) {
    console.log(i);
    number[i] = i;
    items.push(<QuestionCard countTime={number[i]+2} />);
  }

  return (
    <Fragment>
      <div className="landing">
        <div>
          <img
            className="landing-img"
            alt="landing-img"
            src="../images/edqiz/CREATE-NEW -dqiz!.svg"
          />
          <div className="card">
            <br />
            <br />

            <button
              className="landing-button"
              onClick={() => setCount(count + 1)}
            >
              <img src="../images/edqiz/add.svg" width="80" height="40" />
            </button>
            <button
              className="landing-button1"
              onClick={() => setCount(count - 1)}
            >
              <img src="../images/edqiz/delete.svg" width="80" height="40" />
            </button>

            <QuestionCard  countTime='1'/>
            {props.count}
            {items}

            <br />
          </div>
          <br />
        </div>
      </div>
      <style jsx>
        {`
          .landing-img {
            width: 35vw;
            transition: 0.3s;
            pointer-events: none;
            margin-left: 33vw;
            margin-top: 5vh;
          }
          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
            background: white;
            border-radius: 2vh;
            transition: 0.3s;
            width: 80vw;
            height: 95%;
            // position: absolute;
            margin-left: 10vw;
            margin-top: 3vh;
          }
          .landing-button {
            background: none;
            // position: fixed;
            border-radius: 10vh;
            height: 0vh;
            width: 0vw;
            transition: 0.3s;
            padding: 0.5rem 1.5rem;
            border: none;
            outline: none;
            justify: center;
            align-content: center;
            margin-left: 65vw;
            margin-top: -5vh;
            position: absolute;
          }
          .landing-button:hover {
            cursor: pointer;
            width: 9vw;
            opacity: 0.8;
            transition: 0.25s;
          }
          .landing-button1 {
            background: none;
            // position: fixed;
            border-radius: 10vh;
            height: 0vh;
            width: 0vw;
            transition: 0.3s;
            padding: 0.5rem 1.5rem;
            border: none;
            outline: none;
            justify: center;
            align-content: center;
            margin-left: 69vw;
            margin-top: -5vh;
            position: absolute;
          }
          .landing-button1:hover {
            cursor: pointer;
            width: 9vw;
            opacity: 0.8;
            transition: 0.25s;
          }  .landing {
            justify-content: center;
            width: 100vw;
            height: 100vh;
            // pointer-events: none;
            background-image: url("../images/edqiz/Frame2.svg");
            // background-repeat: no-repeat;

            background-size: cover;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Content;
