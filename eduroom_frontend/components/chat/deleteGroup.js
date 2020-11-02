import React, { useState, useEffect } from "react";

export default function deleteGroup(props) {
  return (
    <div
      style={{
        margin: "auto 0 50px",
        cursor:'pointer',
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 50,
          borderStyle: "solid",
          borderWidth: 4,
          borderColor: "#BD8B97",
          padding: "0 50px 0 50px",
        }}
      >
        <span style={{ fontSize: 18, marginLeft: 5, color: "#BD8B97",fontWeight:'bold',padding: "10px 0 10px 0",}}>Delete</span>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
