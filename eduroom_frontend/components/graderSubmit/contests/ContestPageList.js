import React, { Fragment } from "react"
import style from "../../../styles/graderSubmit/contests/contestPageList"

const ContestList = () => {
  return (
    <Fragment>
      <div className="box">
        <img src="../../../images/graderSubmit/trophy.svg" className="trophy" />
        <div className="content">
          <p className="contest-name">Content Name</p>
          <div className="detail">
            <div className="date">
              <img src="../../images/graderSubmit/calendarIcon.svg" />
              <p>2020-10-22 09.00</p>
            </div>
            <div className="duration">
              <img src="../../images/graderSubmit/clockIcon.svg" />
              <p>3 hours</p>
            </div>
            <div className="type">
              <img src="../../images/graderSubmit/mortarBoardIcon.svg" />
              <p>ACM</p>
            </div>
          </div>
        </div>
        <div className="status">
          <div className="status-box">
            <img
              src="../../../images/graderSubmit/statusTrue.svg"
              className="status-dot"
            />
            <div className="contest-status">Ended</div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestList
