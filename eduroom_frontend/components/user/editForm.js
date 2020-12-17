import TextField from './utils/textfield'
import Select from './utils/select'
import Textarea from './utils/textarea'
import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
const EditForm = () => {
	const router = useRouter()
	const handleSave = () => {
		router.push('/user')
	}
	const handleCancel = () => {
		router.push('/user')
	}
	return (
		<Fragment>
			<div className="container">
				<div className="box">
					<div className="editImage">
						<div className="uploadImage">
							<i className="fas fa-camera"></i>
						</div>
					</div>
					<div className="editInfo">
						<div className="w-100 form-title">General Information</div>
						<div className="w-50 pr-1">
							<TextField style={{ padding: '18px' }} placeholder="Firstname" />
						</div>
						<div className="w-50 pl-1">
							<TextField style={{ padding: '18px' }} placeholder="Lastname" />
						</div>
						<div className="w-100">
							<TextField type="date" style={{ padding: '18px' }} placeholder="Date Of Birthdate" />
						</div>
						<div className="w-100">
							<Textarea style={{ padding: '18px' }} placeholder="Bio" row="5" />
						</div>
						<div className="w-100 form-title">Personal Information</div>
						<div className="w-100">
							<TextField style={{ padding: '18px' }} placeholder="Email" />
						</div>
						<div className="w-100">
							<TextField style={{ padding: '18px' }} type="password" placeholder="Password" />
						</div>
						<div className="w-100">
							<TextField style={{ padding: '18px' }} placeholder="Phone number" />
						</div>
						<div className="w-100">
							<Select
								style={{ padding: '18px' }}
								placeholder="Country"
								selectValue={[
									{ label: 'Thailand', value: 'Thailand' },
									{ label: 'New York', value: 'New York' },
								]}
							/>
						</div>
						<div className="w-100" style={{display:'flex',justifyContent:'center'}}>
							<span className="pr-1">
								<button className="user-edit-button" onClick={handleSave}>
									<a className="user-edit-button-text">Confirm</a>
								</button>
							</span>
							<span className="pl-1">
								<button className="user-cancel-button" onClick={handleCancel}>
									<a className="user-cancel-button-text">Cancel</a>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					.user-edit-button {
						background: #fb9ccb;
						border-radius: 25px;
						padding: 0.5rem 1.5rem;
						border: none;
						outline: none;
						transition: 0.25s;
					}
					.user-edit-button:hover {
						cursor: pointer;
						opacity: 0.8;
						transition: 0.25s;
					}
					.user-edit-button-text {
						color: white;
						font-weight: 700;
						font-size: 1.2em;
						font-family: 'Quicksand', sans-serif;
					}
					.user-cancel-button {
						background: #ffffff;
						border-radius: 25px;
						padding: 0.5rem 1.5rem;
						outline: none;
						transition: 0.25s;
						border: 1px solid #3d467f;
					}
					.user-cancel-button:hover {
						cursor: pointer;
						transition: 0.25s;
						background: #3d467f;
					}
					.user-cancel-button:hover .user-cancel-button-text {
						color: white;
					}
					.user-cancel-button-text {
						color: #3d467f;
						font-weight: 700;
						font-size: 1.2em;
						font-family: 'Quicksand', sans-serif;
					}
					.box {
						display: flex;
						background: #fff;
					}
					.container {
						margin: 20px 80px;
						padding: 30px;
						background: rgba(255, 255, 255, 0.8);
						box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
					}
					.editImage {
						width: 20%;
						padding: 0 20px;
					}
					.editInfo {
						width: 80%;
						padding: 0 20px;
						display: flex;
						flex-wrap: wrap;
					}
					.form-title {
						font-weight: 500;
						font-size: 1.4em;
						color: #969bba;
					}
					.w-100 {
						width: 100%;
						margin: 8px 0;
					}
					.pr-1 {
						padding-right: 12px;
					}
					.pl-1 {
						padding-left: 12px;
					}
					.w-50 {
						width: 50%;
						margin: 8px 0;
					}
					.uploadImage {
						width: 160px;
						height: 160px;
						border-radius: 80px;
						border: 1px solid black;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 2.2em;
						color: white;
						background: black;
						cursor: pointer;
					}
				`}
			</style>
		</Fragment>
	)
}
export default EditForm
