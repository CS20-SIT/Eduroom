import style from '../../styles/graderSubmit/graderNav'
import Link from 'next/link'
import { useRouter } from 'next/router'

const GraderNav = (props) => {
	const router = useRouter()
	const menus = [
		{ text: 'Home', link: '/graderSystem', page: 'home' },
		{ text: 'Problems', link: '/graderSystem/problem/1', page: 'problem' },
		{ text: 'Contests', link: '/graderSystem/contest', page: 'contest' },
		{ text: 'Ranks', link: '/graderSystem/rank', page: 'rank' },
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
					<div className="text" onClick={() => router.push('/graderSystem/profile')}>
						<span className="profile">
							Profile
							<img src="../../../images/graderSubmit/profile.svg" />
						</span>
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</div>
	)
}

export default GraderNav
