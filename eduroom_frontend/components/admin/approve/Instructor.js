import { Fragment } from 'react'
import api from '../../../api'
import style from '../../../styles/admin/approveInstructor'

const Instructor = ({ data, fetchData }) => {
	const handleApprove = async () => {
		try {
			const body = { instructorId: data.instructorid }
			const res = await api.post('/api/admin/verifyInstructor', body)
			await fetchData()
			console.log(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<Fragment>
			<div className="box">
				<div>
					<h2>{data.instructorname}</h2>
					<p>This is bio</p>
				</div>
				<div className="approveBtn" onClick={handleApprove}>
					Approve
				</div>
			</div>
			<style>{style}</style>
		</Fragment>
	)
}

export default Instructor
