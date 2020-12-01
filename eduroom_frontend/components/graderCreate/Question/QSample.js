import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import axios from "../../../api";
const SampleCard = (props) => {
  const [data, setData] = useState(props.questionSample);
  useEffect(() => {
    if (props.id != undefined) {
      const id = props.id;
      const GetData = async () => {
        const sample = await axios.get("/api/grader/questionsample", {
          params: { id },
        });
        const qSample = sample.data;

        console.log("this is data---------------------------");
        setData(sample.data);

        console.log(qSample);
        console.log("this is data---------------------------");
        console.log(qSample);
        // alert(data);
        props.set(qSample, qSample.length);
      };
      GetData();
    } else {
      setData(props.questionSample);
    }
  }, [props.set]);

  const sInput = {
    fontFamily: "Quicksand , sans-serif",
    color: "#3d467f",
    fontWeight: "bold",
    fontSize: "1em",
  };
  const sInputeHeader = {
    fontFamily: "Quicksand , sans-serif",
    color: "#a880f7",
    fontWeight: "bold",
    fontSize: "1.2em",
    paddingLeft: 28,
  };
  const sInputfieldDesc = {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "1em",
    // paddingTop: 12,
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      // width: "65%",
      // marginLeft: "17%",
      // marginRight: "15%",
      // marginTop: "2.5%",
      // marginBottom: "10%",
    },
    paper: {
      marginBottom: 25,

      height: "600",

      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      // paddingBottom: theme.spacing(1),
      // padding: theme.spacing(3),
      // textAlign: "center",
      color: theme.palette.text.secondary,
    },

    menuitem: {
      "&.Mui-selected": {
        fontFamily: "Quicksand , sans-serif",
        color: "#3d467f",
        fontSize: "1.2em",
        fontWeight: "bold",
      },
    },
    select: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        fontFamily: "Quicksand , sans-serif",
        color: "#3d467f",
        fontSize: "1.2em",
        fontWeight: "bold",
      },
      error1: {
        fontFamily: "Quicksand , sans-serif",
        color: "#5b5b5b",
        fontSize: "1.2em",
      },
    },
  }));
  const classes = useStyles();
  console.log(
    "this is sample card----------------------------------------------"
  );
  console.log(props);

  return props.questionSample.map((r, i) => {
    const checkNew = i === 0;
    console.log(checkNew);
    return (
      <div key={i} className={classes.root}>
        <Paper className={classes.paper}>
          <div style={{ paddingTop: 25 }}></div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            key={r.index}
          >
            <Grid item sm={11}>
              {" "}
              <span style={sInputeHeader}>Example {i + 1}</span>
            </Grid>
            <Grid item sm={1}>
              {" "}
              <span style={{ cursor: "pointer", marginLeft: "100" }}>
                {"\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0" +
                  "\u00A0"}
                {i === 0 ? (
                  <span></span>
                ) : (
                  <i
                    onClick={() => props.delete(r)}
                    className="fa fa-times"
                    aria-hidden="true"
                  ></i>
                )}
              </span>
            </Grid>

            <Grid item sm={6}>
              <Paper elevation={0} className={classes.paper}>
                {" "}
                <TextField
                  name="inputsample"
                  margin="dense"
                  label="Input"
                  type="text"
                  fullWidth
                  defaultValue={r.inputsample}
                  multiline
                  inputProps={{
                    "data-id": i,
                    maxLength: 5000,
                    style: sInputfieldDesc,
                  }}
                  InputLabelProps={{ style: sInput, shrink: true }}
                />
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper elevation={0} className={classes.paper}>
                {" "}
                <TextField
                  name="outputsample"
                  margin="dense"
                  label="Output"
                  type="text"
                  fullWidth
                  defaultValue={r.outputsample}
                  multiline
                  inputProps={{
                    "data-id": i,
                    maxLength: 5000,
                    style: sInputfieldDesc,
                  }}
                  InputLabelProps={{ style: sInput, shrink: true }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  });
  // return props.questionSample.map((val, idx) => {
  //   return (
  //     <div key={idx} className={classes.root}>
  //       <Paper className={classes.paper}>
  //         <div style={{ paddingTop: 25 }}></div>

  //         <Grid
  //           container
  //           direction="row"
  //           justify="center"
  //           alignItems="center"
  //           spacing={2}
  //           key={val.index}
  //         >
  //           <Grid item sm={11}>
  //             {" "}
  //             <span style={sInputeHeader}>Example {idx + 1}</span>
  //           </Grid>
  //           <Grid item sm={1}>
  //             {" "}
  //             <span style={{ cursor: "pointer", marginLeft: "100" }}>
  //               {"\u00A0" +
  //                 "\u00A0" +
  //                 "\u00A0" +
  //                 "\u00A0" +
  //                 "\u00A0" +
  //                 "\u00A0"}
  //               {idx === 0 ? (
  //                 <span></span>
  //               ) : (
  //                 <i
  //                   onClick={() => props.delete(val)}
  //                   className="fa fa-times"
  //                   aria-hidden="true"
  //                 ></i>
  //               )}
  //             </span>
  //           </Grid>

  //           <Grid item sm={6}>
  //             <Paper elevation={0} className={classes.paper}>
  //               {" "}
  //               <TextField
  //                 name="inputSample"
  //                 margin="dense"
  //                 label="Input"
  //                 type="text"
  //                 fullWidth
  //                 multiline
  //                 inputProps={{
  //                   "data-id": idx,
  //                   maxLength: 5000,
  //                   style: sInputfieldDesc,
  //                 }}
  //                 InputLabelProps={{ style: sInput }}
  //               />
  //             </Paper>
  //           </Grid>
  //           <Grid item sm={6}>
  //             <Paper elevation={0} className={classes.paper}>
  //               {" "}
  //               <TextField
  //                 name="outputSample"
  //                 margin="dense"
  //                 label="Output"
  //                 type="text"
  //                 fullWidth
  //                 multiline
  //                 inputProps={{
  //                   "data-id": idx,
  //                   maxLength: 5000,
  //                   style: sInputfieldDesc,
  //                 }}
  //                 InputLabelProps={{ style: sInput }}
  //               />
  //             </Paper>
  //           </Grid>
  //         </Grid>
  //       </Paper>
  //     </div>
  //   );
  // });
};
export default SampleCard;
