import { Fragment } from 'react'
import GeneralNoNav from '../../../../components/graderCreate/GraderCreateLayout/Sidebar'
import GNav from '../../../../components/graderCreate/GraderCreateLayout/Nav'
import Gback from '../../../../components/graderCreate/GraderCreateLayout/Background'
import Create from '../../../../components/graderCreate/Contest/Create/CreateForm'
import ProtectedAdminRoute from '../../../../components/admin/protectedAdminRoute'
const ConCreate = () => {
	return (
		<ProtectedAdminRoute>
			<GeneralNoNav>
				<GNav> </GNav>
				<Gback></Gback>
				<Create />
			</GeneralNoNav>
		</ProtectedAdminRoute>
	)
}
export default ConCreate
