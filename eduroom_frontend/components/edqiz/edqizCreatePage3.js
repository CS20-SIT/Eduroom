import React, { Fragment } from 'react'
import EdquizPagination from './edqiz-create-pagination'
import style from '../../styles/edqiz/createPage'
const Page3 = ({ goto }) => {
  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={3} goto={goto} />
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          <div className="col-12">
            <p className="landing-header">
              QUIZ NAME <i className="fas fa-pen"></i>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page3
