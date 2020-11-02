import React, { Fragment } from "react"
import style from "../../../styles/graderSubmit/announcements/announcement"
import { useRouter } from "next/router"

const Announcements = () => {
  const router = useRouter()
  return (
    <Fragment>
      <div
        className="click"
        onClick={() => router.push("/graderSystem/announcement")}
      >
        <div className="list">
          <div className="title">This is an announcement</div>
          <div className="status">
            <div className="time">2020-10-29 21.07.55</div>
            <div className="admin">by Tortoye</div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Announcements
