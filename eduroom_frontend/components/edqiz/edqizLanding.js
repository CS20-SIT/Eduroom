import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import EdqizText from "./edqizText";
import style from "../../styles/edqiz/landing";
const Content = () => {
  
  const [room, setPinRoom] = useState("");
  const router = useRouter();
  
  const mockData = [
    { id: "1", pin: "3456" },
    { id: "2", pin: "1234" },
    { id: "3", pin: "2345" },
    { id: "4", pin: "6789" },
    { id: "4", pin: "6193" },

  ];
  const checkPinIsValid = () => {
    let temp = 0;
    for (let i = 0; i < mockData.length; i++) {
      temp++;
      if (mockData[i].pin === room) {
        console.log(mockData[i].pin == room)  
        router.push(`/edqiz/playPinRoomID/${room}`);
        break;
      } else if ( temp === mockData.length && mockData[i].pin !== room) {
        alert("ROOM IS NOT VALID");
        router.push('/edqiz');
      }
    }
  };
  const pinEnter=(e)=>{
    if(e.key=='Enter'){
      checkPinIsValid();
    }
   
  }
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="col-12">
            <div className="landing-title">
              <EdqizText type="edqiz" />
            </div>
            <div className="row">
              <input
                type="text"
                id="pinroom"
                value={room}
                onChange={(e) => setPinRoom(e.target.value)}
                onKeyDown={(e)=>pinEnter(e)}
                name="firstname"
                placeholder="GAME PIN.."
              
              />
            </div>
            <div className="row">
            
                <button className="landing-button" type="submit"
                 onClick={checkPinIsValid}
                 >
                  <span className="landing-button-text">ENTER</span>
                </button>
          
            </div>
          </div>
        </div>
        <div className="footer">
          <span>
            Do your own at <span className="purple">eduroom.me</span>
          </span>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
