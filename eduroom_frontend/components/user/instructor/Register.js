import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import EvidenceUpload from './EvidenceUpload'
import InputText from '../../utils/InputText'
import Image from 'next/image'
import api from '../../../api'

const Register = (props) => {
	const [data, setData] = useState({
		degree: {
			label: 'Degree',
			name: 'degree',
			type: 'text',
			errorText: 'Degree is required',
			placeholder: 'Master of science',
			error: false,
			value: '',
		},

		expert: {
			label: 'Expert',
			name: 'expert',
			type: 'text',
			errorText: 'Expert is required',
			placeholder: 'Organic chemistry',
			error: false,
			value: '',
		},

		bio: {
			label: 'Bio',
			name: 'bio',
			type: 'text',
			errorText: 'Bio is required',
			placeholder: 'Lecturer at MIT',
			error: false,
			value: '',
		},
		degreePicture: null,
		expertPicture: null,
	})

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(true)
	useEffect(() => {
		console.log(data.degree.value.length, data.expert.value.length, data.bio.value.length)
		if (data.degree.value.length && data.expert.value.length && data.bio.value.length) {
			console.log('hello false')
			setError(false)
		} else {
			setError(true)
		}
	}, [data])
	const handleSubmit = async (body) => {
		try {
			setLoading(true)
			const res = await api.post('/api/instructor/register', body)
			setLoading(false)
			props.complete()
		} catch (err) {}
		setLoading(false)
	}

	const handleChange = (e) => {
		let temp = { ...data }
		temp[e.target.name].value = e.target.value
		setData(temp)
	}

	const handleClick = async (e) => {
		let formData = { degree: data.degree.value, expert: data.expert.value, bio: data.bio.value }
		const myForm = new FormData()
		myForm.append('evidence-degree-1', data.degreePicture)
		myForm.append('evidence-expert-1', data.expertPicture)
		const res = await api.post('/api/instructor/upload/evidence', myForm)
		console.log(res.data)
		const degreepath = res.data[0].linkUrl
		const expertpath = res.data[1].linkUrl
		formData.degreepath = degreepath
		formData.expertpath = expertpath
		console.log(formData)
		// handleSubmit(formData)
	}

	const changeDegreePic = (e) => {
		let newValue = e.target.files[0]
		setData({ ...data, degreePicture: newValue })
	}

	const changeExpertPic = (e) => {
		let newValue = e.target.files[0]
		setData({ ...data, expertPicture: newValue })
	}

	return (
		<Fragment>
			<div style={{ padding: '0 50px' }}>
				<h1 style={{ color: '#3D467F' }}>INSTRUCTOR REGISTER</h1>
				<div className="container">
					<Image
						className="login-page-img"
						alt="login-page-img"
						src="/images/instructor/register.svg"
						width="544"
						height="450"
					/>
					<div className="box">
						<form onSubmit={(e) => e.preventDefault()}>
							<InputText
								key={data.degree.name}
								label={data.degree.label}
								name={data.degree.name}
								placeholder={data.degree.placeholder}
								error={data.degree.error}
								type={data.degree.type}
								value={data.degree.value}
								errorText={data.degree.errorText}
								handleChange={handleChange}
								style={{ padding: '3.5%', margin: '6px 0' }}
							/>
							<EvidenceUpload
								index={0}
								data={data.degreePicture}
								handleData={changeDegreePic}
								label="Upload your degree evidence"
							></EvidenceUpload>

							<InputText
								key={data.expert.name}
								label={data.expert.label}
								name={data.expert.name}
								placeholder={data.expert.placeholder}
								error={data.expert.error}
								type={data.expert.type}
								value={data.expert.value}
								errorText={data.expert.errorText}
								handleChange={handleChange}
								style={{ padding: '3.5%', margin: '6px 0' }}
							/>
							<EvidenceUpload
								index={1}
								data={data.expertPicture}
								handleData={changeExpertPic}
								label="Upload your expert evidence"
							></EvidenceUpload>

							<InputText
								key={data.bio.name}
								label={data.bio.label}
								name={data.bio.name}
								placeholder={data.bio.placeholder}
								error={data.bio.error}
								type={data.bio.type}
								value={data.bio.value}
								errorText={data.bio.errorText}
								handleChange={handleChange}
								style={{ padding: '3.5%', margin: '6px 0' }}
							/>
							<div style={{ textAlign: 'center', paddingTop: '20px' }}>
								<button
									className={`submit ${loading || error ? 'disable' : ''}`}
									onClick={handleClick}
									disabled={loading || error}
								>
									SUBMIT
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.container {
						display: flex;
						justify-content: space-evenly;
					}
					.box {
						width: 50%;
						background: #ffffff;

						box-shadow: 6px 4px 19px rgba(0, 0, 0, 0.25);
						border-radius: 25px;
						padding: 60px;
					}
					.submit {
						padding: 10px 25px;
						background-color: #3d467f;
						border-radius: 30px;
						border: none;
						color: white;
						text-align: center;
						text-decoration: none;
						display: inline-block;
						font-size: 18px;
						outline: none;
					}
					.submit:hover {
						cursor: pointer;
					}
					.disable {
						opacity: 0.9;
					}
					.disable:hover {
						cursor: default;
					}
				`}
			</style>
		</Fragment>
	)
}

export default Register
