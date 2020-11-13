import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../../components/graderSubmit/Box"
import Layout from "../../../../../components/graderSubmit/Layout"
import style from "../../../../../styles/graderSubmit/contests/contestPage/problem/contestProblemPage"
import ContestLayout from "../../../../../components/graderSubmit/contests/ContestLayout"
import ContestProblemList from "../../../../../components/graderSubmit/contests/allList/ContestProblemList"

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
                    <div className="flex-item" style={{ flexBasis: "15%" }}>
                      No
                    </div>
                    <div className="flex-item" style={{ flexBasis: "25%" }}>
                      Title
                    </div>
                    <div className="flex-item" style={{ flexBasis: "30%" }}>
                      Total Score
                    </div>
                    <div className="flex-item" style={{ flexBasis: "30%" }}>
                      AC Rate
                    </div>
                  </div>
                  <ContestProblemList
                    number="01"
                    title="CSC102"
                    total="20"
                    rate="39.08%"
                  />
                  <ContestProblemList
                    number="02"
                    title="CSC212"
                    total="10"
                    rate="99.00%"
                  />
                  <ContestProblemList
                    number="03"
                    title="CSC256"
                    total="20"
                    rate="25.00%"
                  />
                  <ContestProblemList
                    number="04"
                    title="CSC189"
                    total="20"
                    rate="13.33%"
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
export default contestProblemOverview
