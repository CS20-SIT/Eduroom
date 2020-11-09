import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/contests/contestPage/contestSubmissionPage"
import ContestLayout from "../../../../components/graderSubmit/contests/ContestLayout"

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
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      Result
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      Score
                    </div>
                    <div className="flex-item" style={{ flexGrow: "3" }}>
                      Language
                    </div>
                  </div>
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
