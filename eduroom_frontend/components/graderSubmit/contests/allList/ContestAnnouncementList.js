import { Fragment } from "react"
import style from "../../../../styles/graderSubmit/contests/contestPage/announcement/contestAnnouncementList"

const ContestAnnouncementList = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="flex-container">
        <div className="flex-item" style={{ flexBasis: "20%" }}>
          Anya Smith
        </div>
        <div className="flex-item" style={{ flexBasis: "20%" }}>
          Title
        </div>
        <div className="flex-item" style={{ flexBasis: "40%" }}>
          There are many variations of passages
        </div>
        <div className="flex-item" style={{ flexBasis: "20%" }}>
          2020-10-21 18:27:22
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestAnnouncementList
