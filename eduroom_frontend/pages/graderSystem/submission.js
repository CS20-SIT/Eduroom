import React, { Fragment } from "react"
import Head from "next/head"
import Box from "../../components/graderSubmit/Box"
import Layout from "../../../components/graderSubmit/Layout"

const Submission = () => {
  return (
    <Fragment>
      <Head>
        <title>Submissions</title>
        <meta property="og:title" content="Submissions" key="Submissions" />
      </Head>
      <Layout>
        <Box>This is submission Page</Box>
      </Layout>
    </Fragment>
  )
}
export default Submission
