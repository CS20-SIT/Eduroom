import React from "react";
import TaskList from "./taskList";
import axios from "axios";

// export default function Form(props) {
//     const [samples, setSamples] = useState(null);
//     const [load, setLoad] = useState(0);
//     const [fileError, setFileError] = useState("Invalid Files");
//     const [checkError, setCheckError] = useState(false);
//     const onChangeHandlerFile = (event) => {
//       var files = event.target.files;
//       if (maxSelectFile(event) && checkMimeType(event) && checkFileSize(event)) {
//         setFile(files);
//         setLoad(0);
//       }
//     };
//     const onClickHandlerFile = () => {
//       const data = new FormData();

//       if (selectedFile != null) {
//         for (var x = 0; x < selectedFile.length; x++) {
//           data.append("file", selectedFile[x]);

//           console.log(selectedFile[x]);
//         }
//         axios
//           .post("http://localhost:5000/api/grader/ptc", data, {
//             onUploadProgress: (ProgressEvent) => {
//               setLoad((ProgressEvent.loaded / ProgressEvent.total) * 100);
//             },
//           })
//           .then((res) => {})
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     };
//     const handleCloseFile = (event, reason) => {
//       if (reason === "clickaway") {
//         return;
//       }

//       setCheckError(false);
//     };
//     return (
//       <div className="container">
//       </div>
//     );
//   }

class Form extends React.Component {
  state = {
    taskList: [
      {
        index: Math.random(),
        projectName: "",
        task: "",
      },
    ],
  };

  handleChange = (e) => {
    if (["projectName", "task"].includes(e.target.name)) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
          projectName: "",
          task: "",
        },
      ],
    }));
    console.log(this.state.taskList);
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.date === "" || this.state.description === "") {
      NotificationManager.warning(
        "Please Fill up Required Field . Please check Task and Date Field"
      );
      return false;
    }
    for (var i = 0; i < this.state.taskList.length; i++) {
      if (
        this.state.taskList[i].projectName === "" ||
        this.state.taskList[i].task === ""
      ) {
        NotificationManager.warning(
          "Please Fill up Required Field.Please Check Project name And Task Field"
        );
        return false;
      }
    }
    let data = { formData: this.state, userData: localStorage.getItem("user") };
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .post("http://localhost:9000/api/task", data)
      .then((res) => {
        if (res.data.success) NotificationManager.success(res.data.msg);
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          NotificationManager.error("Bad Request");
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: error });
      });
  };
  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }
  render() {
    let { taskList } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">Add Your Example</div>
                <div className="card-body">
                  <div className="row"></div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="required">Input</th>
                        <th className="required">Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TaskList
                        add={this.addNewRow}
                        delete={this.clickOnDelete.bind(this)}
                        taskList={taskList}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-center">
                  {" "}
                  <button type="submit" className="btn btn-primary text-center">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
