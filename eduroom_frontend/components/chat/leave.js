import React, { useState, useEffect } from "react";
import DirectionsRunIcon from "./icons/DirectionsRunIcon";

export default function leave(props) {
  return (
    <div
      style={{
        width: "90%",
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 10,
        padding: "0 10px 0 10px",
        margin: "10px 0 30px ",
        cursor:'pointer',
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <p style={{ fontSize: 14, marginLeft: 5 }}>Leave</p>
        <DirectionsRunIcon
          style={{ marginLeft: "auto", marginRight: 5,}}
        />
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
