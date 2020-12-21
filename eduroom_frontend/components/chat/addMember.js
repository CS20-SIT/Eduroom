import React, { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import GroupAddIcon from './icons/GroupAddIcon';

export default function addMember(props) {
  return (
    <div>
      <div style={{ position: "relative"}}>
        <Input
          value={props.input}
          onChange={e => {
            props.setInput(e.target.value)
          }}
          style={{ paddingRight: 30, width: "100%" }}
          placeholder="Add Member"
        />
        <GroupAddIcon
          style={{
            position: "absolute",
            marginLeft: -25,
            marginTop: 10,
            fontSize: 25,
          }}
        />
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
