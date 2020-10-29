import React, { Fragment } from "react"
import GraderNav from "../../components/graderSubmit/GraderNav"
import Head from "next/head"

const Profile = () => {
  return (
    <Fragment>
      <Head>
        <title>Profile</title>
        <meta property="og:title" content="Profile" key="Profile" />
      </Head>
      <GraderNav></GraderNav>
      This is Profile Page
    </Fragment>
  )
}
export default Profile
