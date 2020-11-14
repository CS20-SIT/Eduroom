import React, { Fragment } from "react"
import Head from "next/head"
import Layout from "../../../components/graderSubmit/Layout"

const Profile = () => {
  return (
    <Fragment>
      <Head>
        <title>Profile</title>
        <meta property="og:title" content="Profile" key="Profile" />
      </Head>
      <Layout page="profile">This is Profile Page</Layout>
    </Fragment>
  )
}
export default Profile
