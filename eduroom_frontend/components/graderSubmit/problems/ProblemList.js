import React, { Fragment } from "react"
import { useRouter } from "next/router"
import style from "../../../styles/graderSubmit/problems/problemList"

const ProblemList = () => {
  const router = useRouter()

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
            <div
              className="try-button"
              onClick={() => router.push("/graderSystem/problem/id")}
            >
              <button id="myButton">Try</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ProblemList
