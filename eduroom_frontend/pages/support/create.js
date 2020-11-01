import React, { Fragment, useEffect, useState } from "react";
import { Link, Paper,Typography } from "@material-ui/core";
import SideNav from "../../components/layouts/sidenav/sidenav";
import style from "../../styles/forum/showForum";
import SupportForm from "../../components/support/supportform"
import { useRouter } from "next/router";

const create = () => {
    const router = useRouter();

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
                <div id="nav">
                    <div className="top">
                    <Link href='/support'><label>Eduroom Support
                    </label></Link><label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submit Support Form</label>
                    </div>
                    <SupportForm />
                </div>
                <main></main>

                <style jsx>{style}</style>
                <style jsx>
                    {`
            #nav {
              width: 100%;
            }
            .form {
              display: flex;
              text-align: center;
            }
            .sub {
              display: flex;
              width: 100%;
              justify-content: center;
            }
            .inner {
              width: 25%;
            }
            .paper {
              margin: 5%;
            }
            .top {

                padding: 50px 70px 0px 70px;
            }
          `}
                </style>
            </div>
        </Fragment>
    );
};
export default create;
