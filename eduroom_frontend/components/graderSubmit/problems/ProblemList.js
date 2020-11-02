import React, { Fragment } from "react"
import style from "../../../styles/graderSubmit/problems/problemList"

const ProblemList = () => {
  return (
    <Fragment>
      <div className="box">
        <div className="left">
          <div className="title">Problem title</div>
          <p>
            Description: Description: Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied.
          </p>
        </div>
        <div className="right">
          <div className="right-top">
            <p className="difficulty">Easy</p>
          </div>
          <div className="right-bottom">
            <button>Try</button>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ProblemList
