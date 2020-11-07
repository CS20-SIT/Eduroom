import React, { Fragment, useEffect, useState } from "react";
import { Link, Paper,Typography } from "@material-ui/core";
import SideNav from "../../components/layouts/sidenav/sidenav";
import style from "../../styles/forum/showForum";
import SupportPage from "../../components/support/supportPage"
import { useRouter } from "next/router";
import GeneralNonav from "../../components/template/generalnonav";

const Support = () => {
    const router = useRouter();

    return (
        <Fragment>
          <GeneralNonav>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 auto",
                    justifyContent: "space-between",
                    background: "#EFF0F6",
                }}
            >
                <div id="nav">
                    <SupportPage />
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
            </GeneralNonav>
        </Fragment>
    );
};
export default Support;



  /* <Link href='/support/create'>
<Button variant="outlined" color="primary">Contact Us</Button>
</Link> */

