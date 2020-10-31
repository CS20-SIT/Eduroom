import React, { Fragment } from "react"
import Head from "next/head"
import style from "../../../styles/graderSubmit/contests/contestPage"
import Layout from "../../../components/graderSubmit/Layout"
import ContestHeader from "../../../components/graderSubmit/contests/ContestHeader"

const Contests = () => {
  return (
    <Fragment>
      <Head>
        <title>Contests</title>
        <meta property="og:title" content="Contests" key="Contests" />
      </Head>
      <Layout>
        <div className="main">
          <div className="box">
            <ContestHeader />
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Contests
