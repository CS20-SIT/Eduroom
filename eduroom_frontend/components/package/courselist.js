import React, { Fragment } from 'react'
import style from '../../styles/package/createpackage'

const Courselist = (props) => {
  return (
    <Fragment>
      <div className="list">
        <div><input type="checkbox" name="courseid" value="courseid"></input>
          <label for="courseid"
            style={{
              border: "1px solid black",
              padding: "30px 35px",
              marginLeft: "25px"
            }}>Picture</label>
          <label for="courseid"
            style={{
              fontWeight: "500",
              fontSize: "20px",
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