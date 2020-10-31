import React, { Fragment } from "react"
import Head from "next/head"
import Layout from "../../../components/graderSubmit/Layout"

const Submission = () => {
  return (
    <Fragment>
      <Head>
        <title>Submissions</title>
        <meta property="og:title" content="Submissions" key="Submissions" />
      </Head>
      <Layout>This is submission Page</Layout>
    </Fragment>
  )
}
export default Submission
