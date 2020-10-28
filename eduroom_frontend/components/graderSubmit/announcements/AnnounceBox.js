import React, { Fragment } from "react"
import Announcements from "./Announcements"
import style from "../../../styles/graderSubmit/announcements/announceBox"

const AnnounceBox = () => {
  return (
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
      <style jsx>{style}</style>
    </div>
  )
}
export default AnnounceBox
