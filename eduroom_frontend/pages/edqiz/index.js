import React, { Fragment, useState, useContext, useEffect } from 'react'
import LandingPage from '../../components/edqiz/edqizLanding'
import AuthDialog from '../../components/landing/authDialog'
import UserContext from '../../contexts/user/userContext'
import GeneralNoNav from '../../components/template/generalnonav'
const Content = () => {
  const [dialog, setDialog] = useState(false)
  const userContext = useContext(UserContext)
  const { user } = userContext
  useEffect(() => {
    if (!user) {
      setDialog(!dialog)
    }
  }, [user])

  return (
    <Fragment>
      <GeneralNoNav>
          {
            dialog ? (
              <AuthDialog handleClick={() => { setDialog(false) }} />
            ) : null
          }
          <LandingPage />
      </GeneralNoNav>
    </Fragment>
  )
}
export default Content
