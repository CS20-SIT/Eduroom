import React, { Fragment } from 'react'
import style from '../../styles/template/error'
import Link from 'next/link'
const Error = () => {
  return (
    <Fragment>
      <div className="error">
        <div className="box">
          <div className="row error-text">
            <span className="error-number">404</span>
          </div>
          <div className="row error-text">
            <span>OOPS ! PAGE NOT FOUND</span>
          </div>
          <div className="row">
            <Link href="/">
              <div className="home-button">Home Page</div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Error;
