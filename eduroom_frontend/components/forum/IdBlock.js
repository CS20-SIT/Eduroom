import React, { Fragment } from "react";
import Icon from "./Icon";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { EditorBorderColor } from "material-ui/svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const IdBlock = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const result = await axios.get("http://localhost:5000/api/forum/id", {
        id: props.id,});
      console.log(result.data);
      setData(result.data);
    };
    GetData();
    console.log(data);
  }, []);
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
                    <div>{row.titlethread}</div>
                    <div>{row.content}</div>
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
