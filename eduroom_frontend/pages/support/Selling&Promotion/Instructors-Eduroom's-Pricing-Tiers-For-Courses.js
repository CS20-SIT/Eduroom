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

import InstructorsEduroomsPricingTiersForCourses from '../../../components/support/sellingandpromotion/InstructorsEduroomsPricingTiersForCourses';
import style from "../../../styles/forum/showForum";
import General from "../../../components/template/general";
const whatDoesEduroomdo = () => {
  return <Fragment>
      <General img='/images/supforumbg.svg'>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 auto",
                    justifyContent: "space-between",
                    marginBottom:'80px'
                }}
            >
            <div id="nav">
                    <div className="top">
                    <Link href='/support'>Eduroom Support
                    </Link><label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label><Link href='/support/Selling&Promotion'>Selling & Promotion</Link>
                    <label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label>Instructors: Eduroom’s Pricing Tiers For Courses
                    <InstructorsEduroomsPricingTiersForCourses/>
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
            </General>
  </Fragment>;
};
export default whatDoesEduroomdo;
