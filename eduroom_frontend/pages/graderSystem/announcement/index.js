import React, { Fragment } from "react"
import Head from "next/head"
import GraderNav from "../../../components/graderSubmit/GraderNav"
import Layout from "../../../components/graderSubmit/Layout"

const Announcement = () => {
  return (
    <Fragment>
      <Head>
        <title>Announcements</title>
        <meta property="og:title" content="Announcements" key="Announcements" />
      </Head>
      <Layout>This is an announcement Page</Layout>
    </Fragment>
  )
}
export default Announcement
