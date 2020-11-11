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
import General from "../../components/template/general";
import StudentSupport from "../support/studentSupport";
import InstructorSupport from "../support/InstructorSupport";
import create from '../../pages/support/getstart'

const SupportPage = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand",
    },
  });
  const useStyles = makeStyles((theme) => ({
    page: {
      marginTop: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
    },
    head: {
      position: "relative",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
    },
    toppaper: {
      marginTop: theme.spacing(3),
      backgroundColor: "#3D467F",
      height: "400px",
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      backgroundColor: "#3D467F",
      height: "80px",
      backgroundColor: "#a880f7",
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  const ResultsStudent = () => (
    <div id="results" className="search-results">
      Student Result
    </div>
  );
  const ResultsInstructor = () => (
    <div id="results" className="search-results">
      Instuctor Result
    </div>
  );
  const [showResultsStudent, setShowResultsStudent] = useState(false);
  const onClickStudent = () => {
    setShowResultsStudent(true)
    setShowResultsInstructor(false)
  };
  const [showResultsInstructor, setShowResultsInstructor] = useState(false);
  const onClickInstructor = () => {
    setShowResultsInstructor(true)
    setShowResultsStudent(false)
  };
  return (
    <Fragment>
      <General>
      <Head>Help and Support</Head>

          <img src='/images/whatcanwe2.svg' style={{width:'100%'}}></img>
          <div>
          
<Grid container spacing={2}>

<Grid item sm={12}>
            <Grid container 
  justify="center" spacing={4}>
              <Grid item>
            <Button value="Search" onClick={onClickStudent} style={{width: '200px', height: '60px'}}>
              <h2>Student</h2>
            </Button>
            </Grid>
            <Grid item>
            <Button value="Search" onClick={onClickInstructor} style={{width: '200px', height: '60px'}}>
              <h2>Instructor</h2>
            </Button>
            </Grid>
            </Grid>
            {showResultsInstructor ? <InstructorSupport /> : <StudentSupport />}
            </Grid>
            <Link href='/support/create'>
            <Button variant="outlined">
              Contact us
            </Button>
            </Link>
            </Grid>
          </div>
        </General>
      </Fragment>
    );
  };

  export default SupportPage;
