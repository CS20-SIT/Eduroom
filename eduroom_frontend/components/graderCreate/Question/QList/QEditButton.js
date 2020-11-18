import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Image from "next/image";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

//on button , change that to chips
// https://material-ui.com/components/chips/#chip
const AnnEdit = (props) => {
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
  //// admind id here!!!!!!!
  const [ann, setAnn] = useState({
    title: props.title,
    description: props.description,
    adminid: props.id,
  });
  const setDesc = (event) => {
    setAnn({ ...ann, description: event.target.value });
  };
  const setTitle = (event) => {
    setAnn({ ...ann, title: event.target.value });
  };
  const [visible, setVisible] = React.useState(props.visible);

  const handleChange = (event) => {
    setVisible(event.target.checked);
  };

  const handleSubmit = () => {
    axios
      .put("http://localhost:5000/api/grader/eann", {
        id: props.id,
        title: ann.title,
        description: ann.description,
        adminid: ann.adminid,
        isvisible: visible,
      })
      .then(function (response) {
        console.log(response);
        setOpen(false);

        setTimeout(() => {
          console.log("this is when we call prop on sucess");
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

    // setAnn({
    //   title: "",
    //   description: "",
    //   adminid: 0,
    // });
    // setVisible(true);
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
    <div>
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
        <Image src="/images/graderCreate/edit.svg" width="20" height="20" />
      </button>
    </div>
  );
};
export default AnnEdit;
