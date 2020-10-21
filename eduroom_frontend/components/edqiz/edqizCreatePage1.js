import React, { Fragment } from 'react'
import EdquizPagination from './edqiz-create-pagination'
import style from '../../styles/edqiz/createPage'
const Page1 = ({goto}) => {
  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={1} goto={goto}/>
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          <div className="col-12">
            <p className="landing-header">QUIZ NAME</p>
          </div>
          <div className="col-12">
            <span style={{ color: '#3d467f' }}>
              let's start by giving the quiz a name
            </span>
          </div>
          <div className="col-12">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="QUIZ NAME . . ."
            />
          </div>
          <div className="col-12">
            <button
              className="landing-button"
              onClick={() => goto(2)}
            >
              <span className="landing-button-text">GO!</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page1
