import { Fragment } from 'react'
import GeneralNoNav from '../../../../../components/graderCreate/GraderCreateLayout/Sidebar'
import GNav from '../../../../../components/graderCreate/GraderCreateLayout/Nav'
import Gback from '../../../../../components/graderCreate/GraderCreateLayout/Background'
import ConEdit from '../../../../../components/graderCreate/Contest/Create/CreateForm'
import ProtectedAdminRoute from '../../../../../components/admin/protectedAdminRoute'
const Info = () => {
	return (
		<ProtectedAdminRoute>
			<GeneralNoNav>
				<GNav> </GNav>
				<ConEdit />
				<Gback></Gback>
			</GeneralNoNav>
		</ProtectedAdminRoute>
	)
}

export default Info
