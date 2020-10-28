import React, { Fragment } from "react"
import GraderNav from "../../components/graderSubmit/GraderNav"
import Head from "next/head"

const Announcement = () => {
  return (
    <Fragment>
      <Head>
        <title>Announcements</title>
        <meta property="og:title" content="Announcements" key="Announcements" />
      </Head>
      <GraderNav></GraderNav>
      <div>This is an announcement Page</div>
    </Fragment>
  )
}
export default Announcement
