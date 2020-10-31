import React, { Fragment } from "react"
import Head from "next/head"
import style from "../../styles/graderSubmit/home"
import AnnounceBox from "../../components/graderSubmit/announcements/AnnounceBox"
import Layout from "../../components/graderSubmit/Layout"
import ContestBox from "../../components/graderSubmit/contests/ContestBox"

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="Home" />
      </Head>
      <Layout>
        <div className="page">
          <div className="graphic">
            <img
              src="/images/graderSubmit/pr_monochromatic.svg"
              width="479"
              height="440"
            />
          </div>
          <div className="content">
            <ContestBox />
            <AnnounceBox />
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Home
