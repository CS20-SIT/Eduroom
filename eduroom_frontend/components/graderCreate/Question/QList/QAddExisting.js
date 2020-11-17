import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "../../../../api";

const CustomAutocomplete = withStyles({
  input: {
    marginTop: 10,

    color: "#5b5b5b",
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.2em",
  },
  tag: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 7,
    backgroundColor: "white",
    height: 30,
    position: "relative",
    zIndex: 0,
    border: "2.5px solid #a880f7",
    "& .MuiChip-label": {
      color: "#3d467f",
      fontFamily: "Quicksand , sans-serif",
      width: 500,

      fontSize: "1.2em",
      fontWeight: "bold",
    },
    "& .MuiChip-deleteIcon": {
      color: "#FC8FC3",
      height: 22.5,
      width: 22.5,
      opacity: 0.8,
      marginRight: 20,
    },

    //
    "&:after": {
      content: '""',
      right: 10,
      top: 6,
      height: 6,
      width: 6,
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      zIndex: -1,
    },
    // .MuiAutocomplete-inputFocused
  },
})(Autocomplete);

const AnnEdit = (props) => {
  const [data, setData] = useState([]);
  const [addquestion, setAddquestion] = React.useState([]);
  useEffect(() => {
    const GetData = async () => {
      /// execpet the quesiton that alread;y on thr contest table
      const result = await axios.get("/api/grader/addexistingquestion", {
        params: { conno: props.conno },
      });
      setData(result.data);
    };

    GetData();
    console.log(data);
  }, [props.update]);
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    failed: false,
  });

  const statusClose = () => {
    props.onSuccess();
    setSubmitStatus({
      success: false,
      failed: false,
    });
    setAddquestion([]);
    // props.onSuccess();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.onSuccess();
  };

  const handleSubmit = () => {
    let question = addquestion;
    delete question.title;
    axios
      .post("/api/grader/ccontestexistquestion", {
        conno: props.conno,
        questions: question,
      })
      .then(function (response) {
        setOpen(false);
        setTimeout(() => {
          setSubmitStatus({ ...submitStatus, success: true });
        }, 450);
      })
      .catch(function (error) {
        setOpen(false);
        setTimeout(() => {
          setSubmitStatus({ ...submitStatus, failed: true });
        }, 450);
      });
  };

  const sTitle = {
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.2em",
    color: "#3d467f",
    fontWeight: "bold",
  };
  const sText = {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
  };
  const sInputfield = {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
  };
  const sInput = {
    fontFamily: "Quicksand , sans-serif",
    color: "#3d467f",
    fontWeight: "bold",
  };
  const sButtionandVisbile = {
    color: "#3d467f",
    fontFamily: "Quicksand , sans-serif",
    fontWeight: "bold",
  };

  return (
    <span>
      <button
        style={{
          padding: 0,
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        {" "}
        Add Existing
      </button>
      {/* <button
          style={{
            padding: 0,
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(`/admin/grader/question/edit/${props.id}`);
          }}
        >
          {" "}
          <Image src="/images/graderCreate/edit.svg" width="20" height="20" />
        </button> */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {" "}
          <span style={sTitle}>Select your questions</span>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <span style={sText}>
              Select what question you want from the question libary here
            </span>
            <div style={{ height: 25 }}></div>
            <CustomAutocomplete
              multiple
              options={data}
              getOptionLabel={(option) => option.id + ". " + option.title}
              value={addquestion}
              onChange={(event, newValue) => {
                setAddquestion(newValue);
                console.log(addquestion);
                console.log(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Add Question" />
              )}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <span style={sButtionandVisbile}>Cancel</span>
          </Button>
          <Button onClick={handleSubmit} color="primary">
            <span style={sButtionandVisbile}>Confrim</span>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.success} onClose={statusClose}>
        <DialogTitle>
          <span style={sTitle}>Success!</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={sText}>
              {" "}
              The Questions have been added to the contest.
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
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
          <Button onClick={statusClose} color="primary" autoFocus>
            <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
};
export default AnnEdit;
