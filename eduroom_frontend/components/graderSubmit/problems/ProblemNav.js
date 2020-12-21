import { Fragment, useState } from 'react'
import style from '../../../styles/graderSubmit/problems/problemNav'
import Link from 'next/link'

const ProblemNav = (props) => {
	// const [language, setLanguage] = useState('Java')
	// const handleChangeSelect = (e) => {
	// 	let newValue = e.target.value
	// 	setLanguage(newValue)
	// 	console.log(newValue)
	// }

	const menus = [
		{
			text: 'Description',
			link: `/graderSystem/problem/${props.pageId}/${props.id}`,
			page: 'description',
		},
		{
			text: 'Submission',
			link: `/graderSystem/problem/${props.pageId}/${props.id}/submission`,
			page: 'submission',
		},
	]

	const getClass = (text) => {
		if (text.toLowerCase() === props.page.toLowerCase()) {
			return 'link active box-active'
		} else {
			return 'link box'
		}
	}

	return (
		<Fragment>
			<div className="nav">
				{menus.map((menu, idx) => {
					return (
						<div className={getClass(menu.page)} key={idx}>
							<Link href={menu.link}>{menu.text}</Link>
						</div>
					)
				})}
				{/* <select className="box language" onChange={handleChangeSelect}>
					<option className="language" value="java">
						Java
					</option>
					<option value="c">C</option>
					<option value="c++">C++</option>
					<option value="python3">Python 3</option>
					<option value="python2">Python 2</option>
				</select> */}
				<div className="link box empty"></div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ProblemNav
