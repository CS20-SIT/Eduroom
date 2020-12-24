import { useEffect, useState } from 'react'
import style from '../../styles/graderSubmit/graderNav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import api from '../../api'

const GraderNav = (props) => {
	const router = useRouter()
	const [Data, setData] = useState('')

	useEffect(() => {
		const GetData = async () => {
			try {
				let result = await api.get('/api/auth/profile')
				setData(result.data)
			} catch (e) {
				return console.log(e.data)
			}
		}
		GetData()
	}, [Data])

	const menus = [
		{ text: 'Home', link: '/graderSystem', page: 'home' },
		{ text: 'Problems', link: '/graderSystem/problem/1', page: 'problem' },
		{ text: 'Contests', link: '/graderSystem/contest', page: 'contest' },
		{ text: 'Ranks', link: '/graderSystem/rank/oi', page: 'rank' },
	]
	const getClass = (text) => {
		if (text.toLowerCase() === props.page.toLowerCase()) {
			return 'link active'
		} else {
			return 'link'
		}
	}
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'flex-end',
			}}
		>
			<div className="nav">
				{menus.map((menu, idx) => {
					return (
						<div className={getClass(menu.page)} key={idx}>
							<Link href={menu.link}>{menu.text}</Link>
						</div>
					)
				})}
				<div className="link">
					<div className="text" onClick={() => router.push(`${Data != '' ? '/user' : '/'}`)}>
						<span className="profile">
							Profile
							<img
								src={`${Data != '' ? Data.avatar : '/../../images/graderSubmit/publicProfile.svg'}`}
								style={{ borderRadius: '50%' }}
							/>
						</span>
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</div>
	)
}

export default GraderNav
