import React, { Fragment } from 'react'
import style from '../../styles/edqiz/questionCard'
const Answer = ({ ans, index, correct, handleChange, handleCorrect }) => {
  const handleChangeAnswer = (e) => {
    let newValue = e.target.value
    const val = { opt: index, newValue }
    handleChange(val)
  }
  return (
    <Fragment>
      <div className="col-12">
        <div className="question-row">
          <div className="col-9 choice">
            <input
              className="answer-choice"
              placeholder={'Answer ' + (index + 1)}
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
                  handleCorrect(index)
                }}
              >
                <i className="fas fa-times wrong-choice"></i>
              </button>
            )}
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Answer
