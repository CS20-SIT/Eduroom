import { Fragment } from "react"
import style from "../../../../styles/graderSubmit/contests/contestPage/overview/contestOverviewList"
import { compareAsc, format } from "date-fns"

const ContestOverviewList = (props) => {
  console.log(props.startTime)
  let start =
    format(Date.parse(props.startTime), "P") +
    " " +
    format(Date.parse(props.startTime), "pp")

  let end =
    format(Date.parse(props.endTime), "P") +
    " " +
    format(Date.parse(props.endTime), "pp")

  return (
    <Fragment>
      <div className="flex-container">
        <div className="flex-item" style={{ flexBasis: "25%" }}>
          {start}
        </div>
        <div className="flex-item" style={{ flexBasis: "25%" }}>
          {end}
        </div>
        <div className="flex-item" style={{ flexBasis: "25%" }}>
          {props.rule.toUpperCase()}
        </div>
        <div className="flex-item" style={{ flexBasis: "25%" }}>
          {props.creator}
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestOverviewList
