import React, { Fragment } from 'react'
import AdminTemplate from '../../components/admin/template/login'
import LoginContent from '../../components/admin/login'
const Login = () => {
  return (
    <Fragment>
      <AdminTemplate>
          <LoginContent />
      </AdminTemplate>
    </Fragment>
  )
}
export default Login
