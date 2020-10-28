import React, { Fragment } from "react"
import Head from "react"
import GraderNav from "../../components/graderSubmit/GraderNav"
import Head from "next/head"

const Submission = () => {
  return (
    <Fragment>
      <Head>
        <title>Submissions</title>
        <meta property="og:title" content="Submissions" key="Submissions" />
      </Head>
      <GraderNav></GraderNav>
      This is submission Page
    </Fragment>
  )
}
export default Submission
