import React, { Fragment, useState } from "react";
import Page1 from "./list";
import Page3 from "./edqizLunching";


const Content = () => {
  const data = [
    { id:'1', quizname: "quizname1", description: "this is a test of description1" },
    { id:'2', quizname: "quizname2", description: "this is a test of description2" },
    { id:'3', quizname: "quizname3", description: "this is a test of description3" },
    { id:'4', quizname: "quizname4", description: "this is a test of description4" },    
  ];
  
  const [current, setCurrent] = useState(1);
  const [questionNumber, setquestionNumber] = useState(0);
  console.log("edlunch"+data[questionNumber].id);
  const handleQuestionNumber = (val) => {
    setquestionNumber(val);

  };

  const goto = (val) => {
    setCurrent(val);
  };

  const renderPage = () => {
    switch (current) {
      case 1:
        return <Page1 data={data} goto={goto} handleQuestionNumber={handleQuestionNumber} questionNumber={questionNumber} id={data[questionNumber].id}/>;//แก้ไอดี เอามาจากอีกหน้า
      case 2:
        return <Page3 data={data} goto={goto} handleQuestionNumber={handleQuestionNumber} questionNumber={questionNumber} id={data[questionNumber].id}/>;
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
