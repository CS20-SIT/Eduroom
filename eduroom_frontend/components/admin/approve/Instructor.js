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
					<h2>
						{data.firstname} {data.lastname}
					</h2>
					<p>{data.bio}</p>
				</div>
				<div>
					<div className="approveBtn" onClick={handleApprove}>
						Approve
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Instructor
