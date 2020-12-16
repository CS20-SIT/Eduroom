import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "../../styles/edqiz/landing";
import socketIOClient from "socket.io-client";
import api from '../../api';
const Page1 = ({ goto, mockData, change, name }) => {
  const router = useRouter();


  const [sessionid, setSesstionID] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let pin = router.query.room
      const res = await api.get(`/api/kahoot/sessionid/${pin}`);
      console.log('resdata', res.data)
      setSesstionID(res.data)

    };
    fetchData();
  }, []);

  const handlePlayere = async (body) => {
    const nameforplay = { nameforplay: body }
    console.log(nameforplay, 'nameforplay')
    const res = await api.post('/api/kahoot/player', nameforplay);
    const sessionTemp = sessionid
    console.log(sessionTemp, 'sesstionIDTemp')
    const resSession = await api.post('/api/kahoot/roomHistoryplayerFirstTime', sessionTemp);
    console.log(resSession, 'session success')

  };
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
              FILL IN YOUR NAME
            </div>
            <div className="row">
              <input
                type="text"
                id="fname"
                name="firstname"
                onChange={(e) => change(e.target.value)}

                // {seeName()}
                placeholder="fill in your name . ."
              />
            </div>
            <div className="row">
              <button
                className="landing-button"
                onClick={() => { goto(2); handlePlayere(name); }}
              >

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
