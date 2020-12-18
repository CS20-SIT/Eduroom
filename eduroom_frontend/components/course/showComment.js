import React, { Fragment, useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import api from "../../api";
import Grid from "@material-ui/core/Grid";
import moment from 'moment'
import UserContext from '../../contexts/user/userContext'

const showComment = ({ data, handleDelete }) => {
  const userContext = useContext(UserContext);
  const {user} = userContext
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      marginBottom: '10px',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={2} variant="outlined">
          <Grid item xs={12} style={{ marginTop: "5px", marginBottom: "10px" }}>
            <div>
              {data.map((row, index) => {
                return (
                  <Paper className={classes.paper}>
                    <div>
                      {/* <div className="delete" style={{justifyContent: "space-between"}}>
                      <b>comment {index + 1}</b>
                      {user && row.userid == user.userid ? (
                        <i className="fas fa-times" onClick={()=>{handleDelete(row.forumid,row.answerno)}}></i>
                      ):null}
                    </div> */}
                    
                      <p>{row.answer}</p>
                      <p>{row.author}{moment(row.posttime).fromNow()}</p>
                      <div style={{ marginTop: '25px', fontSize: '13px', color: '#000000' }}>
                      
                      </div>
                    </div>
                    
                  </Paper>
                );
              })}
              {/* {boy.map((ee) => {
                return <h1>ee</h1>;
              })} */}
            </div>
          </Grid>
        </Grid>
      </div>
      <style jsx>
        {`
          .comment {
            margin-top: 20px;
          }
          
        `}
      </style>
    </Fragment>
  );
};
export default showComment;
