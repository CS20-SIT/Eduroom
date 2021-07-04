import { Fragment, useEffect, useState } from 'react'
import style from '../../styles/edqiz/managePage'
import EdqizText from './edqizText'
import Page1 from './edqizManagePage1'
import Page2 from './edqizManagePage2'
import Page3 from './edqizManagePage3'
import Page4 from './edqizManagePage4'
import Page5 from './edqizManagePage5'
const Content = ({ mode }) => {
	const [current, setCurrent] = useState(1)
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState(null)
	const questionTemplate = {
		question: '',
		time: '',
		point: '',
		answer: ['', '', '', ''],
		correct: 0,
		image: null,
	}
	const [questionList, setQuestionList] = useState([questionTemplate])
	// console.log('q',questionList)
	useEffect(() => {
		if (mode == 'edit') {
			setName('Test Edqiz')
			setDescription('Test Description')
			setQuestionList([questionTemplate, questionTemplate])
		}
	}, [])

	useEffect(() => {
		questionList.map((el, index) => {
			if (el.image) {
				var reader = new FileReader()
				reader.onload = function (e) {
					document.getElementById('show-image' + index).src = e.target.result
				}
				reader.readAsDataURL(el.image)
			}
		})
	}, [questionList])

	const handleChangeQuizName = (val) => {
		setName(val)
	}

	const handleChangeDescription = (val) => {
		setDescription(val)
	}

	const handleChangeImage = (val) => {
		setImage(val)
		if (val) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('cover-image').src = e.target.result
			}
			reader.readAsDataURL(val)
		}
	}

	const addQuestion = (val) => {
		let temp = questionList.splice(0, val + 1)
		temp.push(questionTemplate)
		temp.push(...questionList)
		setQuestionList(temp)
	}

	const changeQuestion = (val) => {
		let temp = [...questionList]
		temp[val.index][val.type] = val.newValue
		setQuestionList(temp)
	}

	const removeQuestion = (val) => {
		if (questionList.length > 1) {
			let temp = [...questionList]
			temp.splice(val, 1)
			setQuestionList(temp)
		}
	}

	const isEmpty = (val) => {
		return val == ''
	}

	const isInvalidQuestion = (el) => {
		return (
			isEmpty(el.question) ||
			isEmpty(el.time) ||
			isEmpty(el.point) ||
			isEmpty(el.answer[0]) ||
			isEmpty(el.answer[1]) ||
			isEmpty(el.answer[2]) ||
			isEmpty(el.answer[3])
		)
	}

	const isValidForm = () => {
		for (let el of questionList) {
			if (isInvalidQuestion(el)) {
				return false
			}
		}
		return true
	}

	const goto = (val) => {
		const data = { name, description, image, questionList }
		console.log(data)
		if (val != current) {
			if (val <= 2 || isValidForm()) {
				setCurrent(val)
			}
		}
	}

	const renderPage = () => {
		switch (current) {
			case 1:
				return <Page1 goto={goto} name={name} change={handleChangeQuizName} />
			case 2:
				return (
					<Page2
						goto={goto}
						name={name}
						questionList={questionList}
						add={addQuestion}
						remove={removeQuestion}
						change={changeQuestion}
						changeName={handleChangeQuizName}
					/>
				)
			case 3:
				return (
					<Page3
						goto={goto}
						name={name}
						questionList={questionList}
						add={addQuestion}
						remove={removeQuestion}
						change={changeQuestion}
						changeName={handleChangeQuizName}
					/>
				)
			case 4:
				return (
					<Page4
						goto={goto}
						description={description}
						image={image}
						changeDescription={handleChangeDescription}
						changeImage={handleChangeImage}
						questionList={questionList}
						name={name}
					/>
				)
			case 5:
				return <Page5 goto={goto} name={name} />
		}
	}
	return (
		<Fragment>
			<div className="edqiz-manage">
				<div className="edqiz-manage-title">
					<span className="navy-text"></span>
					<EdqizText type={mode} />
				</div>
				<div className="content">
					<div className="card">{renderPage()}</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Content
