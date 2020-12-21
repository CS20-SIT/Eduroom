import React, { Fragment, useState } from 'react'
import EditSection from './editSection'
const EditForm = () => {
	const [open, setOpen] = useState('')
	const handleToggle = (type) => {
		if (open == type) {
			setOpen('')
		} else {
			setOpen(type)
		}
	}
	const type = ["edit profile","password"]
	return (
		<Fragment>
			<div className="admin-edit-form">
				<div style={{marginBottom:'1rem'}}>
					<img src="/images/admin/edit_profile.svg" alt="edit-profile" />
				</div>
				{
					type.map(t => {
						return (
							<EditSection type={t} open={open == t} handleToggle={handleToggle} />
						)
					})
				}
			</div>
			<style jsx>
				{
					`
					.admin-edit-form {
						padding: 2.5rem 5rem;
						display: flex;
						flex-flow: column;
						align-items: center;
						justify-content: center;
						width: 100%;
					}`
				}
			</style>
		</Fragment>
	)
}
export default EditForm
