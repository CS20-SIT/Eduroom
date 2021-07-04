import { Fragment } from 'react'
import GeneralNoNav from '../../components/template/generalnonav'
import ForumHome from '../../components/forum/layout/forumHome'
const Forum = () => {
	return (
		<Fragment>
			<GeneralNoNav>
				<ForumHome />
			</GeneralNoNav>
		</Fragment>
	)
}
export default Forum
