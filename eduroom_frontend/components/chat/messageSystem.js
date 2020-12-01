import React, { useState, useEffect } from "react";

export default function messageSystem(props) {
  const [message, setMesaage] = useState(props.message);
  return (
      <div
        style={{
          textAlign: "center",
          width: "100%",
          color: "#858585",
        }}
      >
        <p style={{ fontSize: 18 }}>{message.text}</p>
      </div>
  );
}
