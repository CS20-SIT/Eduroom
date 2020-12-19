import React, { Fragment } from 'react'
import Image from 'next/image'
const VerifyAccount = () => {
	return (
		<Fragment>
			<div className="verify-box">
				<div className="verify-text">Thank you for registration</div>
				<div className="verify-image">
					<Image src="/images/verify/verify_sent.svg" width="390" height="360" alt="verify-image" />
				</div>
				<div className="verify-head">Verify your email address</div>
				<div className="verify-text">Please click on the link that has just been sent to your email account</div>
				<div className="verify-text">to verify your email and continue registration process</div>
				<div className="re-btn">
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
                        margin: .2rem 0;
                    }
					.verify-text {
						font-weight: bold;
						font-size: 1.1em;
						color: #a7abc5;
					}
					.verify-head {
						font-weight: bold;
						font-size: 2.4em;
                        color: #3D467F;
                        margin-bottom: .4rem;
						text-transform: uppercase;
                    }
                    .re-btn {
                        padding: .5rem 1.5rem;
                        border-radius: 25px;
                        border: 1px solid #3D467F;
                        margin-top: 1.2rem;
                        cursor: pointer;
                        color: #3D467F;
                    }
                    .re-btn :hover{
                        background: #3D467F;
                        color: #FFFFFF;
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
