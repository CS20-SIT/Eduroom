import React, { Fragment, useState } from 'react'
import EdquizPagination from './edqiz-create-pagination'
import style from '../../styles/edqiz/createPage'
import QuestionCard from './questionCard'
import QuestionPreview from './questionPreview'
const Page2 = ({
  name,
  goto,
  questionList,
  add,
  remove,
  change,
  changeName,
}) => {
  const [step, setStep] = useState(1)
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
  const renderPreview = () => {
    return questionList.map((el, index) => {
      return (
        <QuestionPreview
          key={index}
          data={el}
          index={index}
        />
      )
    })
  }
  const handleChangeName = () => {
    changeName('TEST22')
  }

  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={2} goto={goto} />
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          {step == 1 ? (
            <Fragment>
            <div className="col-12">
              <p className="landing-header">
                {name} <i className="fas fa-pen" onClick={handleChangeName}></i>
              </p>
            </div>
              <div className="col-12">{renderQuestion()}</div>
              <div className="col-12">
              <button
                className="prevConButton"
                onClick={() => {
                  goto(1)
                }}
              >
                Previous
              </button>
              <button
                className="prevConButton"
                onClick={() => {
                  setStep(2)
                }}
              >
                Continue
              </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
          <div className="col-12">
            <p className="landing-header">
              PREVIEW
            </p>
          </div>
          <div className="col-12">
            <p className="landing-header">
              {name} <i className="fas fa-pen" onClick={handleChangeName}></i>
            </p>
          </div>
          <div className="col-12" style={{padding:'0% 20%'}}>
            {renderPreview()}
          </div>
              <div className="col-12">
              <button
                className="prevConButton"
                onClick={() => {
                  setStep(1)
                }}
              >
                Previous
              </button>
              <button
                className="prevConButton"
                onClick={() => {
                  goto(3)
                }}
              >
                Continue
              </button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page2
