import React, { Fragment, useState, useEffect } from "react";
import GeneralNoSide from "../../components/template/generalnoside";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import { useRouter } from "next/router";
import socketIOClient from "socket.io-client";
import api from '../../api';

const Content = ({ id }) => {
  //mockup data
  const router = useRouter();
  const [kahoot_roomHistory, setHistory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/api/kahoot/roomHistory');
    };
    fetchData();
  }, []);


  const handleSubmit = async (body) => {
    const res = await api.post('/api/kahoot/roomHistory', body);
    console.log(res.data);
  };
  const [player, setPlayer] = useState([]);
  const [pin, setPin] = useState(null);
  let temppin = 0;
  async function randomPin() {
    temppin = await (Math.floor(Math.random() * 10000) + 1000);
    // temppin = "12345";

    let duplicate = true;
    if (kahoot_roomHistory != null) {
      while (duplicate) {
        duplicate = false;
        for (let i = 0; i < kahoot_roomHistory.length; i++) {
          if (kahoot_roomHistory[i].pin == temppin) {
            temppin = (Math.floor(Math.random() * 10000) + 1000);
            duplicate = true;
            break;
          }
        }
        if (duplicate == false) {
          break;
        }
      }
    }
    setPin(temppin);
    console.log('setPin', pin)
  }
  const setRoomOpen = (ppin) => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    socket.emit("set-openRoom", true, ppin);
  };
  const [render, setRender] = useState();


  const response = () => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_KAHOOT_URL, {
      path: "/kahoot",
    });
    const temp = [];
    console.log('pinResponse', pin)

    socket.on("new-name", (namePlayer, pinTemp) => {
      // if(pin!=null){
      console.log(namePlayer, pinTemp, temppin)
      // }
      temp.push([namePlayer, pinTemp]);
      if (temp[temp.length - 1][1] == pin) {
        player.push(temp[temp.length - 1][0]);
        setRender(namePlayer);
      }
    });
  };
  const renderStudent = () => {

    return player.map((el, index) => {
      return (
        <Grid key={index} item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <div >{el}</div>
        </Grid>
      );
    });
  };

  useEffect(() => {
    response();
  }, [pin]);

  useEffect(() => {
    randomPin();
  }, [kahoot_roomHistory]);

  //insert to the database
  console.log('id', id, 'pin:', pin)
  useEffect(() => {
    if (pin != null) {
      const postStatus = { roomid: id.id, pin, isavailable: true }
      console.log(postStatus);
      handleSubmit(postStatus);
    }
  }, [pin])



  return (
    <Fragment>
      <GeneralNoSide>
        <div className="landing">
          <div className="main">
            <br />
            <div className="font">JOIN WITH GAME-PIN</div>
            <br />
            <div className="div">{pin}</div>
            <br />
            <div className="card">
              <br />
              <Grid container>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button className="player">{player.length} players</button>
                </Grid>
                <Grid item xs={4}>
                  <span className="text-title">
                    <span className="navy-text">E</span>
                    <span className="purple-text">D</span>
                    <span className="navy-text">Q</span>
                    <span className="pink-text">I</span>
                    <span className="navy-text">Z!</span>
                  </span>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link href={`/edqiz/gamePlay/${pin}`}>
                    <button
                      className="startButton"
                      onClick={() => setRoomOpen(pin)}
                    >
                      start{">"}
                    </button>
                  </Link>
                </Grid>
              </Grid>
              <br />
              <br />
              <div style={{ color: "#3D467F", fontWeight: 600 }}>
                <Grid container>{renderStudent()}</Grid>
                <br />
              </div>
            </div>
            <br />
          </div>
        </div>
      </GeneralNoSide>
      <style jsx>{`
        .startButton {
          border-radius: 1.2vw;
          width: 13vw;
          height: 5.2vh;
          color: white;
          border: none;
          background-color: #f39ac4;
          font-weight: 600;
          font-size: 1rem;
          outline: none;
        }
        .startButton:hover {
          width: 15vw;
          transition: 0.3s;
          opacity: 0.8;
        }
        .player {
          border-radius: 1.2vw;
          width: 13vw;
          height: 5.2vh;
          color: #a880f7;
          border: 2px solid #a880f7;
          background-color: white;
          font-weight: 600;
          outline: none;

          font-size: 1rem;
        }
        .text-title {
          font-family: "Quicksand", sans-serif;
          display: flex;
          justify-content: center;
          font-size: 3rem;
          font-weight: 600;
        }
        .navy-text {
          color: #3d467f;
        }
        .purple-text {
          color: #a880f7;
        }
        .pink-text {
          color: #f39ac4;
        }
        .main {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .font {
          font-weight: 700;
          color: #3d467f;
          font-size: 2rem;
        }
        .div {
          background-color: #eff0f6;
          height: 10vh;
          width: 15vw;
          border-radius: 1.2vw;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #a880f7;
          font-weight: 600;
          font-size: 2rem;
        }
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 1.2vw;
          //   height: 70vh;
          width: 90vw;
          background-color: white;
          //   display: flex;
          //   justify-content: center;
          font-size: 1.2rem;

          align-content: flex-start;
        }
        .landing {
          justify-content: center;
          width: 100vw;
          height: 100vh;
          background-image: url("/images/edqiz/create-bg.svg");
          background-repeat: no-repeat;
          background-size: cover;
          overflow: auto;
        }
      `}</style>
    </Fragment>
  );
};
export default Content;
