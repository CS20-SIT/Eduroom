import React, { Fragment } from 'react'
import ManageEdqiz from '../../../components/edqiz/edqizManage'
import GeneralNoSide from "../../../components/template/generalnoside";
const EditPage = () => {
  return (
    <Fragment>
      <GeneralNoSide>
      <ManageEdqiz mode="edit"/>
      </GeneralNoSide>
    </Fragment>
  )
}
export default EditPage
