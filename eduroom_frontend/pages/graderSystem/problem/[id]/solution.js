import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
// import style from "../../../../styles/graderSubmit/problems/"
import ProblemLayout from "../../../../components/graderSubmit/problems/ProblemLayout"

const Solution = () => {
  const [id, setId] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const ID = router.query.id
    setId(ID)
  }, [])

  return (
    <Fragment>
      <Layout page="problem">
        <div className="main">
          <div className="size">
            <Box>
              <ProblemLayout page="solution" id={id}>
                This is Problem Solution page
              </ProblemLayout>
            </Box>
          </div>
        </div>
      </Layout>
      {/* <style jsx>{style}</style> */}
    </Fragment>
  )
}
export default Solution
