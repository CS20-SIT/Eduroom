import { Fragment } from 'react'
import Choice from './Choice'
import style from '../../../../styles/user/instructor/createCourse/create'

const Choices = ({ question, questionChange }) => {
	const changeCorrect = (idx) => {
		question.correct = idx
		questionChange(question)
	}
	const changeChoice = (idx, newText) => {
		question.choices[idx] = newText
		questionChange(question)
	}
	const renderChoices = () => {
		const arr = question.choices.map((choice, idx) => {
			return (
				<Choice
					choice={choice}
					changeChoice={changeChoice}
					key={idx}
					idx={idx}
					changeCorrect={changeCorrect}
					correct={question.correct}
				></Choice>
			)
		})
		return <Fragment>{arr}</Fragment>
	}
	return (
		<Fragment>
			<div>
				<div className="choices">{renderChoices()}</div>
			</div>
			<style jsx>{`
				.choices {
					display: flex;
					width: 100%;
					flex-wrap: wrap;
					justify-content: space-between;
				}
			`}</style>
		</Fragment>
	)
}

export default Choices
