import React, { Fragment, useState } from "react";
import Page1 from "./list";
import Page3 from "./edqizLunching";

const Content = () => {
  const [data, setData] = useState([
    {
      roomid: "1",
      quizname: "quizname1",
      description: "this is a test of description1",
    },
    {
      roomid: "2",
      quizname: "quizname2",
      description: "this is a test of description2",
    },
    {
      roomid: "5",
      quizname: "quizname3",
      description: "this is a test of description3",
    },
    {
      roomid: "10",
      quizname: "quizname4",
      description: "this is a test of description4",
    },
  ]);
  //query data from id quiz 1
  const [question, setQuestion] = useState([
    { QuestionID: "1", question: "question1" },
    { QuestionID: "2", question: "question2" },
    { QuestionID: "3", question: "question3" },
  ]);
  const [current, setCurrent] = useState(1);
  const [questionNumber, setquestionNumber] = useState(0);

  const handleQuestionNumber = (val) => {
    setquestionNumber(val);
  };

  const goto = (val) => {
    setCurrent(val);
  };

  const renderPage = () => {
    switch (current) {
      case 1:
        return (
          <Page1
            data={data}
            question={question}
            goto={goto}
            handleQuestionNumber={handleQuestionNumber}
            questionNumber={questionNumber}
          />
        );
      case 2:
        return (
          <Page3
            data={data}
            question={question}
            goto={goto}
            handleQuestionNumber={handleQuestionNumber}
            questionNumber={questionNumber}
          />
        );
    }
  };
  return (
    <Fragment>
      <div className="landing">
        <div>
          <div className="card">{renderPage()}</div>
        </div>
      </div>
      <style jsx>{`
        .content {
          width: 100vw;
          padding: 3% 5%;
          height: 90vh;
        }
        .landing {
          justify-content: center;
          width: 100vw;
          height: 100vh;
          background-image: url("/images/edqiz/create-bg.svg");
          background-repeat: no-repeat;
          background-size: cover;
          overflow: auto;
        }
        .card {
          background: white;
          border-radius: 2vh;
          transition: 0.3s;
          width: 100%;
          height: 100vh;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          flex-flow: column;
          justify-content: space-around;
        }
      `}</style>
    </Fragment>
  );
};
export default Content;
