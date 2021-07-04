import { Fragment } from 'react'
import GeneralNoNav from '../../../../../components/graderCreate/GraderCreateLayout/Sidebar'
import GNav from '../../../../../components/graderCreate/GraderCreateLayout/Nav'
import Create from '../../../../../components/graderCreate/Question/Create'
import ProtectedAdminRoute from '../../../../../components/admin/protectedAdminRoute'

const ConCreate = () => {
	return (
		<ProtectedAdminRoute>
			<GeneralNoNav>
				<GNav></GNav>
				<Create />
			</GeneralNoNav>
		</ProtectedAdminRoute>
	)
}
export default ConCreate
