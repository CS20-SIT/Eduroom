import React, { Fragment } from 'react'
import GamePage from '../../components/edqiz/instructorGame'
import GeneralNoNav from '../../components/template/generalnonav'
const Content = () => {
  return (
    <Fragment>
      <GeneralNoNav>
      <GamePage/>
      </GeneralNoNav>
    </Fragment>
  )
}
export default Content
