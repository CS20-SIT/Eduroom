import React, { Fragment } from "react"
import style from "../../../styles/graderSubmit/contests/contestPageHeader"

const ContestHeader = (props) => {
  return (
    <Fragment>
      <div className="properties">
        <div className="header">
          <h2 className="title">ALL CONTESTS</h2>
          <div className="tools">
            <div className="left">
              <select className="rule">
                <option selected value>
                  Rank
                </option>
                <option value="all">All</option>
                <option value="OI">OI</option>
                <option value="acm">ACM</option>
              </select>
              <select className="status">
                <option selected value>
                  Status
                </option>
                <option value="all">All</option>
                <option value="not_started">Not Started</option>
                <option value="underway">Underway</option>
                <option value="ended">Ended</option>
              </select>
            </div>
            <div className="right">
              <input
                type="text"
                className="search"
                placeholder="Keyword"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="list">{props.children}</div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestHeader
