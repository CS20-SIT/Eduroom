import React, { Fragment, useEffect, useState } from "react";
import api from "../../api";
import { Container, Button } from "@material-ui/core";
import Link from "next/link";
import SideNav from "../../components/layouts/sidenav/sidenav";
import NavForum from "../../components/forum/searchForum";
import style from '../../styles/forum/showForum';
import GeneralNoNav from "../../components/template/generalnonav";
import RoomTab from "../../components/forum/RoomTab";
import ForumBlock from "../../components/forum/forumBlock";

const Forum = () => {
    const [forum, setForum] = useState([]);
    
  return (
    <Fragment>
      <GeneralNoNav >
      <div
        style={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "space-between",
          background: "#EFF0F6",
        }}
      >
        <div id="nav">
          <NavForum />
          <div className="content">
            <strong className="topic">CHOOSE ROOM</strong>
          </div>
          <div className="roomtab">
          <RoomTab />
          </div>
          <div className="forumblock">
            <ForumBlock />
          </div>
        </div>

        <style jsx>{style}</style>
        <style jsx>
        {`
          #nav {
            width: 100%;
            height: 100%;
          }
          .background-img {
            position: absolute;
            bottom: 0;
            width: 100%;
          }
        `}
      </style>
      </div>
      </GeneralNoNav>
    </Fragment>
  );
};
export default Forum;
