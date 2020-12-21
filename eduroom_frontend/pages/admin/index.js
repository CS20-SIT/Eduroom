import React, { Fragment, useContext } from 'react'
import ProtectedAdminRoute from '../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../components/admin/template/default'
import AdminContext from '../../contexts/admin/adminContext'
import ActionList from '../../components/admin/dashboard/actionList'
import RowList from '../../components/admin/dashboard/rowList'
import UserContent from '../../components/admin/dashboard/userContent'
const Admin = () => {
	const adminContext = useContext(AdminContext)
	const { logoutAdmin } = adminContext
	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
                    <div className="dashboard">
					<div className="content">
						<div className="content-title">Dashboard</div>
						<ActionList />
						<div className="content-title">Support {"&"} Analysis</div>
                        <RowList/>
					</div>
                    <div className="user">
                        <UserContent />
                    </div></div>
				</AdminTemplate>
			</ProtectedAdminRoute>
            <style jsx>
                {
                    `
                    .dashboard {
                        display:flex;
                    }
                    .user {
                        width: 20%;
                        background: #fff;
                    }
                    .content{
                        width: 80%;
                        padding: 3%;
                    }
                    .content-title {
                        text-tranform: uppercase;
                        font-size: 2em;
                        font-weight:bold;
                        color: #3D467F;
						padding: 1rem 3rem;
                    }
                    `
                }
            </style>
		</Fragment>
	)
}
export default Admin
