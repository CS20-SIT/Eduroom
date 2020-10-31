import React, { Fragment } from "react"
import style from "../../../styles/graderSubmit/announcements/announcement"
const Announcements = () => {
  return (
    <Fragment>
      <div className="list">
        <div className="title">This is an announcement</div>
        <div className="status">
          <div className="time">2020-10-29 21.07.55</div>
          <div className="admin">by Tortoye</div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Announcements
