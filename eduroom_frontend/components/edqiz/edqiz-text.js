import React, { Fragment } from "react";
import style from "../../styles/edqiz/edquizText";
const CreateText = () => {
  return (
    <Fragment >
      <div style={{width:"100vw",display:"flex",justifyContent:"center",fontSize:'4rem'}}>
      <span className="text-title">
        <span className="navy-text">E</span>
        <span className="purple-text">D</span>
        <span className="navy-text">Q</span>
        <span className="pink-text">I</span>
        <span className="navy-text">Z!</span>
      </span>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default CreateText;
