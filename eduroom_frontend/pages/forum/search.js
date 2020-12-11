import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ForumBox from '../../components/forum/layout/forumBox'
import api from '../../api'
import ForumNav from '../../components/forum/layout/forumNav'
import GeneralNonav from '../../components/template/generalnonav'
const Search = () => {
	const router = useRouter()
    const [data, setData] = useState([])
	const search = router.query.q
	useEffect(() => {
        getData(search)
	}, [search])
	const getData = (search) => {
		api
			.post('/api/forum/search', { search })
			.then((res) => {
				setData(res.data.data)
			})
			.catch((err) => {})
	}
	const handleLike = (id, callback) => {
		if (user) {
			api
				.post(`/api/forum/like/${id}`)
				.then((res) => {
					getData(search)
					callback()
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
			alert('Please Login Before Like na ja')
		}
	}
	return (
		<Fragment>
			<GeneralNonav>
				<ForumNav/>
				<div className="forum-home">
					{data.map((el, index) => {
						return (
							<Fragment key={index}>
								<ForumBox data={el} onLike={handleLike} />
							</Fragment>
						)
					})}
				</div>
			</GeneralNonav>
			<style jsx>
				{`
					.forum-home {
						display: flex;
						flex-flow: column;
						justify-content: center;
						align-items: center;
						padding: 1.5rem 5rem;
					}
				`}
			</style>
		</Fragment>
	)
}

export default Search
