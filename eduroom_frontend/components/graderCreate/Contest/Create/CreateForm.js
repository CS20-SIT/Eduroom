import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import axios from "../../../../api";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { compareAsc } from "date-fns";
import { add } from "date-fns";
import { useState, useEffect } from "react";
import {
  contestformTheme,
  contestformStyles,
  sText,
  sTitle,
  sInputfield,
  sInput,
  sInputfieldDesc,
  sInputTime,
  sInputSelect,
  sError,
  sInputfieldSelect,
  sButtionandVisbile,
  sBigTitle,
} from "../../materialUIStyle";
import { contestRules, contestStatuses } from "../../selectOptions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Create() {
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
        handleStartDateChange(prev.starttime);
        handleEndDateChange(prev.endtime);
        setConStatus(prev.status);
      }
    };
    GetData();
  }, []);

  const classes = contestformStyles();
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
        adminid: "12345678-1234-1234-1234-123456789123", //TODO
      };
      if (id == undefined) {
        axios
          .post("/api/grader/ccontest", data)
          .then(function (response) {
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
                ? "Your Contest has been created."
                : "Contest has been edited"}
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
      <MuiThemeProvider theme={contestformTheme}>
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
                    inputProps={{ maxLength: 50000, style: sInputfieldDesc }}
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
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {contestRules.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
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
                  InputLabelProps={{ style: sInputfieldSelect }}
                >
                  {contestStatuses.map((option) => (
                    <MenuItem
                      className={classes.menuitem}
                      key={option.value}
                      value={option.value}
                    >
                      <span style={sInputSelect}> {option.label}</span>
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
                    backgroundColor: "#fb9ccb",
                    marginBottom: 10,
                    color: "white",
                    height: 35,
                    width: 300,
                    fontFamily: "Quicksand , sans-serif",
                    fontSize: "1.2em",
                    fontWeight: "bold",
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
