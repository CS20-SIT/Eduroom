import React, { Fragment, useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../../styles/landing/login'
import Image from 'next/image'
import UserContext from '../../contexts/user/userContext'
import { validateEmail } from '../../utils/validate'
const Content = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [loading, setLoading] = useState(false)
	const userContext = useContext(UserContext)
	const { loginUser } = userContext
	const router = useRouter()
	const handleEmail = (e) => {
		if (e.target.value.length === 0) setEmailError('Email is required')
		else setEmailError('')
		setEmail(e.target.value)
	}
	const handlePassword = (e) => {
		if (e.target.value.length === 0) setPasswordError('Password is required')
		else setPasswordError('')
		setPassword(e.target.value)
	}
	const handleLogin = async () => {
		if (email == '' || password == '') {
			if (email == '') {
				setEmailError('Email is required')
			} else if (!validateEmail(email)) {
				setEmailError('Email is not valid')
			} else {
				setEmailError('')
			}
			if (password == '') {
				setPasswordError('Password is required')
			} else {
				setPasswordError('')
			}
		} else {
			const body = { email, password }
			setLoading(true)
			await loginUser(body, router)
			setLoading(false)
			setPasswordError(userContext.err)
		}
	}
	const googleLogin = async () => {
		window.location.pathname = '/api/auth/google'
	}

	return (
		<Fragment>
			<div className="login">
				<div className="login-content">
					<div className="login-header">
						WELCOME BACK <br />
					</div>
					<div className="login-description">
						new here?
						<Link href="/register">
							<span className="register-link" id="login-sign-btn">
								create an account
							</span>
						</Link>
					</div>
					<div className="login-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<label>
								<input
									name="email"
									className="login-textfield"
									id="login-email-field"
									type="text"
									placeholder="Email"
									onChange={(e) => handleEmail(e)}
								/>
								{emailError != '' ? (
									<div className="error" id="email-error">
										{emailError}
									</div>
								) : null}
							</label>
							<label>
								<input
									className="login-textfield"
									name="password"
									type="password"
									id="login-password-field"
									placeholder="Password"
									onChange={(e) => handlePassword(e)}
								/>
								{passwordError != '' ? (
									<div className="error" id="password-error">
										{passwordError}
									</div>
								) : null}
							</label>

							<button
								className="login-button"
								id="login-btn-submit"
								disabled={loading}
								style={loading ? { opacity: '0.6' } : {}}
								onClick={handleLogin}
							>
								<span className="login-button-text">Log In</span>
							</button>
							<div className="or-text">
								<div className="striaght-line"></div>
								<span className="or-text-text">or</span>
								<div className="striaght-line"></div>
							</div>
							<button className="login-google-button" id="login-oauth" onClick={googleLogin}>
								<div className="login-google-button-text">
									<img src="/images/google-logo.png" alt="google-icon" className="google-logo" />
									<span>Sign In With Google</span>
								</div>
							</button>
						</form>
					</div>
				</div>
				<div style={{ marginLeft: '5%' }}>
					<Image className="login-page-img" alt="login-page-img" src="/images/login-img.svg" width="544" height="450" />
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(context) {
	console.log(context.req.headers.referer)
}

export default Content
