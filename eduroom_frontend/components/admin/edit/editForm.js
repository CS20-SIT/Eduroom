import { Fragment, useEffect, useState } from 'react'
import EditSection from './editSection'
import api from '../../../api'
const EditForm = () => {
	const [open, setOpen] = useState('')
	const handleToggle = (type) => {
		if (open == type) {
			setOpen('')
		} else {
			setOpen(type)
		}
	}
	const [profiles, setProfiles] = useState({
		firstname: '',
		lastname: '',
		avatar: '',
		displayname: '',
	})
	useEffect(() => {
		if (open == 'edit profile') {
			api
				.get('/api/auth/admin/profile')
				.then((res) => {
					setProfiles(res.data)
				})
				.catch((err) => {})
		}
	}, [open])
	const type = ['edit profile', 'password']
	return (
		<Fragment>
			<div className="admin-edit-form">
				<div style={{ marginBottom: '1rem' }}>
					<img src="/images/admin/edit_profile.svg" alt="edit-profile" />
				</div>
				{type.map((t) => {
					return <EditSection profiles={profiles} type={t} open={open == t} handleToggle={handleToggle} />
				})}
			</div>
			<style jsx>
				{`
					.admin-edit-form {
						padding: 2.5rem 5rem;
						display: flex;
						flex-flow: column;
						align-items: center;
						justify-content: center;
						width: 100%;
					}
				`}
			</style>
		</Fragment>
	)
}
export default EditForm
