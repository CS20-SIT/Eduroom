import React, { Fragment } from 'react'

// This component is only html template that use for send mail :)

const VerifyTemplate = () => {
	return (
		<Fragment>
			<div className="verify-box">
				<img src="https://eduroom.cscms.me/images/verify/eduroom_logo_long.sv" alt="eduroom_logo" />
				<div className="verify-image">
					<img src="https://eduroom.cscms.me/images/verify/verify_sent.svg" alt="verify-image" />
				</div>
				<div className="verify-head">Verify your email address</div>
				<div className="verify-text">Welcome to <a href="https://eduroom.cscms.me" style={{color:'#FB9CCB'}}>eduroom.cscms.me</a></div>
				<div className="verify-text">Please click the button below to comfirm </div>
				<div className="verify-text">your email address and activate your account.</div>
				<div className="ver-btn">
					<div className="ver-text">Verify</div>
				</div>
				<div className="verify-text">
					You’re receiving this email because you recently created a new Eduroom account.
				</div>
				<div className="verify-text">if this wasn’t you, please ignore this email</div>
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
						font-weight: 500;
						font-size: 1.1em;
						color: #a7abc5;
					}
					.verify-head {
						font-weight: bold;
						font-size: 1.5em;
						color: #3d467f;
						margin-bottom: 0.4rem;
						text-transform: uppercase;
					}
					.ver-btn {
						padding: 0.5rem 1.5rem;
						border-radius: 25px;
						border: 1px solid #3d467f;
						margin-top: 1.2rem;
						cursor: pointer;
						background: #3d467f;
						color: #ffffff;
					}
					.ver-text {
						font-weight: bold;
						font-size: 1.2em;
					}
				`}
			</style>
		</Fragment>
	)
}
export default VerifyTemplate
