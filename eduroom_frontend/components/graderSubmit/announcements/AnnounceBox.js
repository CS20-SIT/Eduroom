import React, { Fragment } from "react"
import Announcements from "./Announcements"
import style from "../../../styles/graderSubmit/announcements/announceBox"

const AnnounceBox = () => {
  return (
    <Fragment>
      <h2 style={{ color: "#5B5B5B", paddingTop: "20px" }}>ANNOUNCEMENTS</h2>
      <div className="box">
        <div className="title">
          <div className="left">
            <p>ANNOUNCEMENTS</p>
          </div>
          <div className="right">
            <p className="times">TIMES</p>
            <p className="admins">ADMIN</p>
          </div>
        </div>
        <div className="announceList">
          <Announcements />
          <Announcements />
          <Announcements />
          <Announcements />
          <Announcements />
          <Announcements />
          <Announcements />
          <Announcements />
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default AnnounceBox
