import { Fragment } from 'react'
import GeneralNoNav from '../../../components/graderCreate/GraderCreateLayout/Sidebar'
import GNav from '../../../components/graderCreate/GraderCreateLayout/Nav'

import Log from '../../../components/graderCreate/AdminLog/Log'
const AdminLog = () => {
	return (
		<Fragment>
			<GeneralNoNav>
				<GNav></GNav>
				<Log />
			</GeneralNoNav>
		</Fragment>
	)
}
export default AdminLog
