import React, { Fragment, useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import ForumBox from '../../components/forum/layout/forumBox'
import api from '../../api'
import ForumNav from '../../components/forum/layout/forumNav'
import GeneralNonav from '../../components/template/generalnonav'
import AuthDialog from '../../components/landing/authDialog'
import UserContext from '../../contexts/user/userContext'
const Search = () => {
	const [dialog,setDialog] = useState(false)
	const router = useRouter()
    const [data, setData] = useState([])
	const search = router.query.q
	const userContext = useContext(UserContext)
	const {user} = userContext
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
			setDialog(!dialog)
		}
	}
	return (
		<Fragment>
			<GeneralNonav>
				
			{
				dialog ? (
					<AuthDialog handleClick={()=>{setDialog(false)}}/>
				) :null
			}
				<div style={{background:'#F4F5F7'}}>
				<ForumNav/>
				<div className="forum-home">
					{data.map((el, index) => {
						return (
							<Fragment key={index}>
								<ForumBox data={el} onLike={handleLike} />
							</Fragment>
						)
					})}
				</div></div>
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
