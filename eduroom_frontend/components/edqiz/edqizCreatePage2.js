import React, { Fragment, useState } from "react";
import EdquizPagination from "./edqiz-create-pagination";
import style from "../../styles/edqiz/createPage";
import QuestionCard from "./questionCard";
import Input from "../../pages/edqiz/input";
const Page2 = ({
  name,
  goto,
  questionList,
  add,
  remove,
  change,
  changeName,
  val,
  // checkNull
}) => {
  const renderQuestion = () => {
    return questionList.map((el, index) => {
      return (
        <QuestionCard
          key={index}
          data={el}
          index={index}
          add={add}
          remove={remove}
          change={change}
        />
      );
    });
  };

  const [check, setCheck] = useState(false);
  let i = 0;
  const checkNull = () => {
    for (i = 0; i < questionList.length; i++) {
      if (questionList[i].question == "" && questionList[i].time == "" && questionList[i].point == "" &&
      questionList[i].ans[0] == "" && questionList[i].ans[1] == "" && questionList[i].ans[2] == ""&& questionList[i].ans[3] == "") {
        setCheck(false);
       

        break
      } else if (questionList[i].question != "" && questionList[i].time != "" && questionList[i].point != "" &&
      questionList[i].ans[0] != "" && questionList[i].ans[1] != "" && questionList[i].ans[2] != "" && questionList[i].ans[3] != "") {
        console.log(questionList[i].ans[0])
        setCheck(true);
      }
    }
  };
  

  const [className, setClassName] = useState(name);
  const [edited, setEdited] = useState(false);
  const myClick = () => {
    setEdited(true);
  };

  const renderText = () => {
    if (edited == true) {
      return (
        <div>
          <Input name={className} changeName={(e) => setClassName(e)}></Input>
          <i
            className="fas fa-save"
            style={{ marginLeft: "20px" }}
            onClick={() => {
              setEdited(false);
              changeName(className);
            }}
          ></i>
        </div>
      );
    } else {
      return (
        <Fragment>
          {className}
          <i
            className="fas fa-pen"
            style={{ marginLeft: "20px", marginTop: "5px" }}
            onClick={myClick}
          ></i>
        </Fragment>
      );
    }
  };

  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={2} goto={goto} />
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          <Fragment>
            <div className="col-12">
              <div className="landing-header">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {renderText()}
                </div>
              </div>
            </div>
            <div className="col-12">{renderQuestion()}</div>
            <div className="col-12">
              <button
                className="prevConButton"
                onClick={() => {
                  goto(1);
                }}
              >
                Previous
              </button>
              <button
                onMouseMove={() => {
                  if (check == true) {
                    console.log("check=" + check);
                    i = 0;
                  } else if (check == false) {
                    checkNull();
                    i = 0;
                  }
                }}
                className="prevConButton"
                onClick={() => {
                  if(check==true){
                  goto(3);}
                  else{
                    alert("Please complete the question, fill in a detailed question.");
                  }
                }}
              >
                Continue
           
              </button>
            </div>
          </Fragment>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Page2;
