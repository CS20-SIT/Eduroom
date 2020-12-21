import React, { Fragment } from 'react'
import General from '../../../components/template/general'
import ForumHome from '../../../components/support/adminsupport/requestformHome'
import ProtectedAdminRoute from '../../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../../components/admin/template/default'
const RequestForm = () => {
	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
				<ForumHome/>
				</AdminTemplate>
				</ProtectedAdminRoute>
				
		</Fragment>
	)
}
export default RequestForm
