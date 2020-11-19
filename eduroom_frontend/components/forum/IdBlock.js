import React, { Fragment } from "react";
import Icon from "./Icon";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { EditorBorderColor } from "material-ui/svg-icons";
import api from "../../api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from 'moment'

const IdBlock = () => {
  const [data, setData] = useState([]);
  const [auth, setAuth] = useState([])
	useEffect(() => {
		const GetAuth = async () => {
			const result = await api.get('/api/auth/profile')
			console.log(result.data)
			setAuth(result.data)
		}
		GetAuth()
		console.log(auth)
	}, [])
  const param = useRouter().query.id || "";
  useEffect(() => {
    const GetData = async () => {
      if (param != "") {
        const result = await api.get(`/api/forum/${param}`);
        console.log(result.data.data.forum);
        setData(result.data.data.forum);
      }
    };
    GetData();
    console.log(data);
  }, [param]);
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
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3} variant="outlined">
          <Grid item xs={12} borderColor="#a27cef">
            <div>
              {data.map((row) => {
                return (
                  <Paper
                    className={classes.paper}
                    style={{ border: "2px solid #d5c1fc" }}
                  >
                    <div style={{fontSize:"25px",marginBottom: "20px",color:"#5B5B5B",display:"flex", justifyContent:"space-between"}}>
                      <b>{row.titlethread}</b>
                    {row.userid == auth.userid ? (
                        <i className="fas fa-pen" style={{size:"2px"}}></i>
                      ):null}
                    </div>
                    <div>{row.content}</div>
                    <div style={{ marginTop: '25px', fontSize: '13px', color: '#5b5b5b' }}>
                      <p>  post in {moment(row.posttime).fromNow()}</p>
                      </div>
                    <div
                      className="icon"
                      style={{ bottom: 0, right: 0, marginTop: "15px" }}
                    >
                      <div style={{ paddingRight: "30px" }}>
                        <Icon type="like" />
                      </div>
                      <div style={{ paddingRight: "30px" }}>
                        <Icon type="comment" />
                      </div>
                    </div>
                  </Paper>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
      <style jsx>
        {`
          .button {
            cursor: pointer;
            opacity: 0.8;
            transition: 0.25s;
            display: flex;
            justify-content: end;
            flex-direction: row;
            align-items: flex-end;
          }
          .icon {
            display: flex;
            justify-content: end;
            flex-direction: row;
            align-items: flex-end;
          }
        `}
      </style>
    </Fragment>
  );
};
export default IdBlock;
