import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import SearchChat from "../chat/searchChat";
import ContactPerson from "../chat/contactPerson";
import AddCircleIcon from "./icons/AddCircleIcon";
import style from "../../styles/chat/chat";
import Dialog from "@material-ui/core/Dialog";
import CreateChatRoom from "../chat/createChatRoom";
import NotificationIcon from "./icons/NotificationIcon";
import ChatInvitation from "../chat/chatInvitation";

export default function chatContact(props) {
  const [contact, setContact] = useState(props.contact);
  const [peopleTest, setPeopleTest] = useState('nochat');
  const [openNotification, setOpenNotification] = React.useState(false);
  const [openCreateChat, setOpenCreateChat] = React.useState(false);

  const handleClickOpenNotification = () => {
    setOpenNotification(true);
  };
  const handleCloseNotification = () => {
    setOpenNotification(false);
  };
  const handleClickOpenCreateChat = () => {
    setOpenCreateChat(true);
  };
  const handleCloseCreateChat = () => {
    setOpenCreateChat(false);
  };
  return (
    <>
      <div
        className={peopleTest}
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          position: "relative",
        }}
        onMouseOver={() => {
          setPeopleTest('people');
        }}
        onMouseOut={() => {
          setPeopleTest('nopeople');
        }}
      >
        <NotificationIcon
          style={{
            position: "absolute",
            top: 20,
            right: 10,
            fontSize: 18,
            cursor: "pointer",
          }}
          onClick={handleClickOpenNotification}
        />
        <Dialog disableBackdropClick onClose={handleCloseNotification} open={openNotification}>
          <ChatInvitation handleClose={handleCloseNotification} />
        </Dialog>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            flexDirection: "column",
          }}
        >
          <Avatar
            style={{ width: 60, height: 60 }}
            alt="Krishadawut Olde Monnikhof"
            src=""
          />
          <h4 style={{ textAlign: "center" }}>Krishadawut Olde Monnikhof</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchChat />
            <AddCircleIcon
              style={{ marginLeft: 20, color: "#FB9CCB", cursor: "pointer" }}
              onClick={handleClickOpenCreateChat}
            />
            <Dialog disableBackdropClick onClose={handleCloseCreateChat} open={openCreateChat}>
              <CreateChatRoom handleClose={handleCloseCreateChat} />
            </Dialog>
          </div>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid #dddddd",
              marginLeft: 14,
              marginTop: 30,
            }}
          />
        </div>
        <div style={{ marginLeft: 14 }}>
          <h4 style={{ marginLeft: 14 }}>Chat</h4>
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
          <ContactPerson
            contact={{
              name: "Krishadawut",
              resentMessage: "Hi Tom",
              resentMessageDate: "11/20",
            }}
          />
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </>
  );
}
