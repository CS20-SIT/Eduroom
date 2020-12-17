import { Fragment } from 'react'
import Choice from './Choice'
import style from '../../../../styles/user/instructor/createCourse/create'

const Choices = ({ question, qChange }) => {
	const choicesChange = (idx, choice) => {}
	const correctChange = (idx) => {}
	const renderChoices = () => {
		const arr = question.choices.map((choice, idx) => {
			return (
				<Choice
					choice={choice}
					key={idx}
					idx={idx}
					choiceChange={choicesChange}
					correctChange={correctChange}
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
