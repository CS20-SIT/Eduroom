import React, { Fragment } from 'react'
import GeneralTemplate from '../components/template/general'
import LoginContent from '../components/landing/login'
const Login = () => {
  return (
    <Fragment>
      <GeneralTemplate>
          <LoginContent />
      </GeneralTemplate>
    </Fragment>
  )
}
export default Login
