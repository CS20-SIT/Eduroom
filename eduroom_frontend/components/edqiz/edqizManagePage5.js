import React, { Fragment, useState } from 'react'
import style from '../../styles/edqiz/createPage'
const Page5 = ({ name }) => {
  return (
    <Fragment>
      <div className="col-12">
        <div className="row row-content">
          <Fragment>
            <div className="col-12">
              <p className="landing-header">DONE!</p>
            </div>
            <div className="col-12">
              <p className="">" {name} "</p>
            </div>
            <div
              className="col-12"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <button className="prevConButton">Play Now</button>
            </div>
            <div
              className="col-12"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <button className="prevConButton">Edit</button>
            </div>
          </Fragment>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page5
