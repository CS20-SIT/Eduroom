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
      <style jsx>
        {`      
            .landing {
                width: 100vw;
                display: flex;
                justify-content: flex-end;
                padding: 2% 5% 0% 5%;
                cursor: default;
            }
            .landing-img {
                width: 55%;
            }
            .landing-content {
                position: absolute;
                left: 7%;
                top: 24%;
                font-family: 'Quicksand', sans-serif;
              }
              .landing-header {
                font-size: 3em;
                font-family: 'Lato', sans-serif;
                font-weight: bold;
                color: #3D467F;
              }
              .landing-description {
                padding: 5% 0% 10% 0%;
                font-size: 1.1em;
                font-family: 'Quicksand', sans-serif;
                font-weight: 600;
                color: #5B5B5B;
              }
              .landing-button {
                background: #FE75B7;
                border-radius: 25px;
                padding: .5rem 1.5rem;
                border: none;
                cursor: pointer;
            }
            .landing-button-text{
                color: white;
                font-weight: 700;
                font-size: 1.2em;
                font-family: 'Quicksand', sans-serif;
            }
          `}
      </style>
    </Fragment>
  )
}
export default Content
