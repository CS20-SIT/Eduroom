import { Fragment } from "react"
import ProblemNav from "./ProblemNav"

const ProblemLayout = (props) => {
  return (
    <Fragment>
      <ProblemNav page={props.page} id={props.id} />
      {props.children}
    </Fragment>
  )
}

export default ProblemLayout
