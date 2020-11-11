import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const SampleCard = (props) => {
  const sInput = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-weight": "bold",
    "font-size": "1em",
  };
  const sInputeHeader = {
    "font-family": "Quicksand , sans-serif",
    color: "#a880f7",
    "font-weight": "bold",
    "font-size": "1.2em",
    paddingLeft: 28,
  };
  const sInputfieldDesc = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1em",
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
        "font-family": "Quicksand , sans-serif",
        color: "#3d467f",
        "font-size": "1.2em",
        "font-weight": "bold",
      },
    },
    select: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        fontFamily: "Quicksand , sans-serif",
        color: "#3d467f",
        "font-size": "1.2em",
        "font-weight": "bold",
      },
      error1: {
        "font-family": "Quicksand , sans-serif",
        color: "#5b5b5b",
        "font-size": "1.2em",
      },
    },
  }));
  const classes = useStyles();
  return props.questionSample.map((val, idx) => {
    let inputSample = `inputSample-${idx}`,
      outputSample = `outputSample-${idx}`;

    return (
      <div key={idx} className={classes.root}>
        <Paper className={classes.paper}>
          <div style={{ paddingTop: 25 }}></div>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            key={val.index}
          >
            <Grid item sm={11}>
              {" "}
              <span style={sInputeHeader}>Example {idx + 1} </span>
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
                {idx === 0 ? (
                  <span></span>
                ) : (
                  <i
                    onClick={() => props.delete(val)}
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
                  name="inputSample"
                  margin="dense"
                  id={inputSample}
                  label="Input"
                  type="text"
                  fullWidth
                  multiline
                  inputProps={{
                    "data-id": idx,
                    maxLength: 5000,
                    style: sInputfieldDesc,
                  }}
                  InputLabelProps={{ style: sInput }}
                />
              </Paper>
            </Grid>
            {/* elevation={1} variant="outlined" */}
            <Grid item sm={6}>
              <Paper elevation={0} className={classes.paper}>
                {" "}
                <TextField
                  name="outputSample"
                  margin="dense"
                  id={outputSample}
                  label="Output"
                  type="text"
                  fullWidth
                  multiline
                  inputProps={{
                    "data-id": idx,
                    maxLength: 5000,
                    style: sInputfieldDesc,
                  }}
                  InputLabelProps={{ style: sInput }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  });
};
export default SampleCard;
