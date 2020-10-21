import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import EdquizText from './edqiz-text'
import style from '../../styles/edqiz/landing'
const Content = () => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="col-12">
            <div className="landing-title">
              <EdquizText />
            </div>
            <div className="row">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="GAME PIN.."
              />
            </div>
            <div className="row">
              <button
                className="landing-button"
                onClick={() => router.push('/login')}
              >
                <span className="landing-button-text">ENTER</span>
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>
            Do your own at <span className="purple">eduroom.me</span>
          </span>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Content
