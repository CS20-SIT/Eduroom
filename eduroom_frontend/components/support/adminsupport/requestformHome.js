import React, { Fragment, useEffect, useState } from 'react'
import api from '../../../api'
import RequestFormBox from './requestformbox'
import AdminSideNav from '../../admin/layout/sidenav'
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
		<Fragment><AdminSideNav>
			<div className="forumHome">
			<div className="forum-home">
				{requestform.map((el, index) => {
					return <Fragment key={index}><RequestFormBox data={el}  /></Fragment>
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
                        background: #F4F5F7;
                        min-height: 100vh;
					}
					
				`}
			</style>
			</AdminSideNav>
		</Fragment>
	)
}
export default ForumHome
