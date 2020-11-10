import { Fragment } from "react"
import style from "../../../../styles/graderSubmit/contests/contestPage/rank/contestRankList"

const ContestRankList = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="flex-container">
        <div className="flex-item" style={{ flexBasis: "10%" }}>
          {props.rank}
        </div>
        <div className="flex-item" style={{ flexBasis: "60%" }}>
          {props.name}
        </div>
        <div className="flex-item" style={{ flexBasis: "30%" }}>
          {props.score}
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestRankList
