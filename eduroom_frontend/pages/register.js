import React, { Fragment } from 'react'
import GeneralTemplate from '../components/template/general'
import RegisterContent from '../components/landing/register'
import UserContext from '../contexts/user/userContext'
import { useRouter } from 'next/router'
const Register = () => {
  const userContext = useContext(UserContext)
  const { user } = userContext
  const router = useRouter()
  useEffect(()=>{
    if(user){
      router.push('/')
    }
  },[user])
  return (
    <Fragment>
      <GeneralTemplate img={'/images/register_bg.svg'}>
          <RegisterContent />
      </GeneralTemplate>      
    </Fragment>
  )
}
export default Register;
