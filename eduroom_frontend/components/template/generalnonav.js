import React, { Fragment } from 'react'
import Header from '../layouts/header'
const GeneralNonav = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  )
}
export default GeneralNonav
