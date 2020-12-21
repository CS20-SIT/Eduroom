import { Fragment } from 'react'
import Choice from './Choice'
import style from '../../styles/learningPathStyles/quiz'

const Quiz = ({ id, data, selected, changeSelected }) => {
	const renderChoices = () => {
		const arr = data.choices.map((choice, idx) => {
			return (
				<Choice
					questionno={id}
					data={choice}
					key={idx}
					selected={selected}
					changeSelected={changeSelected}
					idx={idx}
				></Choice>
			)
		})
		return (
			<Fragment>
				<div className="choices">{arr}</div>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<div>
				<p style={{ fontSize: '20px' }}>
					Question{data.questionno} : {data.description}
				</p>
				{renderChoices()}
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Quiz
