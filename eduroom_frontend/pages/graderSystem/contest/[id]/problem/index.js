import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../../components/graderSubmit/Box"
import Layout from "../../../../../components/graderSubmit/Layout"
import style from "../../../../../styles/graderSubmit/contests/contestPage/contestProblemPage"
import ContestLayout from "../../../../../components/graderSubmit/contests/ContestLayout"

const contestProblemOverview = () => {
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
              <ContestLayout page="problem" id={id}>
                <center>
                  <h2>PROBLEM LIST</h2>
                </center>
                <div className="problem-list">
                  <div className="flex-container">
                    <div className="flex-item" style={{ flexGrow: "1" }}>
                      No
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1" }}>
                      Title
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1" }}>
                      Total
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1" }}>
                      AC Rate
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
export default contestProblemOverview
