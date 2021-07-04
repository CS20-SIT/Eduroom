import { Fragment, useContext, useState } from 'react'
import Image from 'next/image'
import UserContext from '../../contexts/user/userContext'
import api from '../../api'
const VerifyAccount = () => {
	const userContext = useContext(UserContext)
	const { user } = userContext
	const handleResend = () => {
		try {
			if (user) {
				api.post('/api/auth/verify/resend').catch(() => {})
			}
		} catch (err) {}
	}
	return (
		<Fragment>
			<div
				className="verify-box"
				style={{
					backgroundImage: 'url(/images/verify/verify-bg.svg)',
					width: '100vw',
					height: '100vh',
					position: 'absolute',
					top: '0',
					left: '0',
					backgroundPosition: 'center',
					backgroundSize: 'auto',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="verify-text">Thank you for registration</div>
				<div className="verify-image">
					<Image src="/images/verify/verify_sent.svg" width="390" height="360" alt="verify-image" />
				</div>
				<div className="verify-head">Verify your email address</div>
				<div className="verify-text">Please click on the link that has just been sent to your email account</div>
				<div className="verify-text">to verify your email and continue registration process</div>
				<div className="re-btn" onClick={handleResend}>
					<div className="re-text">Resend Email</div>
				</div>
			</div>
			<style jsx>
				{`
					.verify-box {
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						flex-flow: column;
						padding: 1rem;
						cursor: default;
					}
					.verify-image {
						margin: 0.2rem 0;
					}
					.verify-text {
						font-weight: bold;
						font-size: 1.1em;
						color: #a7abc5;
					}
					.verify-head {
						font-weight: bold;
						font-size: 2.4em;
						color: #3d467f;
						margin-bottom: 0.4rem;
						text-transform: uppercase;
					}
					.re-btn {
						padding: 0.5rem 1.5rem;
						border-radius: 25px;
						border: 1px solid #3d467f;
						margin-top: 1.2rem;
						cursor: pointer;
						color: #3d467f;
					}
					.re-btn :hover {
						background: #3d467f;
						color: #ffffff;
					}
					.re-text {
						font-weight: bold;
						font-size: 1.2em;
					}
				`}
			</style>
		</Fragment>
	)
}
export default VerifyAccount
