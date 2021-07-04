import { Fragment, useState } from 'react'
import TextField from './textfield'
import api from '../../../api'
const EditPassword = ({ handleClose }) => {
	const field = [
		{
			placeholder: 'Old Password',
			name: 'oldPassword',
		},
		{
			placeholder: 'New Password',
			name: 'newPassword',
		},
	]
	const [alert, setAlert] = useState('')
	const handleChange = (e) => {
		setEditValue({ ...editValue, [e.target.name]: e.target.value })
	}
	const handleSubmit = () => {
		api
			.post('/api/admin/editPassword', editValue)
			.then((res) => {
				setAlert('')
				handleClose()
			})
			.catch((err) => {
				setAlert(err.response.data.error)
			})
	}
	const [editValue, setEditValue] = useState({
		oldPassword: '',
		newPassword: '',
	})
	return (
		<Fragment>
			<div className="editpassword-form">
				{field.map((el) => {
					return (
						<TextField
							placeholder={el.placeholder}
							name={el.name}
							value={editValue[el.name]}
							type="password"
							handleChange={handleChange}
						/>
					)
				})}
				{alert != '' ? <div className="alert">{alert}</div> : null}
				<div className="editpassword-btn-div">
					<button className="editpassword-btn" onClick={handleSubmit}>
						Change
					</button>
				</div>
			</div>
			<style jsx>
				{`
					.editpassword-form {
						width: 100%;
						display: flex;
						flex-flow: column;
						justify-content: center;
						padding-top: 1rem;
					}
					.alert {
						font-size: 0.8em;
						color: #ed3f14;
					}
					.editpassword-btn-div {
						display: flex;
						justify-content: center;
						padding: 0.5rem;
					}
					.editpassword-btn {
						padding: 0.5rem 2rem;
						font-size: 1.2em;
						font-weight: bold;
						color: white;
						background: #fb9ccb;
						text-transform: uppercase;
						border-radius: 25px;
						border: none;
						outline: none;
						min-width: 150px;
					}
				`}
			</style>
		</Fragment>
	)
}
export default EditPassword
