import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import EdqizText from './edqizText'
import style from '../../styles/edqiz/landing'
const Page3 = ({question}) => {
  const router = useRouter()
  // console.log(router.query.id)
  // console.log(question)
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="col-12">
            <div className="landing-title">
              <EdqizText type="edqiz" />
            </div>
            <div className="landing-title">
              <div
                style={{ fontWeight: 600, fontSize: "2rem", color: "#3D467F" }}
              >
                {" "}
                Quiz name
              </div>
            </div>
            <div className="row">
              <div
                style={{
                  backgroundColor: "#EFF0F6",
                  height: "8vh",
                  width: "25vw",
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  color: "#5B5B5B",
                }}
              >
                {" "}
                {router.query.id}
                {/* query database by using id */}
              </div>
            </div>
            <div className="row">
              <button
                className="landing-button"
                onClick={() => router.push(`/edqiz/waitingRoom/${router.query.id}`)}
              >
                <span className="landing-button-text">Launch {">"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Page3;
