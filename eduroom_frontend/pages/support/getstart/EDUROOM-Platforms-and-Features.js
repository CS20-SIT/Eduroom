import Head from "next/head";
import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  CssBaseline,
  makeStyles,
  Select,
  MenuItem,
  Paper,
  createMuiTheme,
  ThemeProvider,
  Link,
} from "@material-ui/core";
import Studentnav from "../../../components/support/studentsidenav";
import Platformandfeature from '../../../components/support/platformandfeatures';
import style from "../../../styles/forum/showForum";
import GeneralNonav from "../../../components/template/generalnonav";
const courseinstandteaching = () => {
  return <Fragment>
      <GeneralNonav>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 auto",
                    justifyContent: "space-between",
                }}
            >
            <div id="nav">
                    <div className="top">
                    <Link href='/support'><label>Eduroom Support
                    </label></Link><label>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Getting Started</label>
                    <Platformandfeature/>
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
  </Fragment>;
};
export default courseinstandteaching;
