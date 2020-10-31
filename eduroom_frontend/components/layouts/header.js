import React, { Fragment } from 'react'
import Head from 'next/head'
const Header = () => {
  return (
    <Fragment>
      <Head>
        <title>Eduroom Project</title>
        <link rel="icon" href="/images/sidenav/eduroom_logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="title" content="Eduroom" />
        <meta name="description" content="Eduroom Online Learning platform" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eduroom.cscms.me" />
        <meta property="og:title" content="Eduroom" />
        <meta
          property="og:description"
          content="Eduroom Online Learning platform"
        />
        <meta property="og:image" content="http://eduroom.cscms.me/images/sidenav/eduroom_logo.png" />
<meta property="og:image:secure_url" content="https://eduroom.cscms.me/images/sidenav/eduroom_logo.png" /> 
<meta property="og:image:type" content="image/jpeg" /> 
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eduroom.cscms.me" />
        <meta property="twitter:title" content="Eduroom" />
        <meta
          property="twitter:description"
          content="Eduroom Online Learning platform"
        />
        <meta
          property="twitter:image"
          content="https://eduroom.cscms.me/images/sidenav/eduroom_logo.png"
        />
      </Head>
    </Fragment>
  )
}
export default Header
