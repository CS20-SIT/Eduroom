import React, { Fragment, useEffect, useState } from "react"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
// import style from "../../../../styles/graderSubmit/problems/"
import ProblemLayout from "../../../../components/graderSubmit/problems/ProblemLayout"
import { useRouter } from "next/router"

const Discussion = () => {
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
              <ProblemLayout page="discussion" id={id}>
                This is Problem Discussion page
              </ProblemLayout>
            </Box>
          </div>
        </div>
      </Layout>
      {/* <style jsx>{style}</style> */}
    </Fragment>
  )
}
export default Discussion
