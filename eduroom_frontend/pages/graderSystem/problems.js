import React, { Fragment } from "react"
import GraderNav from "../../components/graderSubmit/GraderNav"
import style from "../../styles/graderSubmit/problems/problems"
import Head from "next/head"

const Problems = () => {
  return (
    <Fragment>
      <Head>
        <title>Problems</title>
        <meta property="og:title" content="Problems" key="Problems" />
      </Head>
      <GraderNav></GraderNav>
      This is Problems Page
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Problems
