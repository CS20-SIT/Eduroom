import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import api from "../../api";
import Grid from "@material-ui/core/Grid";
import moment from 'moment'

const CommentBlock = ({ row, id, data }) => {
  const [auth, setData] = useState([])
	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('/api/auth/profile')
			console.log(result.data)
			setData(result.data)
		}
		GetData()
		console.log(data)
	}, [])
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart",
      // textAlign: 'center',
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
                      <div className="delete" style={{justifyContent: "space-between"}}>
                      <b>comment {index + 1}</b>
                      {row.userid == auth.userid ? (
                        <i className="fas fa-times"></i>
                      ):null}
                    </div>
                      <p>{row.answer}</p>
                      <div style={{ marginTop: '25px', fontSize: '13px', color: '#5b5b5b' }}>
                      <p>{row.author}  post in {moment(row.posttime).fromNow()}</p>
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
          .delete {
            display: flex;
            justify-congtent: space-between;
          }
        `}
      </style>
    </Fragment>
  );
};
export default CommentBlock;
