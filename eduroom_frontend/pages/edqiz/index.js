import { Fragment, useContext, useState, useEffect } from 'react'
import LandingPage from '../../components/edqiz/edqizLanding'
import GeneralTemplate from '../../components/edqiz/general'
import UserContext from '../../contexts/user/userContext'
import AuthDialog from '../../components/landing/authDialog'
const Content = () => {
	const userContext = useContext(UserContext)
	const { user } = userContext
	const [dialog, setDialog] = useState(false)
	useEffect(() => {
		if (!user) {
			setDialog(true)
		} else {
			setDialog(false)
		}
	}, [user])
	return (
		<Fragment>
			<GeneralTemplate>
				{dialog ? (
					<AuthDialog
						handleClick={() => {
							setDialog(false)
						}}
						path={'/edqiz'}
					/>
				) : null}

				<LandingPage />
			</GeneralTemplate>
		</Fragment>
	)
}
export default Content
