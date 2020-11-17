 import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "../../../../api";

const CustomAutocomplete = withStyles({
  input: {
    marginTop: 7,

    color: "#5b5b5b",
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.2em",
  },
  tag: {
    marginTop: 5,
    marginBottom: 7,
    backgroundColor: "white",
    height: 30,
    position: "relative",
    zIndex: 0,
    // border: "2.5px solid #a880f7",
    "& .MuiChip-label": {
      color: "#3d467f",
      fontFamily: "Quicksand , sans-serif",
      width:500,
      fontSize: "1.2em",
      fontWeight: "bold",
    },
    "& .MuiChip-deleteIcon": {
      color: "#FC8FC3",
      height: 15,
      width: 15,
      opacity: 0.8,
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
  const [data,setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
       /// execpet the quesiton that alread;y on thr contest table
        const result = await axios.get("/api/grader/allquestion");
        setData(result.data);
      };
    
    GetData();
    console.log(data);
    // console.log(props.onSuccess);
  }, [
    // props.update
  ]);
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    failed: false,
  });

  const statusClose = () => {
    setSubmitStatus({
      success: false,
      failed: false,
    });

    // props.onSuccess();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // props.onSuccess();
  };

  const handleSubmit = () => {
    axios
      .delete("/api/grader/dquestion", {
        params: {
          id: props.id,
        },
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
    "font-family": "Quicksand , sans-serif",
    "font-size": "1.2em",
    color: "#3d467f",
    "font-weight": "bold",
  };
  const sText = { "font-family": "Quicksand , sans-serif", color: "#5b5b5b" };
  const sInputfield = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
  };
  const sInput = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-weight": "bold",
  };
  const sButtionandVisbile = {
    color: "#3d467f",
    "font-family": "Quicksand , sans-serif",
    "font-weight": "bold",
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
            <CustomAutocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={data}
        getOptionLabel={(option) => option.id+'. '+option.title}
        // defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="limitTags" placeholder="Favorites" />
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
            <span style={sText}> The Question have been deleted.</span>
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
