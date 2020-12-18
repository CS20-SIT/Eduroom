import React, { Fragment, useContext } from 'react'
import ProtectedAdminRoute from '../../components/admin/protectedAdminRoute'
import AdminContext from '../../contexts/admin/adminContext'
const Admin = () => {
	const adminContext = useContext(AdminContext)
	const { logoutAdmin } = adminContext
	return <ProtectedAdminRoute>Hello Admin <button onClick={logoutAdmin}>logout</button></ProtectedAdminRoute>
}
export default Admin
