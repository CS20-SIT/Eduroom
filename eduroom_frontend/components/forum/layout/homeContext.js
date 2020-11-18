import React, { Fragment, useEffect, useState } from 'react'
import CategoriesSet from './categoriesSet'
import api from '../../../api'
import ForumBox from './forumBox'
const HomeContent = () => {
	const [forums, setForums] = useState([])
	useEffect(() => {
		api
			.get('/api/forum')
			.then((res) => {
                setForums(res.data.data)
                console.log(res.data.data)
			})
			.catch((err) => [console.log(err)])
	}, [])
	return (
		<Fragment>
			<div className="forum-home">
				<div className="home-title">CHOOSE ROOM</div>
				<CategoriesSet />
				{forums.map((el, index) => {
					return <Fragment key={index}><ForumBox data={el}  /></Fragment>
				})}
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
					.home-title {
						color: #3d467f;
						font-size: 2rem;
						font-weight: bold;
					}
				`}
			</style>
		</Fragment>
	)
}
export default HomeContent
