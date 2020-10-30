import React, { Fragment } from "react"
import GraderNav from "../../components/graderSubmit/GraderNav"
import Head from "next/head"

const Ranks = () => {
  return (
    <Fragment>
      <Head>
        <title>Ranks</title>
        <meta property="og:title" content="Ranks" key="Ranks" />
      </Head>
      <GraderNav></GraderNav>
      This is rank page
    </Fragment>
  )
}
export default Ranks
