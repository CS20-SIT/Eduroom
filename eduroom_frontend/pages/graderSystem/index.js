import React, { Fragment } from "react"
import Head from "next/head"
import style from "../../styles/graderSubmit/home"
import AnnounceBox from "../../components/graderSubmit/AnnounceBox"
import Layout from "../../components/graderSubmit/Layout"
import Image from 'next/image'
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
            <Image src="../../images/graderSubmit/pr_monochromatic.svg" />
          </div>
          <div className="content">
            <h2 style={{ color: "#5B5B5B", paddingTop: "20px" }}>
              ANNOUNCEMENTS
            </h2>
            <AnnounceBox />
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Home
