import React, { Fragment, useState } from 'react'
import style from '../../styles/edqiz/managePage'
const Page5 = ({ name }) => {
  return (
    <Fragment>
      <div className="col-12">
        <div className="row row-content">
          <Fragment>
            <div className="col-12">
              <p className="edqiz-manage-header">DONE!</p>
            </div>
            <div className="col-12">
              <p className="">" {name} "</p>
            </div>
            <div
              className="col-12 cflex"
            >
              <button className="edqiz-manage-button pink big-button">
                <span className="edqiz-manage-button-text">Play Now</span>
              </button>
            </div>
            <div
              className="col-12 cflex"
            >
              <button className="edqiz-manage-outline-button purple big-button">Edit</button>
            </div>
          </Fragment>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page5
