import React, { Fragment, useState, useEffect, useContext } from 'react'
import General from '../../components/template/general'
// <<<<<<< HEAD
import UserEditProfile from '../../components/user/editprofile'

// const UserEdit = () => {
// 	return (
// 		<Fragment>
// 			<General>
// 				<UserEditProfile></UserEditProfile>
// =======
import EditForm from '../../components/user/editForm'

const User = () => {
	return (
		<Fragment>
			<General>
				<EditForm></EditForm>
			</General>
		</Fragment>
	)
}
export default User
