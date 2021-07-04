import { Fragment, useState, useEffect, useContext } from 'react'
import General from '../../components/template/general'
import Profile from '../../components/user/profile'

const User = () => {
	return (
		<Fragment>
			<General>
				<Profile></Profile>
			</General>
		</Fragment>
	)
}
export default User
