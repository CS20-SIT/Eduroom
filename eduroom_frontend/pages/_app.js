import '../styles/globals.css'
import '../styles/all.css'
import { Fragment,useEffect } from 'react'
import UserState from '../contexts/user/userState'
import NavState from '../contexts/landing/navState'
import AdminState from '../contexts/admin/adminState'
import Container from '../components/container'

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])
	return (
		<Fragment>
			<NavState>
				<UserState>
					<AdminState>
						<Container>
							<Component {...pageProps} />
						</Container>
					</AdminState>
				</UserState>
			</NavState>
		</Fragment>
	)
}

export default MyApp
