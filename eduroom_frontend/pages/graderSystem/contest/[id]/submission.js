import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/contests/contestPage/submission/contestSubmissionPage"
import ContestLayout from "../../../../components/graderSubmit/contests/ContestLayout"
import ContestSubmissionList from "../../../../components/graderSubmit/contests/allList/ContestSubmissionList"

const contestSubmission = () => {
  const [id, setId] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const ID = router.query.id
    setId(ID)
  }, [])

  return (
    <Fragment>
      <Layout page="contest">
        <div className="main">
          <div className="size">
            <Box>
              <ContestLayout page="submission" id={id}>
                <center>
                  <h2>SUBMISSIONS</h2>
                </center>
                <div className="submission-list">
                  <div className="flex-container">
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Time
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Author
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Status
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Problem
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Language
                    </div>
                  </div>
                  <ContestSubmissionList
                    time="2020-10-21 18:27:22"
                    author="Anya Smith"
                    status="Accepted"
                    problem="1"
                    language="Python"
                  />
                  <ContestSubmissionList
                    time="2020-10-21 18:27:22"
                    author="Anya Smith"
                    status="Wrong"
                    problem="1"
                    language="Java"
                  />
                  <ContestSubmissionList
                    time="2020-10-21 18:27:22"
                    author="Anya Smith"
                    status="Accepted"
                    problem="1"
                    language="C"
                  />
                </div>
              </ContestLayout>
            </Box>
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default contestSubmission
