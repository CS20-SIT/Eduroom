import React, { useReducer } from 'react'
import adminReducer from './adminReducer'
import AdminContext from './adminContext'
import api from '../../api'
import {
	GET_ADMIN_SUCCESS,
	GET_ADMIN_FAIL,
	LOGIN_ADMIN_SUCCESS,
	LOGIN_ADMIN_FAIL,
	LOGOUT_ADMIN_SUCCESS,
	LOGOUT_ADMIN_FAIL,
} from './types'

const adminState = (props) => {
	const initialState = { admin: null }
	const [state, dispatch] = useReducer(adminReducer, initialState)
	const loginAdmin = async (data, success = () => {}, fail = () => {}) => {
		try {
			await api.post('/api/auth/admin/login', data)
			const admin = await api.get('/api/auth/admin/profile')
			dispatch({ type: LOGIN_ADMIN_SUCCESS, payload: admin.data })
			success()
		} catch (err) {
			fail()
			dispatch({ type: LOGIN_ADMIN_FAIL, payload: err.response.data.error })
		}
	}
	const getAdminProfile = async (fail = () => {}) => {
		try {
			const admin = await api.get('/api/auth/admin/profile')
			dispatch({ type: GET_ADMIN_SUCCESS, payload: admin.data })
		} catch (err) {
			fail()
			dispatch({ type: GET_ADMIN_FAIL, payload: err.response.data.error })
		}
	}
	const logoutAdmin = async () => {
		try {
			await api.get('/api/auth/admin/logout')
			dispatch({ type: LOGOUT_ADMIN_SUCCESS, payload: null })
		} catch (err) {
			dispatch({ type: LOGOUT_ADMIN_FAIL, payload: err.response.data.error })
		}
	}
	return (
		<AdminContext.Provider
			value={{
				admin: state.admin,
				loginAdmin,
				getAdminProfile,
				logoutAdmin
			}}
		>
			{props.children}
		</AdminContext.Provider>
	)
}

export default adminState
