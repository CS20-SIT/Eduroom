import React, { Fragment, useState, useEffect, useContext } from 'react'
import General from '../../components/template/general'
import UserEditProfile from '../../components/user/editprofile'

const UserEdit = () => {
	return (
		<Fragment>
			<General>
				<UserEditProfile></UserEditProfile>
			</General>
		</Fragment>
	)
}
export default UserEdit
