import React, { Fragment } from 'react'
import Header from '../layouts/header'
const Admin = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  )
}
export default Admin
