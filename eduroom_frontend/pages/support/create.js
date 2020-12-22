import React, { Fragment, useEffect, useState } from "react";
import { Link, Paper,Typography } from "@material-ui/core";
import style from "../../styles/forum/showForum";
import SupportForm from "../../components/support/supportform"
import { useRouter } from "next/router";
import General from "../../components/template/general";

const create = () => {
    const router = useRouter();

    return (
        <Fragment>
            <General>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 auto",
                    justifyContent: "space-between",
                    background: "#EFF0F6",
                }}
            >
                
                <div id="nav">
                    <div className="top">
                    <Link href='/support'><label>Eduroom Support
                    </label></Link><label>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Submit Support Form</label>
                    </div>
                    <SupportForm />
                </div>
                <img alt="background-img" src="/images/supforumbg.svg" className="background-img" />

                <style jsx>{style}</style>
                <style jsx>
                    {`
            .background-img {
              position: fixed;
              bottom: 0;
              width: 100vw;
              z-index: 0;
            }
            #nav {
              width: 100%;
              z-index: 5;
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
            </General>
        </Fragment>
    );
};
export default create;
