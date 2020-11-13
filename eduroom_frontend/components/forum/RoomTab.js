import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";
const RoomTab = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/forum/id");
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
    paper: {
      padding: theme.spacing(4),
      paddingTop: "15%",
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
        <Grid
          item
          xs={2}
          className="button"
          onClick={handleClick}
          variant="outlined"
        >
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: "2px solid #a880f7", borderRadius:'10px' }}
          >
            <div><img src='/images/forum/Math.svg'></img></div>
            <div style={{paddingTop:'6px', fontSize: '0.8em', fontWeight: '600'}}>MATH</div>
            
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: "2px solid #a880f7", borderRadius:'10px' }}
          >
            <div><img src='/images/forum/Science.svg'></img></div>
            <div style={{paddingTop:'6px', fontSize: '0.8em', fontWeight: '600'}}>SCIENCE</div>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: "2px solid #a880f7", borderRadius:'10px' }}
          >
            <div><img src='/images/forum/Language.svg'></img></div>
            <div style={{paddingTop:'6px', fontSize: '0.8em', fontWeight: '600'}}>LANGUAGE</div>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: "2px solid #a880f7", borderRadius:'10px' }}
          >
          <div><img src='/images/forum/Language.svg'></img></div>
          <div style={{paddingTop:'6px', fontSize: '0.8em', fontWeight: '600'}}>ROOM4</div>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: "2px solid #a880f7", borderRadius:'10px' }}
          >
          <div><img src='/images/forum/Language.svg'></img></div>
          <div style={{paddingTop:'6px', fontSize: '0.8em', fontWeight: '600'}}>ROOM5</div>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: "2px solid #a880f7", borderRadius:'10px' }}
          >
          <div><img src='/images/forum/Language.svg'></img></div>
          <div style={{paddingTop:'6px', fontSize: '0.8em', fontWeight: '600'}}>ROOM6</div>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: "2px solid #a880f7", borderRadius:'10px' }}
          >
          <div><img src='/images/forum/Language.svg'></img></div>
          <div style={{paddingTop:'6px', fontSize: '0.8em', fontWeight: '600'}}>ROOM7</div>
          </Paper>
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
            <FormRow style={{ border: "2px solid #d5c1fc" }} />
          </Grid>
        </Grid>
      </div>
      <style jsx>
        {`
          .tab.MuiGrid-item {
            display: flex;
            flex-wrap: nowrap;
          }
          .button {
            cursor: pointer;
            opacity: 0.8;
            transition: 0.25s;
          }
          .roomname{
            paddingTop: 10px;
          }
        `}
      </style>
    </Fragment>
  );
};
export default RoomTab;
