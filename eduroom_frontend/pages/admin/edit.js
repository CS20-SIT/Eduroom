import { Fragment } from 'react'
import EditForm from '../../components/admin/edit/editForm'
import ProtectedAdminRoute from '../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../components/admin/template/default'
const AdminEdit = () => {
	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
					<EditForm />
				</AdminTemplate>
			</ProtectedAdminRoute>
		</Fragment>
	)
}
export default AdminEdit
