import React, { useState, useEffect } from "react";

export default function colour(props) {
  const [color, setColor] = useState(props.color);
  const [className, setClassName] = useState();
  React.useEffect(() => {
    if(color.active==true){
      setClassName('bgActive')
    }else{
      setClassName('bg')
    }
  }, []);
  return (
    <div style={{display:'inline-block',cursor:'pointer',}}>
      <div id='bg' className={className}>
        <div className="dot" style={{ backgroundColor: color.color1 }} />
        <div className="dot" style={{ backgroundColor: color.color2 }} />
      </div>
      <style jsx>{`
        .dot {
          height: 25px;
          width: 25px;
          border-radius: 50%;
          display: inline-block;
          margin: 3px 3px 0 3px;
        }
        .bg {
          display: inline-block;
          border-radius: 50px;
          padding-left: 4px;
          padding-right: 4px;
        }
        .bg:hover{
          display: inline-block;
          border-radius: 50px;
          background: rgba(255, 222, 238, 0.8);
          padding-left: 4px;
          padding-right: 4px;
        }
        .bgActive{
          display: inline-block;
          border-radius: 50px;
          background: rgba(255, 222, 238, 0.8);
          padding-left: 4px;
          padding-right: 4px;
        }
      `}</style>
    </div>
  );
}
