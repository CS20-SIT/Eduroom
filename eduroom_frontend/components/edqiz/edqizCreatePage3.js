import React, { Fragment, useState } from 'react'
import EdquizPagination from './edqiz-create-pagination'
import style from '../../styles/edqiz/createPage'
import QuestionCard from './questionCard'
import QuestionPreview from './questionPreview'
const Page3 = ({ name, goto, questionList, add, remove, change }) => {
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
      return <QuestionPreview key={index} data={el} index={index} />
    })
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
          <Fragment>
            <div className="col-12">
              <p className="landing-header">PREVIEW</p>
            </div>
            <div
              className="col-12"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                style={{
                  border: '3px solid #5B5B5B',
                  width: '50vw',
                  height: '10vh',
                  borderRadius: '2vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    fontSize: '23px',
                    color: '#5B5B5B',
                    fontWeight: '500',
                  }}
                >
                  {name}
                </p>
              </div>
            </div>
            <div className="col-12" style={{ padding: '0% 20%' }}>
              {renderPreview()}
            </div>
            <div className="col-12">
              <button
                className="prevConButton"
                onClick={() => {
                  goto(2)
                }}
              >
                Previous
              </button>
              <button
                className="prevConButton"
                onClick={() => {
                  goto(4)
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
export default Page3
