import { Fragment, useContext, useEffect } from 'react'
import GeneralTemplate from '../components/template/general'
import LoginContent from '../components/landing/login'
import UserContext from '../contexts/user/userContext'
import { useRouter } from 'next/router'
const Login = () => {
	const userContext = useContext(UserContext)
	const { user } = userContext
	const router = useRouter()
	useEffect(() => {
		if (user) {
			router.push('/')
		}
	}, [user])
	return (
		<Fragment>
			<GeneralTemplate>
				<LoginContent />
			</GeneralTemplate>
		</Fragment>
	)
}
export default Login
