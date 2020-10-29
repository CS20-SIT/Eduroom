import React, { Fragment, useEffect, useState } from "react";
import api from "../../api";
import { Container, Button } from "@material-ui/core";
import Link from "next/link";
import SideNav from "../../components/layouts/sidenav/sidenav";
import NavForum from "../../components/forum/searchForum";
import style from '../../styles/forum/showForum';
const Forum = () => {
  //   const [forum, setForum] = useState([]);
  //   useEffect(() => {
  //     queryData();
  //   }, []);
  //   const queryData = () => {
  //     api.get("/api/forum").then((res) => {
  //       setForum(res.data.data);
  //     });
  //   };
  //   const [create, setCreate] = useState();
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "space-between",
          background: "#EFF0F6",
        }}
      >
          <SideNav />
          
        <div id = 'nav'>
          <NavForum />
          <div className = 'content'>
          <strong className='topic'>CHOOSE ROOM</strong>
          </div>
        </div>
        <style jsx>{style}</style>
        <style jsx>
        {`
          #nav {
            width: 100%;
          }
          .background-img {
            position: absolute;
            bottom: 0;
            width: 100vw;
          }
        `}
      </style>
     </div>
    </Fragment>
  );
};
export default Forum;
