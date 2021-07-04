import { Fragment, useState } from 'react'
import LoginBox from './loginBox'
import RegisterBox from './registerBox'

const AuthDialog = ({ handleClick, path = '/' }) => {
	const [page, setPage] = useState('login')
	const getStyle = (text) => {
		if (page == text) {
			return {
				color: '#3D467F',
				margin: '0px 6px',
				fontWeight: 'bold',
				fontSize: '1.1em',
			}
		} else {
			return {
				color: '#FB9CCB',
				margin: '0px 6px',
				fontWeight: 'bold',
				fontSize: '1.1em',
				textDecoration: 'underline',
			}
		}
	}
	return (
		<Fragment>
			<div className="modal">
				<div className="modal-content">
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<span
							style={getStyle('login')}
							onClick={() => {
								setPage('login')
							}}
						>
							login
						</span>
						<span
							style={getStyle('register')}
							onClick={() => {
								setPage('register')
							}}
						>
							register
						</span>
					</div>
					<div className="auth-box">
						{page == 'login' ? (
							<LoginBox path={path} handleSuccess={handleClick} />
						) : (
							<Fragment>
								<div style={{ display: 'flex', flexFlow: 'column', width: '95%' }}>
									<div style={{ fontSize: '1.8em', fontWeight: 'bold', color: '#3D467F' }}>SIGN IN</div>
									<RegisterBox path={path} handleSuccess={handleClick} />
								</div>
							</Fragment>
						)}
					</div>
				</div>

				<div className="modal-overlay" onClick={handleClick} />
			</div>
			<style jsx>
				{`
					.modal {
						position: fixed;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						display: flex;
						justify-content: center;
						align-items: center;
						z-index: 10;
					}
					.auth-box {
						display: flex;
						justify-content: center;
					}
					.modal-overlay {
						position: absolute;
						left: 0;
						top: 0;
						width: 100vw;
						height: 100vh;
						background: #00000040;
						display: flex;
						justify-content: center;
						align-items: center;
						z-index: 4;
					}
					.modal-content {
						background: white;
						width: 450px;
						height: auto;
						border-radius: 10px;
						z-index: 5;
						padding: 2.5%;
					}
				`}
			</style>
		</Fragment>
	)
}
export default AuthDialog
