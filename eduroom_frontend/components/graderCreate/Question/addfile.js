import React from "react";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const sError = {
  "font-family": "Quicksand , sans-serif",
  color: "white",
  "font-size": "1em",
};

export default function AddFile(props) {
  const [selectedFile, setFile] = useState(null);
  const [load, setLoad] = useState(0);
  const [fileError, setFileError] = useState("Invalid Files");
  const [checkError, setCheckError] = useState(false);
  const checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    console.log(files);
    //define message container
    let err = [];
    let result = true;
    // list allow mime type
    const types = [
      "application/zip",
      "application/x-zip-compressed",
      "application/zip-compressed",
    ];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err[x] = files[x].type + " is not a supported format\n";
        result = false;
        setFileError("Invaild File Format!\n");
        setCheckError(true);
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      event.target.value = null;
    }
    return result;
  };
  const maxSelectFile = (event) => {
    let files = event.target.files;
    if (files.length > 10) {
      setFileError("Only 10 Files can be uploaded at a time!\n");
      setCheckError(true);
      event.target.value = null;
      return false;
    }
    return true;
  };
  const checkFileSize = (event) => {
    let files = event.target.files;
    let size = 10 * 1024 * 1024;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        setFileError("Pick a smaller file!\n");
        setCheckError(true);
        err[x] = files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file

      event.target.value = null;
    }
    return true;
  };
  const onChangeHandler = (event) => {
    var files = event.target.files;
    if (maxSelectFile(event) && checkMimeType(event) && checkFileSize(event)) {
      setFile(files);
      setLoad(0);
    }
  };
  const onClickHandler = () => {
    const data = new FormData();

    if (selectedFile != null) {
      for (var x = 0; x < selectedFile.length; x++) {
        data.append("file", selectedFile[x]);
        console.log(selectedFile[x]);
      }
      axios
        .post("http://localhost:5000/api/grader/ptc", data, {
          onUploadProgress: (ProgressEvent) => {
            setLoad((ProgressEvent.loaded / ProgressEvent.total) * 100);
          },
        })
        .then((res) => {
          //   // then print response status
          //   toast.success("upload success");
        })
        .catch((err) => {
          console.log(err);
          //   // then print response status
          //   toast.error("upload fail");
        });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCheckError(false);
  };
  return (
    <div className="container">
      <Snackbar open={checkError} autoHideDuration={6000} onClose={handleClose}>
        <Alert style={sError} onClose={handleClose} severity="error">
          {fileError}
        </Alert>
      </Snackbar>
      <style jsx>{`
        *:focus {
          outline: none;
        }
        .custom-file-input::-webkit-file-upload-button {
          visibility: hidden;
          width: 100px;
        }
        .custom-file-input::before {
          content: "Select Your Test Case Files";
          display: inline-block;
          color: #a880f7;
          width: 120px;
          padding: 5px 8px;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          cursor: pointer;
          text-shadow: 1px 1px #fff;
          font-weight: 700;
          font-size: 1.2em;
        }
        .custom-file-input:hover::before {
          border-color: black;
          outline: none;
        }
        .custom-file-input:focus {
          outline: none;
        }
        /* .custom-file-input:active::before {
          background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
          width: 120px;
        } */
      `}</style>
      <div className="row">
        <div className="offset-md-3 col-md-12">
          <div className="form-group files">
            <h3></h3>
            <br></br>
            <h5>
              Testcase files up to 10 MB in size are available for upload.
            </h5>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={onChangeHandler}
              className="custom-file-input"
              style={{ width: 1000 }}
            />
          </div>

          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={onClickHandler}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
