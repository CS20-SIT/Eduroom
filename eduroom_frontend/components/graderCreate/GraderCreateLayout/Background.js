import React, { Fragment } from "react";

const Background = () => {
  return (
    <Fragment>
      <div>
        <img
          alt="background-img"
          src="/images/graderCreate/smallClock.svg"
          className="small"
        />
        <img
          alt="background-img"
          src="/images/graderCreate/mediumClock.svg"
          className="medium"
        />
        <img
          alt="background-img"
          src="/images/graderCreate/bigClock.svg"
          className="big"
        />
      </div>

      <style jsx>{`
        .small {
          position: absolute;
          /* left: 50; */
          right: 300px;
          top: 160px;
          width: 4vw;
          z-index: -1;
        }
        .medium {
          position: absolute;
          left: 200px;
          top: 360px;
          width: 10vw;
          z-index: -1;
        }
        .big {
          position: absolute;
          right: 190px;
          bottom: -180px;
          width: 18vw;
          z-index: -1;
        }
      `}</style>
    </Fragment>
  );
};
export default Background;
