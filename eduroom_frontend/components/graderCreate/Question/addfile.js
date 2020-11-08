import React from "react";
import axios from "axios";

class AddFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
    };
  }

  checkMimeType = (event) => {
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
      "image/png",
      "image/jpeg",
      "image/gif",
    ];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err[x] = files[x].type + " is not a supported format\n";
        result = false;
        console.log(err[x]);
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      event.target.value = null;
    }
    return result;
  };
  maxSelectFile = (event) => {
    let files = event.target.files;
    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      event.target.value = null;
      console.log("Only 3 images can be uploaded at a time");
      return false;
    }
    return true;
  };
  checkFileSize = (event) => {
    let files = event.target.files;
    let size = 2000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        console.log("is too large, please pick a smaller file");
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

  onChangeHandler = (event) => {
    var files = event.target.files;
    if (
      this.maxSelectFile(event) &&
      this.checkMimeType(event) &&
      this.checkFileSize(event)
    ) {
      // if return true allow to setState
      this.setState({
        selectedFile: files,
        loaded: 0,
      });
    }
  };
  onClickHandler = () => {
    const data = new FormData();
    data.append("owner", "John Doe");
    if (this.state.selectedFile != null) {
      for (var x = 0; x < this.state.selectedFile.length; x++) {
        data.append("file", this.state.selectedFile[x]);
        console.log(this.state.selectedFile[x]);
      }
      axios
        .post("http://localhost:5000/api/grader/ptc", data, {
          onUploadProgress: (ProgressEvent) => {
            this.setState({
              loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
            });
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <div className="form-group files">
              <label>Upload Your Img </label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={this.onChangeHandler}
              />
            </div>

            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddFile;
