import React, { useState, useEffect } from "react";
import ColorLensIcon from "./icons/ColorLensIcon";

export default function changeThemeColorTitle(props) {
  return (
    <div style={{width:'90%'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <p style={{ fontSize: 14,marginLeft:5}}>Change Theme Color</p>
        <ColorLensIcon style={{marginLeft: 'auto',marginRight:5,}}/>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
