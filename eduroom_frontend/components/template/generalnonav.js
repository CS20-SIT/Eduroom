import React, { Fragment } from "react";
import Header from "../layouts/header";
import SideNav from "../layouts/sidenav/sidenav";
const GeneralNonav = (props) => {
  return (
    <Fragment>
      <Header />
      <div
      >
        <SideNav />
        <div id="content">
          <main>{props.children}</main>
        </div>
      </div>
      <style jsx>
        {`
          #content {
            width: 95%;
            left: 5%;
            top: 0;
            z-index: 20;
            height: 100vh;
            overflow-y: auto;
            position: fixed;
            background: #F4F5F7,
          }
        `}
      </style>
    </Fragment>
  );
};
export default GeneralNonav;
