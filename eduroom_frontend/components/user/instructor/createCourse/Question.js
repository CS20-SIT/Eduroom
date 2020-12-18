import { Fragment } from 'react'
import Choices from './Choices'
import style from '../../../../styles/user/instructor/createCourse/create'

const Question = ({ idx, question, handleQuestion, removeQuestion }) => {
	const qChange = (e) => {
		question.q = e.target.value
		handleQuestion(question,idx)
	}
	const questionChange = (newQuestion) => {
		question = newQuestion
		handleQuestion(question,idx)
	}
	const renderIcon = () => {
		return (
			<Fragment>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<i onClick={() => removeQuestion(idx)} className="fas fa-times icon"></i>
				</div>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<div>
				<div className="box">
					<div>
						{renderIcon()}
						<div className="title">Question</div>
						<input
							name="q"
							className="textfield"
							placeholder="Question text"
							type="text"
							onChange={qChange}
							value={question.q}
						></input>
						<div className="title" style={{ margin: '10px 0' }}>
							Choices
						</div>
						<Choices question={question} questionChange={questionChange}></Choices>
					</div>
				</div>
				<style jsx>{`
					.form {
						display: flex;
					}
					.box {
						background: #ffffff;
						box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
						border-radius: 10px;
						padding: 20px 20px;
						margin-bottom: 20px;
					}
					.textfield {
						background: #eff0f6;
						border-radius: 10px;
						width: 100%;
						border: none;
						font-size: 1.1em;
						color: #3d467f;
						padding: 14px;
					}
					.textfield ::placeholder {
						color: #3d467f;
						opacity: 0.75;
					}
					.title {
						font-style: normal;
						font-weight: bold;
						font-size: 15px;
						line-height: 19px;
						letter-spacing: 0.5px;
						text-transform: uppercase;
						color: #353e6c;
						margin-bottom: 5px;
					}
				`}</style>
			</div>
		</Fragment>
	)
}

export default Question
