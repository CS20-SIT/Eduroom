import React, { Fragment } from "react"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/problems/problemSolvePage"

const ProblemID = () => {
  return (
    <Fragment>
      <Layout>
        <div className="main">
          <div className="size">
            <Box>This is individual Problem page</Box>
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default ProblemID
