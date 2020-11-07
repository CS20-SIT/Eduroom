import React, { Fragment } from 'react'
import style from '../../styles/package/createpackage'

const Courselist = (props) => {
  return (
    <Fragment>
      <div>
        <div style={{display: "flex", alignItems: "center"}}>
          <label for="courseid"
            style={{
              border: "1px solid black",
              padding: "25px 35px",
              marginLeft: "25px"
            }}>Picture</label>
          <label for="courseid"
            style={{
              fontWeight: "500",
              fontSize: "19px",
              margin: "0 40px"
            }}
          >
            Name: {props.name}</label>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Courselist