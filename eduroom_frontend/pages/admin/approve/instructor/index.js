import { Fragment, useEffect, useState } from 'react'
import ProtectedAdminRoute from '../../../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../../../components/admin/template/default'
import Instructor from '../../../../components/admin/approve/Instructor'
import style from '../../../../styles/admin/approveInstructor'
import api from '../../../../api'

const AdminApproveInstructor = () => {
	const [data, setData] = useState([])
	const fetchData = async () => {
		try {
			const res = await api.get('/api/admin/verifyInstructor')
			setData(res.data)
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		fetchData()
	}, [])

	const renderInstructor = () => {
		const arr = data.map((el, idx) => {
			return <Instructor data={el} key={idx} fetchData={fetchData}></Instructor>
		})
		return arr
	}
	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
					<div className="container">
						<h1>Approve instructor</h1>
						{renderInstructor()}
					</div>
				</AdminTemplate>
			</ProtectedAdminRoute>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default AdminApproveInstructor
