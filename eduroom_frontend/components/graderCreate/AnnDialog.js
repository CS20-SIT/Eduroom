import React, { Fragment, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import style from "../../styles/graderCreate/CreateAnnouncement";
import Divider from "@material-ui/core/Divider";
import axios from "axios";

const AnnDialog = (props) => {
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
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [ann, setAnn] = useState({
    title: "",
    description: "",
    adminid: 0,
  });
  const setDesc = (event) => {
    setAnn({ ...ann, description: event.target.value });
  };
  const setTitle = (event) => {
    setAnn({ ...ann, title: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/grader/cann", {
        title: ann.title,
        description: ann.description,
        adminid: ann.adminid,
      })
      .then(function (response) {
        console.log(response);
        setOpen(false);
        setTimeout(() => {
          console.log(props);
          props.onSuccess();
          setSubmitStatus({ ...submitStatus, success: true });
        }, 450);
      })
      .catch(function (error) {
        setOpen(false);
        setTimeout(() => {
          setSubmitStatus({ ...submitStatus, failed: true });
        }, 450);
      });

    setAnn({
      title: "",
      description: "",
      adminid: 0,
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Make Announcement</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To let our precious students know about the upcoming contest, your
            brand-new questions, or even just to show off your new iphone,
            please enter your information here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={ann.title}
            onChange={setTitle}
          />

          {/* <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            rowsMax={4}
            fullWidth
          /> */}
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={ann.description}
            onChange={setDesc}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.success} onClose={statusClose}>
        <DialogTitle>{"Success!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your announcement have been published.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.failed} onClose={statusClose}>
        <DialogTitle>{"Opps.... Something went wrong!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Come back again later..</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AnnDialog;
