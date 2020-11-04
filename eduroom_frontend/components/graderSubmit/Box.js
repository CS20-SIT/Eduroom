import { freemem } from "os"
import React, { Fragment } from "react"
import style from "../../styles/graderSubmit/box"

const Box = (props) => {
  return (
    <Fragment>
      <div className="box">{props.children}</div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default Box
