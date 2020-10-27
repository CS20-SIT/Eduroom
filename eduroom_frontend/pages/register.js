import React, { Fragment } from 'react'
import GeneralTemplate from '../components/template/general'
import RegisterContent from '../components/landing/register'
const Register = () => {
  return (
    <Fragment>
      <GeneralTemplate img={'/images/campaign_img.svg'}>
          <RegisterContent />
      </GeneralTemplate>      
    </Fragment>
  )
}
export default Register;
