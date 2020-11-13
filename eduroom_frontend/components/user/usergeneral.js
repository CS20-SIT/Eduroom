import React,{Fragment,useState,useEffect} from 'react';

import Image from 'next/image'

import Header from '../layouts/header'
import SideNav from '../layouts/sidenav/sidenav'
const UserGeneral = (props) => {
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                    
                    Profile
                    <Image src="/images/graderSubmit/profile.svg" width="50" height="50"/>
                </div>

                <main>{props.children}</main>
                {props.img ? (
                <img
                    alt="background-img"
                    src={props.img}
                    className="background-img"
                />
                ) : null}
            </div>
        </div>
      <style jsx>
        {`
          #content {
            width: 95%;
            left: 5%;
            z-index: 20;
          }
          .background-img {
            position: absolute;
            bottom: 0;
            width: 100vw;
            z-index: 5;
          }
        `}
      </style>
        </Fragment>
    )
}
export default UserGeneral