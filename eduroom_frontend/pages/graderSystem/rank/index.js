import React, { Fragment } from "react"
import Head from "next/head"
import Box from "../../../components/graderSubmit/Box"
import Layout from "../../../components/graderSubmit/Layout"

const Ranks = () => {
  return (
    <Fragment>
      <Head>
        <title>Ranks</title>
        <meta property="og:title" content="Ranks" key="Ranks" />
      </Head>
      <Layout page="rank">
        <Box>This is rank page</Box>
      </Layout>
    </Fragment>
  )
}
export default Ranks
