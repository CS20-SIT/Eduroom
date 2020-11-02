import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import EdqizText from './edqizText'
import style from '../../styles/edqiz/landing'
const Page3 = ({data,questionNumber}) => {
  const router = useRouter()
  return (
    <Fragment>  
      <div className="landing">
        <div className="landing-content">
          <div className="col-12">
            <div className="landing-title">
              <EdqizText type="edqiz"/>
            </div>
            <div className="landing-title">
             <div style={{fontWeight:600,fontSize:'2rem',color:'#3D467F'}}> Quiz name</div>
            </div>
            <div className="row">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder={data[questionNumber].quizname}
              />
            </div>
            <div className="row">
              <button
                className="landing-button"
                onClick={() => router.push('/login')}
              >
                <span className="landing-button-text">Launch {">"}</span>
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
export default Page3
