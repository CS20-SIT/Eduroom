import React, { Fragment, useEffect, useState } from "react";
import {
  Grid,
  Button,
  Container,
  Typography,
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  Select,
  Paper,
  MenuItem,
} from "@material-ui/core";
import style from '../../styles/forum/showForum';
import GeneralNoNav from "../../components/template/generalnonav";
const IdBlock = () => {
    const useStyles = makeStyles((theme) => ({
        page: {
          display: "flex",
          flexDirection: "column",
        },
        form: {
          width: "100%",
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
          background: "#3D467F",
        },
        paper: {
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
          padding: theme.spacing(2),
          [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
          },
        },
      }));
      const classes = useStyles();
    
      return (
        <Fragment>
            <GeneralNoNav >
        <div
            style={{
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "space-between",
            background: "#EFF0F6",
            }}
        ></div>
        <div className='idblock'>
            <div className={classes.root}  className='button' >
                <Grid container spacing={3} variant="outlined">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Forum</Paper>
                    </Grid>
                </Grid>
                </div>
            <style jsx>{style}</style>
            <style jsx> 
            {`
            .button{
            cursor: pointer;
            opacity: 0.8;
            transition: 0.25s;
            }
            `}
            </style>
            </div>
      </GeneralNoNav>
     </Fragment>)
};
export default IdBlock