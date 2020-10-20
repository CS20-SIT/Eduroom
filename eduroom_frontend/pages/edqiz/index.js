import React, { Fragment } from "react";
import { useRouter } from "next/router";



const Content = () => {
  const router = useRouter();
  
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
        <img
          className="landing-img"
          alt="landing-img"
          src="images/edqiz/edqiz!.svg"
        />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="GAME PIN.."
          /><br/><br/>

          <button
            className="landing-button"
            onClick={() => router.push("/login")}
          >
            <a className="landing-button-text">ENTER</a>
            <br />
          </button>

         
        </div>

     
      </div>
      <style jsx>
        {`
          .bg-img {
            width: 100vw;
            // height:100%;
            display: flex;
            justify-content: flex-end;
            position: absolute;
            pointer-events: none;
            cursor: default;
          }

          .landing-img {
            width: 25%;
            margin-left:44vw;
            margin-top:35vh;
            position:absolute;


          }
          .landing{
            width:100vw;
            height:100vh;
            background-image: url("images/edqiz/bg.svg");
            background-repeat: no-repeat;
            background-size: cover;
            

          }
          .landing-content {
            position: absolute;
           
            font-family: "Quicksand", sans-serif;
          }
        

          .landing-button {
            background: #3d467f;
            position: fixed;
            border-radius: 10vh;
            height: 6vh;
            width: 20vw;
            padding: 0.5rem 1.5rem;
            border: none;
            outline: none;
            justify: center;
            align-content: center;
            margin-left: 42vw;
   
          }
          .landing-button:hover {
            cursor: pointer;
            opacity: 0.8;
            transition: 0.25s;
          }
          .landing-button-text {
            color: white;
            font-weight: 700;
            font-size: 2vh;
            font-family: "Quicksand", sans-serif;
          }
          
          input[type="text"],
          select {
            width: 20vw;
            padding: 1.5vh 1vh;
            margin-left: 42vw;
            color: #6e5a5c;
            font-weight: 700;
            font-size: 2vh;
            text-align: center;
            margin-top: 50vh;
          
            display: inline-block;
            border: 0.3vh solid #a6ceee;
            border-radius: 5vh;
            box-sizing: border-box;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Content;
