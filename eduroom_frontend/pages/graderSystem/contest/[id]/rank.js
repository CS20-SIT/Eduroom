import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/contests/contestPage/contestRankPage"
import ContestLayout from "../../../../components/graderSubmit/contests/ContestLayout"

const contestRank = () => {
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
              <ContestLayout page="rank" id={id}>
                <center>
                  <h2>Ranks</h2>
                </center>
                <div className="graphics">
                  <img src="../../../../images/graderSubmit/report_analysis.svg" />
                  <div className="graph-box">
                    <p>This is the graph :)</p>
                    <div className="actual-graph"></div>
                  </div>
                </div>
                <div className="submission-list">
                  <div className="flex-container">
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      Rank
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1.8" }}>
                      Name
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      Total Score
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      1st Test
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      2nd Test
                    </div>
                    <div className="flex-item" style={{ flexGrow: "2" }}>
                      3rd Test
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
export default contestRank
