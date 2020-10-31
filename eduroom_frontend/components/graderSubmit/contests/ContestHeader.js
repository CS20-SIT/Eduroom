import React, { Fragment } from "react"
import style from "../../../styles/graderSubmit/contests/contestHeader"

const ContestHeader = () => {
  return (
    <Fragment>
      <div className="header">
        <h2 className="title">ALL CONTESTS</h2>
        <div className="tools">
          <div className="left">
            <div classNume="dropdown rule">
              <button className="dropbtn">Rule</button>
              <div className="dropdown-content">
                <a href="#">All</a>
                <a href="#">OI</a>
                <a href="#">ACM</a>
              </div>
            </div>
            <div className="dropdown status">
              <button className="dropbtn">Status</button>
              <div className="dropdown-content">
                <a href="#">All</a>
                <a href="#">Not started</a>
                <a href="#">Underway</a>
                <a href="#">Ended</a>
              </div>
            </div>
          </div>
          <div className="right">search bar</div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestHeader
