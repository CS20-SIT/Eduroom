import React, { Fragment, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import AdminContext from '../../contexts/admin/adminContext'
const ProtectedAdminRoute = ({ children }) => {
	const adminContext = useContext(AdminContext)
	const router = useRouter()
	const { getAdminProfile, admin } = adminContext
	useEffect(() => {
		if (!admin) {
			getAdminProfile(() => {
				router.push('/')
			})
		}
	}, [admin])
	if (admin) {
		return <Fragment>{children}</Fragment>
	} else {
		return <Fragment></Fragment>
	}
}
export default ProtectedAdminRoute
