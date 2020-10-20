import React, { Fragment } from 'react'
const CreateText = () => {
  return (
    <Fragment>
      <span className="text-title">
        <span className="navy-text">E</span>
        <span className="purple-text">D</span>
        <span className="navy-text">Q</span>
        <span className="pink-text">I</span>
        <span className="navy-text">Z!</span>
      </span>
      <style jsx>
          {
              `
              .text-title {
                font-family: "Quicksand", sans-serif;
              }
              .navy-text {
                color:#3D467F
              }
              .purple-text {
                color: #A880F7;
              }
              .pink-text {
                color: #F39AC4;
              }
              `
          }
      </style>
    </Fragment>
  )
}
export default CreateText
