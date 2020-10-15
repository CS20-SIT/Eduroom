import React, { Fragment } from 'react'
const Content = () => {
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="landing-header">
            WELCOME TO <br />
            <span style={{ fontSize: '1.3em' }}>EDUROOM</span>
          </div>
          <div className="landing-description">
            Neque porro quisquam est qui dolorem <br />
            ipsum quia dolor sit amet, consectetur, adipisci
          </div>
          <button className="landing-button">
            <span className="landing-button-text">GET STARTED</span>
          </button>
        </div>
        <img className="landing-img" alt="landing-img" src="images/landing_img.svg" />
      </div>
    </Fragment>
  )
}
export default Content
