import '../styles/globals.css'
import '../styles/all.css'
import React, { Fragment } from 'react'
const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
