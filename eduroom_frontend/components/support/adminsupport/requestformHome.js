import { Fragment, useEffect, useState } from 'react'
import api from '../../../api'
import RequestFormBox from './requestformbox'
import { Typography } from '@material-ui/core'
const ForumHome = () => {
	const [requestform, setRequestForms] = useState([])
	useEffect(() => {
		api
			.get('/api/support')
			.then((res) => {
				setRequestForms(res.data.data)
				console.log(res.data.data)
			})
			.catch((err) => [console.log(err)])
	}, [])
	return (
		<Fragment>
			<img src="/images/adminsupport.svg" style={{ width: '100%' }}></img>
			<div className="forumHome">
				<Typography style={{ marginLeft: '7%', marginTop: '5%', marginBottom: '3%' }}>
					<h1>Select a Request that you want to support</h1>
				</Typography>
				<div className="forum-home">
					{requestform.map((el, index) => {
						return (
							<Fragment key={index}>
								<RequestFormBox data={el} />
							</Fragment>
						)
					})}
				</div>
			</div>
			<style jsx>
				{`
					.forum-home {
						display: flex;
						flex-flow: column;
						justify-content: center;
						align-items: center;
						padding: 1.5rem 5rem;
					}

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
