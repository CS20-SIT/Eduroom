import React, { Fragment } from "react"
import GraderNav from "../../components/graderSubmit/GraderNav"
import Head from "next/head"

const Contests = () => {
  return (
    <Fragment>
      <Head>
        <title>Contests</title>
        <meta property="og:title" content="Contests" key="Contests" />
      </Head>
      <GraderNav></GraderNav>
      This is contest page
    </Fragment>
  )
}
export default Contests
