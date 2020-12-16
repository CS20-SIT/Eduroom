import React, { Fragment, useState, useEffect, useContext } from 'react'
import General from '../../components/template/general'
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
