import { Fragment } from 'react'
import { useRouter } from 'next/router'
import style from '../../../../styles/graderSubmit/contests/contestPage/problem/contestProblemList'

const ContestProblemList = (props) => {
	const router = useRouter()
	const difficultyColor = (props) => {
		switch (props.difficulty.toLowerCase()) {
			case 'easy':
				return (
					<span style={{ color: '#6FCF97', fontWeight: 'bold' }}>
						{props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}
					</span>
				)
			case 'medium':
				return (
					<span style={{ color: '#EED202', fontWeight: 'bold' }}>
						{props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}
					</span>
				)
			case 'difficult':
				return (
					<span style={{ color: '#EB5757', fontWeight: 'bold' }}>
						{props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}
					</span>
				)
			default:
				return (
					<span style={{ color: '#000000', fontWeight: 'bold' }}>
						{props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}
					</span>
				)
		}
	}

	return (
		<Fragment>
			{props.number ? (
				<div
					className="flex-container"
					onClick={() => {
						router.push(`/graderSystem/contest/${props.contestID}/problem/${props.id}`)
					}}
				>
					<div className="flex-item" style={{ flexBasis: '15%' }}>
						{props.number}
					</div>
					<div className="flex-item" style={{ flexBasis: '15%' }}>
						{props.title}
					</div>
					<div className="flex-item" style={{ flexBasis: '50%' }}>
						{props.description.length >= 45 ? props.description.slice(0, 45) + '...' : props.description}
					</div>
					<div className="flex-item" style={{ flexBasis: '20%' }}>
						{difficultyColor(props)}
					</div>
				</div>
			) : null}
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ContestProblemList
