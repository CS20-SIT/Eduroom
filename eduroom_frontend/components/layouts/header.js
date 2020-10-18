import React, { Fragment } from 'react'
import Head from 'next/head'
const Header = () => {
  return (
    <Fragment>
      <Head>
        <title>Eduroom Project</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://kit.fontawesome.com/89b052f8c2.js" crossOrigin="anonymous"></script>
      </Head>
    </Fragment>
  )
}
export default Header
