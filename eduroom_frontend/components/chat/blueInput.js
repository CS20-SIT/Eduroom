import React, { useState, useEffect } from "react";

export default function blueInout(props) {
  const [message, setMesaage] = useState(props.message);
  return (
    <>
      <div style={{ position: "relative", marginLeft: 14,marginTop:20,marginBottom:30}}>
        <input
          className='search'
          style={{ width: "100%",textAlign: 'center',fontSize:16}}
          placeholder="Chat name"
        />
      </div>
      <style jsx>{`
        .search {
          color: #333;
          margin: 0 auto;
          padding: 0.5rem 1.5rem;
          border-radius: 0.2rem;
          background-color: rgb(0,0,0,0.05);
          border: none;
          display: block;
          border-bottom: 0.3rem solid transparent;
          transition: all 0.3s;
        }
        .search:focus {
          outline: none !important;
          border-color: rgb(0,0,0,0.2);
        }
        .search:focus::placeholder {
            opacity: 0;
        }
      `}</style>
    </>
  );
}
