import React, { Fragment } from 'react'
import ManageEdqiz from '../../components/edqiz/edqizManage'
import GeneralNoSide from "../../components/template/generalnoside";
const CreatePage = () => {
  return (
    <Fragment>
      <GeneralNoSide>
      <ManageEdqiz mode="create"/>
      </GeneralNoSide>
    </Fragment>
  )
}
export default CreatePage
