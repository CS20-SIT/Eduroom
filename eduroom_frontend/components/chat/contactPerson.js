import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";

export default function chatContact(props) {
  const [contact, setContact] = useState(props.contact);
  return (
    <div>
      <div className="chatBox">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar alt={contact.name} src="" style={{ margin: 15 }} />
          <div>
            <h5 style={{ display: "inline" }}>{contact.name}</h5>
            <br />
            <span style={{ fontSize: 12 }}>{contact.resentMessage}</span>
          </div>
        </div>
        <div
          style={{
            textAlign: "right",
            width: "100%",
            paddingRight: 20,
          }}
        >
          <p style={{ fontSize: 12 }}>{contact.resentMessageDate}</p>
        </div>
      </div>
      <style jsx>{`
        .chatBox {
          display: flex;
          cursor: pointer;
        }
        .chatBox:hover {
          display: flex;
          cursor: pointer;
          background-color: rgba(213, 193, 252, 0.1);
        }
      `}</style>
    </div>
  );
}
