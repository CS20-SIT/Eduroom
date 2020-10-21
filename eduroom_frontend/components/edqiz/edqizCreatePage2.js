import React, { Fragment, useState } from 'react'
import EdquizPagination from './edqiz-create-pagination'
import style from '../../styles/edqiz/createPage'
import QuestionCard from './questionCard'
const Page2 = ({goto,questionList,add,remove,change}) => {
  
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

  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={2} goto={goto} />
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          <div className="col-12">
            <p className="landing-header">
              QUIZ NAME <i className="fas fa-pen"></i>
            </p>
          </div>
          <div className="col-12">{renderQuestion()}</div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page2
