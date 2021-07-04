import { Fragment } from 'react'
import GeneralNoNav from '../../../../../components/graderCreate/GraderCreateLayout/Sidebar'
import GNav from '../../../../../components/graderCreate/GraderCreateLayout/Nav'
import AnnouncementPage from '../../../../../components/graderCreate/Announcement/Announcement'
import ProtectedAdminRoute from '../../../../../components/admin/protectedAdminRoute'
const Announcement = () => {
	return (
		<ProtectedAdminRoute>
			<GeneralNoNav>
				<GNav> </GNav>
				<AnnouncementPage />
			</GeneralNoNav>
		</ProtectedAdminRoute>
	)
}
export default Announcement
