import React, { Fragment } from 'react'
import Navbar from '../layouts/navbar'
import Header from '../layouts/header'
const General = (props) => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  )
}
export default General
