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
  Link
} from "@material-ui/core";
import GeneralNoNav from "../../components/template/generalnonav";

const InstructorSupport = () => {
  const useStyles = makeStyles((theme) => ({
    typo: {
      marginTop: theme.spacing(7),
      marginLeft: theme.spacing(21),
      marginBottom: theme.spacing(6),
    },
  }));

  const classes = useStyles();
  return (
    <Fragment>

      <Grid container spacing={7} justify="center">
        <Grid item>
          <Paper
            style={{
              width: "260px",
              height: "220px",
              backgroundColor: "#eff0f6",
            }}
            elevation={3}
          ><Link href="/support/Instructor-Payment">
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                <img src="/images/instructorpayments.svg"
											style={{ height: '120px'}} />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Instructor Payments
                </Grid>
              </Grid>
            </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            style={{
              width: "260px",
              height: "220px",
              backgroundColor: "#eff0f6",
            }}
            elevation={3}
          >
            <Link href="/support/Selling&Promotion">
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                <img src="/images/sellingandpromotion.svg"
											style={{ height: '120px'}} />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Selling & Promotion
                </Grid>
              </Grid>
            </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            style={{
              width: "260px",
              height: "220px",
              backgroundColor: "#eff0f6",
            }}
            elevation={3}
          >
            <Link href="/support/Quality-Standards">
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                <img src="/images/qualitystandards.svg"
											style={{ height: '120px'}} />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Quality Standards
                </Grid>
              </Grid>
            </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={7} justify="center">
        <Grid item>
          <Paper
            style={{
              width: "260px",
              height: "220px",
              backgroundColor: "#eff0f6",
            }}
            elevation={3}
          >
            <Link href="/support/Course-Building">
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                <img src="/images/coursebuilding.svg"
											style={{ height: '120px'}} />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Course Building
                </Grid>
              </Grid>
            </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            style={{
              width: "260px",
              height: "220px",
              backgroundColor: "#eff0f6",
            }}
            elevation={3}
          >
            <Link href="/support/Course-Management">
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                <img src="/images/coursemanagement.svg"
											style={{ height: '120px'}} />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Course Management
                </Grid>
              </Grid>
            </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            style={{
              width: "260px",
              height: "220px",
              backgroundColor: "#eff0f6",
            }}
            elevation={3}
          >
            <Link href="/support/Trust&Safety">
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                <img src="/images/trustandsafety.svg"
											style={{ height: '120px'}} />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Trust & Safety
                </Grid>
              </Grid>
            </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default InstructorSupport;
