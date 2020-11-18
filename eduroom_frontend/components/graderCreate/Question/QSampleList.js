import React from "react";
import Qsample from "./QSample";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "../../../api";
import Chip from "@material-ui/core/Chip";

class Form extends React.Component {
  no = 0;

  constructor(props) {
    super(props);
    console.log("---------------------------------------------------------");
    console.log("first meet");
    console.log(this.props);
    // Don't call this.setState() here!

    this.state = {
      questionSample: [
        {
          index: this.no,
          inputsample: "",
          outputsample: "",
        },
      ],
    };
  }

  handleSet = (old, adder) => {
    console.log("---------Set---------------");
    console.log(old);
    this.setState({ questionSample: old });
    console.log(this.state.questionSample);
    this.no += adder;
    console.log("------------------------");
  };
  handleChange = (e) => {
    if (["inputsample", "outputsample"].includes(e.target.name)) {
      let questionSample = [...this.state.questionSample];
      questionSample[e.target.dataset.id][e.target.name] = e.target.value;
      console.log([this.state.questionSample]);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }

    this.props.handleSample(this.state.questionSample);
  };
  addNewRow = (e) => {
    this.no++;
    // just add new empty row
    this.setState((prevState) => ({
      questionSample: [
        ...prevState.questionSample,
        {
          index: this.no,
          inputsample: "",
          outputsample: "",
        },
      ],
    }));
    console.log("---------ADD---------------");
    console.log(this.state.questionSample);
  };

  deteteRow = (index) => {
    this.no--;
    this.setState({
      questionSample: this.state.questionSample.filter(
        (s, sindex) => index !== sindex
      ),
    });
  };

  clickOnDelete(record) {
    this.setState({
      questionSample: this.state.questionSample.filter((r) => r !== record),
    });
  }
  render() {
    let { questionSample } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <form onChange={this.handleChange}>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-sm-10">
            <div className="card">
              <div
                style={{ marginLeft: "4%", marginBottom: 15, paddingTop: 10 }}
              >
                <span
                  style={{
                    fontFamily: "Quicksand , sans-serif",
                    color: "#3d467f",
                    fontWeight: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  Question Sample
                </span>
                <Chip
                  label=" + ADD"
                  onClick={this.addNewRow}
                  style={{
                    backgroundColor: "#FC8FC3",
                    marginLeft: 20,
                    marginBottom: 10,
                    color: "white",
                    height: 25,
                    width: 120,
                    fontFamily: "Quicksand , sans-serif",
                    fontSize: "1.0em",
                    fontWeight: "bold",
                  }}
                />
              </div>
            </div>
          </div>
          <Grid container direction="row" justify="center" alignItems="center">
            {" "}
            <Grid item xs={12}>
              {" "}
              <Qsample
                set={this.handleSet}
                add={this.addNewRow}
                delete={this.clickOnDelete.bind(this)}
                questionSample={questionSample}
                id={this.props.id}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <div style={{ height: 12 }}></div>
            </Grid>
          </Grid>
        </div>
      </form>
    );
  }
}
export default Form;
