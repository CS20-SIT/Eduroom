import React, { Fragment } from "react";

const Answer = ({ ans, index, correct, handleChange, handleCorrect }) => {
  const handleChangeAnswer = (e) => {
    let newValue = e.target.value;
    const val = { opt: index, newValue };
    handleChange(val);
  };
  return (
    <Fragment>
      <div className="col-12">
        <div className="question-row">
          <div className="col-9 choice">
            <input
              className="answer-choice"
              placeholder={"Answer " + (index + 1)}
              value={ans}
              onChange={handleChangeAnswer}
            />
          </div>
          <div className="col-3 answer-correct">
            {correct ? (
              <button className="correct-button">
                <i className="fas fa-check correct-choice"></i>
              </button>
            ) : (
              <button
                className="correct-button"
                onClick={() => {
                  handleCorrect(index);
                }}
              >
                <i className="fas fa-times wrong-choice"></i>
              </button>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .answer-choice {
            background: #fdecf4;
            border-radius: 10px;
            border: none;
          }
          .answer-choice :hover {
            background: #EEEEE;
            opacity: 1;
            box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
            transition: 0.25s;
            outline: none;
          }
          .choice {
            padding: 0.5rem 0.6rem 0.5rem 0;
          }
          .answer-correct {
            padding: 0.5rem 0 0.5rem 0.6rem;
          }
          .correct-button {
            height: 100%;
            width: 100%;
            border-radius: 10px;
            border: none;
            font-size: 1.2em;
            background: #eff0f6;
            outline: none;
            opacity: 0.6;
          }
          .correct-button :hover {
            background: #EEEEE;
            opacity: 1;
            box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
            transition: 0.25s;
            outline: none;
          }
          .correct-choice {
            color: #27ae60;
          }
          .wrong-choice {
            color: #db524e;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Answer;
