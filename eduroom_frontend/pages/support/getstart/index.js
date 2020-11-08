import React, { Fragment, useEffect, useState } from "react";
import { Link, Paper,Typography } from "@material-ui/core";
import style from "../../../styles/forum/showForum";
import GetStart from "../../../components/support/gettingstart"
import { useRouter } from "next/router";
import GeneralNonav from "../../../components/template/generalnonav";

const create = () => {
    const router = useRouter();

    return (
        <Fragment>
            <GeneralNonav img={'/images/newbg.svg'}>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 auto",
                    justifyContent: "space-between",
                }}
                className="background"
            >
            <div id="nav">
                    <div className="top">
                    <Link href='/support'><label>Eduroom Support
                    </label></Link><label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label><label>Getting Started</label>
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
            </GeneralNonav>
        </Fragment>
    );
};
export default create;
