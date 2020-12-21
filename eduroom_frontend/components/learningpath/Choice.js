import { Fragment } from 'react'
import style from '../../styles/learningPathStyles/quiz'

const Choice = ({ questionno, data, selected, changeSelected }) => {
	const getCardClass = () => {
		return selected[questionno] === data.choiceno - 1 ? 'cardActive' : ''
	}
	const handleSelect = () => {
		selected[questionno] = data.choiceno - 1
		changeSelected(selected)
	}
	return (
		<Fragment>
			<div onClick={handleSelect} className={`choice ${getCardClass()}`}>
				<span style={{ fontWeight: '600' }}>{data.choiceno})</span> {data.answer}
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Choice
