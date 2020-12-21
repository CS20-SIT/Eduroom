import React, { Fragment } from 'react'
import Header from '../../layouts/header'
const AdminTemplate = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  )
}
export default AdminTemplate
