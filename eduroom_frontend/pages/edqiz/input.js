import React, { Fragment } from "react";

const Content = (props) => {
  console.log(props);
  return (
    <Fragment>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="RENAME.."
        value={props.name}
        onChange={(e) => props.changeName(e.target.value)}
      />
      <style jsx>{`
        input[type="text"],
        select {
          width: 20vw;
          height: 6vh;
          padding: 1.5%;
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
      `}</style>
    </Fragment>
  );
};
export default Content;
