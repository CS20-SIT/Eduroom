import React, { Fragment, useContext, useState, useEffect } from 'react'
import LandingPage from '../../components/edqiz/edqizLanding'
import GeneralNoNav from "../../components/template/generalnonav";
import UserContext from '../../contexts/user/userContext';
import AuthDialog from '../../components/landing/authDialog';
const Content = () => {
  const userContext = useContext(UserContext)
  const {user} = userContext;
  const [dialog,setDialog] = useState(false);
  useEffect(() => {
    if(!user){
      setDialog(!dialog)
    }
  }, [])
  return (
    <Fragment>
      <GeneralNoNav>
        {
          dialog ? (
            <AuthDialog handleClick={()=>{setDialog(false)}}/>
          ):null
        }
        <LandingPage />
      </GeneralNoNav>
    </Fragment>
  )
}
export default Content
