import React, { Fragment } from 'react'
import Navbar from '../layouts/navbar'
import Header from '../layouts/header'
import SideNav from '../layouts/sidenav/sidenav'
const General = (props) => {
  return (
    <Fragment>
      <Header />
      <div
        style={{
          display: 'flex',
          flex: '1 1 auto',
          justifyContent: 'space-between',
          background: '#F4F5F7'
        }}
      >
        <SideNav />
        <div id="content">
          <Navbar />
          <main>{props.children}</main>
        </div>
        {props.img ? (
          <img
            alt="background-img"
            src={props.img}
            className="background-img"
          ></img>
        ) : null}
      </div>
      <style jsx>
        {`
          #content {
            width: 84%;
          }
          .background-img {
            position: absolute;
            bottom: 0;
            width: 100vw;
          }
        `}
      </style>
    </Fragment>
  )
}
export default General
