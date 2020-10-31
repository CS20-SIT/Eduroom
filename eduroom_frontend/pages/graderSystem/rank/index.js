import React, { Fragment } from "react"
import Head from "next/head"
import Layout from "../../../components/graderSubmit/Layout"

const Ranks = () => {
  return (
    <Fragment>
      <Head>
        <title>Ranks</title>
        <meta property="og:title" content="Ranks" key="Ranks" />
      </Head>
      <Layout>This is rank page</Layout>
    </Fragment>
  )
}
export default Ranks
