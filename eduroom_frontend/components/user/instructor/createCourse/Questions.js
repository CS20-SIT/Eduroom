import { Fragment } from 'react'
import Question from './Question'
import AddQuestion from './AddQuestion'
import style from '../../../../styles/user/instructor/createCourse/create'

const Questions = ({ questions, changeQuestions }) => {
	const addQuestion = () => {
		questions.push({ q: '', choices: ['', '', '', ''], correct: 0 })
		changeQuestions(questions)
	}
	const handleQuestion = (question, idx) => {
		questions[idx] = question
		changeQuestions(questions)
	}
	const removeQuestion = (idx) => {
		questions = questions.splice(idx, 1)
		changeQuestions(questions)
	}
	const renderQuestions = () => {
		return questions.map((question, idx) => {
			return (
				<Question
					question={question}
					key={idx}
					idx={idx}
					handleQuestion={handleQuestion}
					removeQuestion={removeQuestion}
				></Question>
			)
		})
	}
	return (
		<Fragment>
			<div>
				<h2 className="title">Questions</h2>
				{renderQuestions()}
				<AddQuestion addQuestion={addQuestion}></AddQuestion>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Questions
