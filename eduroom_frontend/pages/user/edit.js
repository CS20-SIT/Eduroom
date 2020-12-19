import React, { Fragment, useState, useEffect, useContext } from 'react'
import General from '../../components/template/general'
import UserEditProfile from '../../components/user/editprofile'
import EditForm from '../../components/user/editForm'

const User = () => {
	return (
		<Fragment>
			<General isProtected={true}>
				<EditForm></EditForm>
			</General>
		</Fragment>
	)
}
export default User
