import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import style from "../../styles/edqiz/landing";
import CircularProgress from "@material-ui/core/CircularProgress";


const Page2 = ({ name }) => {
  const nameUpperCase = name.toUpperCase();
  const router = useRouter();

  let room = router.query.room;


 
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
              HELLO {nameUpperCase}
            </div>
            <div
              style={{
                fontSize: "2rem",
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
              WAITING FOR ANOTHER PLAYERS
            </div>
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: 550,
                color: "#3D467F",
                display: "flex",
                justifyContent: "center",
                padding: "30px",
              }}
            >
              <CircularProgress />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Page2;
