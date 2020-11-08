import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useRouter} from "next/router";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";
const RoomTab = () => {
  const router = useRouter()
  const handleClick = (e) =>{
    e.preventDefault()
    router.push("/forum/id")
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: 120,
      width: 140,
      backgroundColor: "#eff0f6",
    },
  }));
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2} className='button' onClick={handleClick} variant="outlined">
          <Paper className={classes.paper}>Room1</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Room2</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Room3</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Room4</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Room5</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Room6</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Room7</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid
            container
            item
            xs={12}
            spacing={1}
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            <FormRow />
          </Grid>
        </Grid>
      </div>
      <style jsx>
        {`
          .tab.MuiGrid-item {
            display: flex;
            flex-wrap: nowrap;
          }
          .button{
            cursor: pointer;
            opacity: 0.8;
            transition: 0.25s;
          }
        `}
      </style>
    </Fragment>
  );
};
export default RoomTab;
