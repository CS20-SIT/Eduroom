import { Fragment } from "react"
import style from "../../../../styles/graderSubmit/contests/contestPage/problem/contestProblemList"

const ContestProblemList = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="flex-container">
        <div className="flex-item" style={{ flexBasis: "15%" }}>
          {props.number}
        </div>
        <div className="flex-item" style={{ flexBasis: "25%" }}>
          {props.title}
        </div>
        <div className="flex-item" style={{ flexBasis: "30%" }}>
          {props.total}
        </div>
        <div className="flex-item" style={{ flexBasis: "30%" }}>
          {props.rate}
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestProblemList
