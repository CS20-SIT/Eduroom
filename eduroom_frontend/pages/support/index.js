import { Fragment } from 'react'
import style from '../../styles/forum/showForum'
import SupportPage from '../../components/support/supportPage'

const Support = () => {
	return (
		<Fragment>
			<div
				style={{
					display: 'flex',
					flex: '1 1 auto',
					justifyContent: 'space-between',
					background: '#EFF0F6',
				}}
			>
				<div id="nav">
					<SupportPage />
				</div>
				<main></main>

				<style jsx>{style}</style>
				<style jsx>
					{`
						#nav {
							width: 100%;
						}
						.form {
							display: flex;
							text-align: center;
						}
						.sub {
							display: flex;
							width: 100%;
							justify-content: center;
						}
						.inner {
							width: 25%;
						}
						.paper {
							margin: 5%;
						}
						.top {
							padding: 50px 70px 0px 70px;
						}
					`}
				</style>
			</div>
		</Fragment>
	)
}
export default Support
