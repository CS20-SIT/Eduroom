import React, { Fragment, useContext } from 'react'
import ProtectedAdminRoute from '../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../components/admin/template/default'
import AdminContext from '../../contexts/admin/adminContext'
import ActionList from '../../components/admin/dashboard/actionList'
const Admin = () => {
	const adminContext = useContext(AdminContext)
	const { logoutAdmin } = adminContext
	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
					<div className="content">
						<div>Dashboard</div>
						<ActionList />
                        <button onClick={logoutAdmin}>logout</button>
					</div>
				</AdminTemplate>
			</ProtectedAdminRoute>
            <style jsx>
                {
                    `
                    .content{
                        padding: 3%;
                    }
                    `
                }
            </style>
		</Fragment>
	)
}
export default Admin
