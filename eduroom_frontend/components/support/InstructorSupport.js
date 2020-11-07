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
      <Typography className={classes.typo}>
        <h2>Select a topic to search for help</h2>
      </Typography>
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
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/584/584093.svg"
                    style={{ height: "80px" }}
                  />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Instructor Payments
                </Grid>
              </Grid>
            </Button>
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
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1260/1260103.svg"
                    style={{ height: "80px" }}
                  />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Selling & Promotion
                </Grid>
              </Grid>
            </Button>
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
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/3685/3685014.svg"
                    style={{ height: "80px" }}
                  />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Quality Standards
                </Grid>
              </Grid>
            </Button>
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
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/2904/2904859.svg"
                    style={{ height: "80px" }}
                  />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Course Building
                </Grid>
              </Grid>
            </Button>
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
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/3063/3063493.svg"
                    style={{ height: "80px" }}
                  />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Course Management
                </Grid>
              </Grid>
            </Button>
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
            <Button
              style={{ width: "260px", height: "220px" }}
              variant="outlined"
            >
              <Grid container sm={12}>
                <Grid item sm={12}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/884/884553.svg"
                    style={{ height: "80px" }}
                  />
                  <br></br>
                </Grid>
                <Grid item sm={12}>
                  Trust & Safety
                </Grid>
              </Grid>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default InstructorSupport;
