import React, { Fragment } from 'react'
import AdminTemplate from '../../components/template/admin'
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
