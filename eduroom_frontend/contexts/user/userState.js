import React, { useReducer } from 'react'
import userReducer from './userReducer'
import UserContext from './userContext'
import api from '../../api'
import {
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	GET_USER_SUCCESS,
	GET_USER_FAIL,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGOUT_USER_SUCCESS,
	LOGOUT_USER_FAIL,
} from './types'
const userState = (props) => {
	const initialState = { user: null, err: null }
	const [state, dispatch] = useReducer(userReducer, initialState)
	const registerUser = async (user, router) => {
		try {
			await api.post('/api/auth/register', user)
			dispatch({ type: REGISTER_USER_SUCCESS, payload: true })
			router.push('/')
		} catch (err) {
			const error = err.response.data.error
			dispatch({ type: REGISTER_USER_FAIL, payload: error })
		}
	}

	const loginUser = async (body, router) => {
		try {
			const login = await api.post('/api/auth/login', body)
			const user = await api.get('/api/auth/profile')
			dispatch({ type: LOGIN_USER_SUCCESS, payload: user.data })
			if(!login.data.isVerify){
				router.push(`/verify`)
			} else {
				router.push('/')
			}
		} catch (err) {
			const error = err.response.data.error
			dispatch({ type: LOGIN_USER_FAIL, payload: error })
		}
	}

	const logoutUser = async (router) => {
		try {
			await api.get('/api/auth/logout')
			dispatch({ type: LOGOUT_USER_SUCCESS, payload: {} })
			router.push('/')
		} catch (err) {
			const error = err.response.data.error
			if (typeof error === 'string' || error instanceof String) {
				dispatch({ type: LOGOUT_USER_FAIL, payload: error })
      } else {
        dispatch({ type: LOGOUT_USER_FAIL, payload: 'Server is error' })
			}
		}
	}

	const getUser = async (router) => {
		try {
			const res = await api.get('/api/auth/profile')
			if(!res.data.verify){
				router.push('/verify')
			}
			dispatch({ type: GET_USER_SUCCESS, payload: res.data })
		} catch (err) {
			dispatch({ type: GET_USER_FAIL, payload: err })
		}
	}

	return (
		<UserContext.Provider
			value={{
				user: state.user,
				err: state.err,
				registerUser,
				loginUser,
				getUser,
				logoutUser,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default userState
