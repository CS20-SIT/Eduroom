import React, { Fragment,useState } from 'react'
import { useRouter } from 'next/router'
import EdqizText from './edqizText'
import style from '../../styles/edqiz/landing'
const Page3 = () => {
  const router = useRouter()
  const [data, setData] = useState([
    {
      roomid: "1",
      quizname: "quizname1",
      description: "this is a test of description1",
    },
    {
      roomid: "2",
      quizname: "quizname2",
      description: "this is a test of description2",
    },
    {
      roomid: "5",
      quizname: "quizname3",
      description: "this is a test of description3",
    },
    {
      roomid: "10",
      quizname: "quizname4",
      description: "this is a test of description4",
    },
  ]);
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
                {data[router.query.id-1].quizname}
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
