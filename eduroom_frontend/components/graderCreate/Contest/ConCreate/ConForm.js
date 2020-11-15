import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useRouter } from "next/router";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { parseJSON, compareAsc } from "date-fns";

import { add } from "date-fns";
import Chip from "@material-ui/core/Chip";
import { useState, useEffect } from "react";
import axios from "../../../../api";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const theme1 = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "rgba(0, 0, 0, 0.0)",
        },
      },
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "52.5%",
    marginLeft: "22.5%",
    marginRight: "15%",
    marginTop: "2.5%",
    paddingBottom: "10%",
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    // padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(4),

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
export default function FullWidthGrid() {
  const router = useRouter();
  const id = router.query.conno;

  useEffect(() => {
    const GetData = async () => {
      if (id != undefined) {
        const oldData = await axios.get("/api/grader/contest", {
          params: { id },
        });
        const prev = oldData.data[0];
        setTitle(prev.title);
        setRule(prev.conruletype);
        setDescription(prev.description);

        const oldEndTime = parseJSON(prev.endtime);
        handleStartDateChange(prev.starttime);

        handleEndDateChange(prev.endtime);
        setConStatus(prev.status);
      }
    };
    GetData();
  }, []);
  const sTitle = {
    "font-family": "Quicksand , sans-serif",
    "font-size": "1.2em",
    color: "#3d467f",
    "font-weight": "bold",
  };
  const sText = { "font-family": "Quicksand , sans-serif", color: "#5b5b5b" };
  const sInputfield = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1.2em",
  };
  const sInput = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-weight": "bold",
    "font-size": "1.2em",
  };
  const sInputfieldDesc = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1.2em",
    paddingTop: 12,
  };
  const sInputTime = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-size": "1.5em",
    "font-weight": "bold",
  };
  const sInputSelect = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
    "font-size": "1.0em",
  };
  const sError = {
    "font-family": "Quicksand , sans-serif",
    color: "white",
    "font-size": "1em",
  };
  const sInputfieldSelect = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-size": "1.1em",
    "font-weight": "bold",
  };
  const sButtionandVisbile = {
    color: "#3d467f",
    "font-family": "Quicksand , sans-serif",
    "font-weight": "bold",
  };
  const sInputfieldTime = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-size": "1.2em",
  };
  const sBigTitle = {
    fontFamily: "Quicksand , sans-serif",
    "font-size": "2em",
    color: "#3d467f",
    fontWeight: "bold",
  };

  const rules = [
    {
      value: "oi",
      label: "OI",
    },
    {
      value: "acm",
      label: "ACM",
    },
  ];
  const conStatusS = [
    {
      value: true,
      label: "ON",
    },
    {
      value: false,
      label: "OFF",
    },
  ];

  const classes = useStyles();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [rule, setRule] = React.useState("oi");
  const [conStatus, setConStatus] = React.useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    failed: false,
  });
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(
    add(new Date(), { days: 1 })
  );
  const [check, setCheck] = useState(false);
  const [erorvalid, seterorValid] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    seterorValid(false);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
    setCheck(true);
  };
  const handleDesc = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeRule = (event) => {
    setRule(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setConStatus(event.target.value);
    console.log(compareAsc(selectedStartDate, selectedEndDate) != -1);
  };
  const handleSubmit = () => {
    if (
      title == "" ||
      compareAsc(Date.parse(selectedStartDate), Date.parse(selectedEndDate)) !=
        -1
    ) {
      seterorValid(true);
    } else {
      let data = {
        title: title,
        conRuleType: rule,
        description: description,
        startTime: selectedStartDate,
        endTime: selectedEndDate,
        status: conStatus,
        adminid: "12345678-1234-1234-1234-123456789123",
      };
      if (id == undefined) {
        axios
          .post("/api/grader/ccontest", data)
          .then(function (response) {
            console.log(response);
            setTimeout(() => {
              setSubmitStatus({ ...submitStatus, success: true });
            }, 450);
          })
          .catch(function (error) {
            setTimeout(() => {
              setSubmitStatus({ ...submitStatus, failed: true });
            }, 450);
          });
      } else {
        data.conno = id;
        axios
          .put("/api/grader/econtest", data)
          .then(function (response) {
            console.log(response);
            setTimeout(() => {
              setSubmitStatus({ ...submitStatus, success: true });
            }, 450);
          })
          .catch(function (error) {
            setTimeout(() => {
              setSubmitStatus({ ...submitStatus, failed: true });
            }, 450);
          });
      }
    }
  };

  const statusClose = () => {
    setSubmitStatus({
      success: false,
      failed: false,
    });
  };
  return (
    <div className={classes.root}>
      <Dialog open={submitStatus.success} onClose={statusClose}>
        <DialogTitle>
          <span style={sTitle}>Success!</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={sText}>
              {" "}
              {id == undefined
                ? "Your Contest have been created."
                : "Contest have been Edited"}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => router.back()}>
            <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.failed} onClose={statusClose}>
        <DialogTitle>
          <span style={sTitle}>Opps.... Something went wrong!</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={sText}> Come back again later...</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary">
            <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>
      <MuiThemeProvider theme={theme1}>
        <Snackbar
          open={erorvalid}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert style={sError} onClose={handleClose} severity="error">
            Invalid Information detected, Please Review your submission !
          </Alert>
        </Snackbar>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <span style={sBigTitle}>
              <span onClick={() => router.back()}>
                <i
                  style={{ cursor: "pointer" }}
                  className="fa fa-arrow-left"
                  aria-hidden="true"
                ></i>
              </span>
              {id != undefined ? " Edit Contest" : " Create your Contest"}{" "}
              {"\u00A0" + "\u00A0" + "\u00A0" + "\u00A0"}
            </span>{" "}
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              <Paper className={classes.paper}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Title"
                  type="text"
                  fullWidth
                  value={title}
                  onChange={handleTitle}
                  required
                  inputProps={{ maxLength: 50, style: sInputfield }}
                  InputLabelProps={{ style: sInput }}
                  error={title == "" && check}
                  helperText={title == "" && check ? "Title is Empty!" : ""}
                />
              </Paper>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              {" "}
              <div>
                {" "}
                <Paper className={classes.paper}>
                  <TextField
                    autoFocus
                    multiline
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    fullWidth
                    rows={15}
                    value={description}
                    onChange={handleDesc}
                    required
                    inputProps={{ maxLength: 1000, style: sInputfieldDesc }}
                    InputLabelProps={{ style: sInput }}
                  />
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Paper className={classes.paper2}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  {id == undefined ? (
                    <KeyboardDateTimePicker
                      variant="inline"
                      ampm={false}
                      label="Start"
                      value={selectedStartDate}
                      onChange={handleStartDateChange}
                      onError={console.log}
                      disablePast
                      required
                      fullWidth
                      format="dd-MMM-yyyy 'AT' HH:mm"
                      error={
                        compareAsc(selectedStartDate, selectedEndDate) != -1 &&
                        check
                      }
                      helperText={
                        compareAsc(selectedStartDate, selectedEndDate) != -1 &&
                        check
                          ? "Invaild Date!"
                          : ""
                      }
                      inputProps={{ style: sInputfieldDesc }}
                      InputLabelProps={{ style: sInputTime }}
                    />
                  ) : (
                    <KeyboardDateTimePicker
                      variant="inline"
                      ampm={false}
                      label="Start"
                      value={selectedStartDate}
                      onChange={handleStartDateChange}
                      onError={console.log}
                      required
                      fullWidth
                      format="dd-MMM-yyyy 'AT' HH:mm"
                      error={
                        compareAsc(selectedStartDate, selectedEndDate) != -1 &&
                        check
                      }
                      helperText={
                        compareAsc(selectedStartDate, selectedEndDate) != -1 &&
                        check
                          ? "Invaild Date!"
                          : ""
                      }
                      inputProps={{ style: sInputfieldDesc }}
                      InputLabelProps={{ style: sInputTime }}
                    />
                  )}
                </MuiPickersUtilsProvider>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Paper className={classes.paper2}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDateTimePicker
                    variant="inline"
                    ampm={false}
                    label="End"
                    value={selectedEndDate}
                    onChange={handleEndDateChange}
                    onError={console.log}
                    disablePast
                    required
                    fullWidth
                    format="dd-MMM-yyyy 'AT' HH:mm"
                    error={
                      compareAsc(selectedStartDate, selectedEndDate) != -1 &&
                      check
                    }
                    helperText={
                      compareAsc(selectedStartDate, selectedEndDate) != -1 &&
                      check
                        ? "Invaild Date!"
                        : ""
                    }
                    inputProps={{ style: sInputfieldDesc }}
                    InputLabelProps={{ style: sInputTime }}
                  />
                </MuiPickersUtilsProvider>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>
              <div>
                <TextField
                  fullWidth
                  select
                  required
                  label="Contest Rule Type"
                  value={rule}
                  onChange={handleChangeRule}
                  // inputProps={{style:sInputfieldSelect }}
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {rules.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
                      {/* <span style={{sInputTime}}> {option.label}</span> */}
                    </MenuItem>
                  ))}
                </TextField>
              </div>{" "}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>
              <div>
                <TextField
                  fullWidth
                  select
                  required
                  label="Status"
                  value={conStatus}
                  onChange={handleChangeStatus}
                  // inputProps={{style:sInputfieldSelect }}
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {conStatusS.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
                      {/* <span style={{sInputTime}}> {option.label}</span> */}
                    </MenuItem>
                  ))}
                </TextField>
              </div>{" "}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: 20 }}></div>
          </Grid>
          <Grid item xs={12}>
            <center>
              <div>
                {" "}
                <Chip
                  label=" Create"
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "#FC8FC3",
                    marginBottom: 10,
                    color: "white",
                    height: 35,
                    width: 300,
                    "font-family": "Quicksand , sans-serif",
                    "font-size": "1.2em",
                    "font-weight": "bold",
                  }}
                />
              </div>
            </center>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
