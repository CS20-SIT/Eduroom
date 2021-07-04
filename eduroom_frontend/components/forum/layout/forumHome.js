import { Fragment } from 'react'
import ForumNav from './forumNav'
import HomeContent from './homeContext'
const ForumHome = () => {
	return (
		<Fragment>
			<div className="forumHome">
				<ForumNav />
				<HomeContent />
			</div>
			<style jsx>
				{`
					.forumHome {
						background: #f4f5f7;
						min-height: 100vh;
					}
				`}
			</style>
		</Fragment>
	)
}
export default ForumHome
