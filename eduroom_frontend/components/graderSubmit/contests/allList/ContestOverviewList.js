import { Fragment } from "react"
import style from "../../../../styles/graderSubmit/contests/contestPage/overview/contestOverviewList"

const ContestOverviewList = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="flex-container">
        <div className="flex-item" style={{ flexBasis: "25%" }}>
          10/24/20 01.94PM
        </div>
        <div className="flex-item" style={{ flexBasis: "25%" }}>
          10/24/20 03.00PM
        </div>
        <div className="flex-item" style={{ flexBasis: "16.6%" }}>
          Public
        </div>
        <div className="flex-item" style={{ flexBasis: "16.6%" }}>
          OI
        </div>
        <div className="flex-item" style={{ flexBasis: "16.6%" }}>
          Tortoei
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ContestOverviewList
