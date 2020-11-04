import React, { Fragment, useEffect, useState } from "react";
import { Link, Paper,Typography } from "@material-ui/core";
import style from "../../../styles/forum/showForum";
import GetStart from "../../../components/support/gettingstart"
import { useRouter } from "next/router";
import GeneralNonav from "../../../components/template/generalnonav";
import supportbackground from "../../../public/images/supportbackground.png"

const create = () => {
    const router = useRouter();

    return (
        <Fragment>
            <GeneralNonav>
{/* <body style="background-image: url('../../../public/images/supportbackground.png');"> */}
            <div
                style={{
                    display: "flex",
                    flex: "1 1 auto",
                    justifyContent: "space-between",
                    backgroundImage:'url(${supportbackground})'
                }}
            >
            <div id="nav">
                    <div className="top">
                    <Link href='/support'><label>Eduroom Support
                    </label></Link><label>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Getting Started</label>
                    <GetStart/>
                    </div>
                    
                </div>
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
                {/* </body> */}
            </GeneralNonav>
        </Fragment>
    );
};
export default create;
