import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import style from '../../../styles/graderSubmit/problems/problemList'
import { addProblemBoxClass } from '../animationBoxUtil'

const ProblemList = (props) => {
	const router = useRouter()
	const [boxClass, setBoxClass] = useState(['box'])

	return (
		<Fragment>
			<div
				className={boxClass.join(' ')}
				onMouseLeave={() => addProblemBoxClass(setBoxClass, boxClass, 'box-unhover', 'box')}
			>
				<div className="left">
					<div className="title">{props.title}</div>
					<p>{props.description}</p>
				</div>
				<div className="right">
					<div className="right-top">
						<p className="difficulty">{props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}</p>
					</div>
					<div className="right-bottom">
						<div
							className="try-button"
							onClick={() => router.push(`/graderSystem/problem/${props.pageID}/${props.id}`)}
						>
							<button id="myButton">Try</button>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ProblemList
