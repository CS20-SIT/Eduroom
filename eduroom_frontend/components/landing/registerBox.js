import React, { Fragment, useContext, useEffect, useState } from 'react'
import style from '../../styles/landing/register'
import UserContext from '../../contexts/user/userContext'
import InputText from '../utils/InputText'
import { useRouter } from 'next/router'

const RegisterBox = ({path ='/',handleSuccess=()=>{}}) => {
	const [loading, setLoading] = useState(false)
	const userContext = useContext(UserContext)
	const { registerUser } = userContext
	const registerError = userContext.err
	const router = useRouter()

	const handleChange = (e) => {
		let temp = { ...data }
		temp[e.target.name].value = e.target.value
		if (e.target.value.length === 0) {
			temp[e.target.name].error = true
		} else {
			temp[e.target.name].error = false
		}
		setData(temp)
	}

	const [data, setData] = useState({
		firstname: {
			label: 'First Name',
			name: 'firstname',
			type: 'text',
			errorText: 'First Name is required',
			placeholder: 'First Name',
			error: false,
			value: '',
		},

		lastname: {
			label: 'Last Name',
			name: 'lastname',
			type: 'text',
			errorText: 'Last Name is required',
			placeholder: 'Last Name',
			error: false,
			value: '',
		},

		email: {
			label: 'Email',
			name: 'email',
			type: 'email',
			errorText: 'Email is required',
			placeholder: 'Email',
			error: false,
			value: '',
		},
		password: {
			label: 'Password',
			name: 'password',
			type: 'password',
			errorText: 'Password is required',
			placeholder: 'Password',
			error: false,
			value: '',
		},
	})

	const handleClick = async (e) => {
		let temp = { ...data }
		let i = -1
		Object.keys(temp).map((el) => {
			if (temp[el].value == '') {
				temp[el].error = true
				if (i == -1) {
					i = el
				}
			} else {
				temp[el].error = false
			}
		})
		if (i != -1) {
			document.getElementsByName(data[i].name)[0].focus()
		} else {
			const formData = {}
			Object.keys(temp).map((el) => {
				formData[el] = temp[el].value
			})
			setLoading(true)
			await registerUser(formData, router,path,()=>{handleSuccess()})
			setLoading(false)
		}
		setData(temp)
	}

	const handleGoogleLogin = () => {
		window.location.pathname = '/api/auth/google'
	}

	return (
		<Fragment>
				<form style={{ width: '100%' }} onSubmit={(e) => e.preventDefault()}>
					{Object.keys(data).map((el) => {
						return (
							<InputText
								key={data[el].name}
								label={data[el].label}
								name={data[el].name}
								placeholder={data[el].placeholder}
								error={data[el].error}
								type={data[el].type}
								value={data[el].value}
								errorText={data[el].errorText}
								handleChange={handleChange}
								style={{ padding: '3.5%', margin: '6px 0' }}
							/>
						)
					})}
					{registerError ? <div className="error">{registerError}</div> : null}
					<div style={{ textAlign: 'center' }}>
						<button
							className="register-button"
							id="register-btn"
							disabled={loading}
							onClick={handleClick}
							style={loading ? { opacity: '0.6' } : {}}
						>
							<span className="register-button-text">Register</span>
						</button>
						<div className="or-text">
							<div className="striaght-line"></div>
							<span className="or-text-text">or</span>
							<div className="striaght-line"></div>
						</div>
						<button className="register-google-button" onClick={handleGoogleLogin} id="register-oauth">
							<div className="register-google-button-text">
								<img src="/images/google-logo.png" alt="google-icon" className="google-logo" />
								<span>Sign Up With Google</span>
							</div>
						</button>
					</div>
				</form>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default RegisterBox
