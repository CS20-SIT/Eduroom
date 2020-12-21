import React, { Fragment, useContext, useState, useEffect } from 'react'
import LandingPage from '../../components/edqiz/edqizLanding'
import GeneralTemplate from '../../components/edqiz/general'
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
      <GeneralTemplate  >
        {
          dialog ? (
            <AuthDialog handleClick={()=>{setDialog(false)}}/>
          ):null
        }
        
        <LandingPage />
      </GeneralTemplate>

    </Fragment>
  )
}
export default Content
