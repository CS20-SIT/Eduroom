import React, { Fragment } from "react"
import Head from "next/head"
import style from "../../../styles/graderSubmit/contests/contestPage"
import Box from "../../../components/graderSubmit/Box"
import Layout from "../../../components/graderSubmit/Layout"
import ContestHeader from "../../../components/graderSubmit/contests/ContestPageHeader"
import ContestList from "../../../components/graderSubmit/contests/ContestPageList"

const Contests = () => {
  return (
    <Fragment>
      <Head>
        <title>Contests</title>
        <meta property="og:title" content="Contests" key="Contests" />
      </Head>
      <Layout>
        <div className="main">
          <div className="size">
            <Box>
              <ContestHeader>
                <ContestList />
                <ContestList />
                <ContestList />
                <ContestList />
                <ContestList />
              </ContestHeader>
            </Box>
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Contests
