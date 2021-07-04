import { Fragment, useContext, useEffect, useState } from 'react'
import style from '../../styles/landing/register'
import Image from 'next/image'
import RegisterBox from './registerBox'

const Register = () => {
	return (
		<Fragment>
			<div className="register">
				<div className="register-content">
					<div className="register-form">
						<RegisterBox />
					</div>
				</div>
				<div style={{ width: '50%', zIndex: '50', marginLeft: '5%' }}>
					<div style={{ width: '100%', paddingLeft: '10%' }}>
						<div style={{ paddingBottom: '5%' }}>
							<div>
								<h1 className="register-header">CREATE AN ACCOUNT</h1>
								<span style={{ color: '#3d467f', fontSize: '1.4em' }}>Let your education journey begin!</span>
							</div>
						</div>
						<Image alt="register-img" src="/images/register_img.svg" width="510" height="432" />
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Register
