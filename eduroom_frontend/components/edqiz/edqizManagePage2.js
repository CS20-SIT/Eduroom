import React, { Fragment, useState } from 'react'
import EdquizPagination from './edqizPagination'
import style from '../../styles/edqiz/managePage'
import QuestionCard from './questionCard'
import QuizName from './edqizEditName'
const Page2 = ({
  name,
  goto,
  questionList,
  add,
  remove,
  change,
  changeName,
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
      )
    })
  }

  const isEmpty = (val) => {
    return val == ''
  }

  const isInvalidQuestion = (el) => {
    return (
      isEmpty(el.question) ||
      isEmpty(el.time) ||
      isEmpty(el.point) ||
      isEmpty(el.answer[0]) ||
      isEmpty(el.answer[1]) ||
      isEmpty(el.answer[2]) ||
      isEmpty(el.answer[3])
    )
  }

  const isValidForm = () => {
    let check = true
    for (let el of questionList) {
      if (isInvalidQuestion(el)) {
        return false
      }
    }
    return true
  }
  const handleGoto = (val) => {
    if (val == 1) {
      goto(1)
    } else if (val != 2) {
      handleNext()
    }
  }
  const handleNext = () => {
    if (isValidForm()) {
      goto(3)
    } else {
      alert('Question is Required')
    }
  }

  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={2} goto={handleGoto} />
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          <Fragment>
            <div className="col-12">
              <QuizName
                name={name}
                changeName={(val) => {
                  changeName(val)
                }}
              />
            </div>
            <div className="col-12">{renderQuestion()}</div>
            <div className="col-12">
              <button
                className="edqiz-manage-outline-button pink"
                onClick={() => {
                  goto(1)
                }}
              >
                Previous
              </button>
              <button
                className="edqiz-manage-outline-button pink"
                onClick={() => {
                  handleNext()
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
  )
}
export default Page2
