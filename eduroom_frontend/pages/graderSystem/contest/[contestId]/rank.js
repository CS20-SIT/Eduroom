import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/contests/contestPage/rank/contestRankPage"
import ContestLayout from "../../../../components/graderSubmit/contests/ContestLayout"
import ContestRankList from "../../../../components/graderSubmit/contests/allList/ContestRankList"

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
                    <div className="flex-item" style={{ flexBasis: "10%" }}>
                      Rank
                    </div>
                    <div className="flex-item" style={{ flexBasis: "60%" }}>
                      Name
                    </div>
                    <div className="flex-item" style={{ flexBasis: "30%" }}>
                      Total Score
                    </div>
                  </div>
                  <ContestRankList rank="1" name="Anya Eiyaaa" score="240" />
                  <ContestRankList rank="2" name="Vegete Kak" score="190" />
                  <ContestRankList rank="3" name="Fufu Kung" score="120" />
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
