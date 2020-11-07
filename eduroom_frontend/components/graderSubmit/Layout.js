import React, { Fragment } from "react"
import GraderNavbar from "./GraderNav"
import SideNav from "../layouts/sidenav/sidenav"

const Layout = (props) => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "space-between",
          background: "#F4F5F7",
        }}
      >
        <SideNav />
        <div id="content">
          <GraderNavbar page={props.page} />
          <main className="main">{props.children}</main>
        </div>
        {props.img ? (
          <img
            alt="background-img"
            src={props.img}
            className="background-img"
          />
        ) : null}
      </div>

      <style jsx>
        {`
          #content {
            width: 95%;
            position: fixed;
            left: 5%;
            z-index: 20;
          }
          .background-img {
            position: absolute;
            bottom: 0;
            width: 100vw;
            z-index: 5;
          }
          main {
            height: 100vh;
          }
        `}
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
      </style>
    </Fragment>
  )
}
export default Layout
