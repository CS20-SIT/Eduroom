import React, { Fragment } from "react"
import Head from "next/head"
import Layout from "../../../components/graderSubmit/Layout"
import style from "../../../styles/graderSubmit/problems/problems"

const Problems = () => {
  return (
    <Fragment>
      <Head>
        <title>Problems</title>
        <meta property="og:title" content="Problems" key="Problems" />
      </Head>
      <Layout>This is Problems Page</Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Problems
