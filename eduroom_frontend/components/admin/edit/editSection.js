import React, { Fragment } from 'react'
import EditProfile from './editProfile'
import EditPassword from './editPassword'
const EditSection = ({ type, open, handleToggle, profiles }) => {
	const toCapital = (text) => {
		const temp = text.split(' ')
		const res = []
		temp.map((el) => {
			res.push(el.substring(0, 1).toUpperCase() + el.substring(1))
		})
		return res.join(' ')
	}
	return (
		<Fragment>
			<div className="edit-section">
				<div className="edit-titlebar">
					<div>{toCapital(type)}</div>
					<div
						onClick={() => {
							handleToggle(type)
						}}
					>
						<i className="fas fa-angle-down" />
					</div>
				</div>
				{open ? (
					type == 'edit profile' ? (
						<EditProfile profile={profiles} handleClose={handleToggle} />
					) : (
						<EditPassword handleClose={handleToggle} />
					)
				) : null}
			</div>
			<style jsx>
				{`
					.edit-section {
						display: flex;
						flex-flow: column;
						margin-bottom: 0.5rem;
						background: #fff;
						width: 50%;
						padding: 1.5rem 2rem;
						border-radius: 15px;
					}
					.edit-titlebar {
						display: flex;
						justify-content: space-between;
						font-size: 1.2em;
						font-weight: 600;
					}
					.edit-titlebar i {
						cursor: pointer;
					}
				`}
			</style>
		</Fragment>
	)
}
export default EditSection
