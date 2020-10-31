import React, { Fragment, useEffect, useState } from 'react'
import style from '../../styles/edqiz/createPage'
import EdquizText from './CreateEdqiz-Text'
import Page1 from './edqizCreatePage1'
import Page2 from './edqizCreatePage2'
import Page3 from './edqizCreatePage3'
import Page4 from './edqizCreatePage4'
import Page5 from './edqizCreatePage5'
import QuestionCard from './questionCard'
const Content = () => {
  // Current State for the current page
  const [current, setCurrent] = useState(1)
  // Name of Quiz
  const [name, setName] = useState('')
  // Description of Quiz
  const [description, setDescription] = useState('')
  // Image of Quiz
  const [image, setImage] = useState(null)
  // Question Template
  const questionTemplate = {
    question: '',
    time: '',
    point: '',
    answer: ['', '', '', ''],
    correct: 0,
    image: null,
  }
  // Question List in the Quiz
  const [questionList, setQuestionList] = useState([questionTemplate])
  // Handle Render Image when QuestionList is changed
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

  // Handle Change Quiz Name
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
  // Use for Add new Question

  const addQuestion = (val) => {
    let temp = questionList.splice(0, val + 1)
    temp.push(questionTemplate)
    temp.push(...questionList)
    setQuestionList(temp)
  }

  // Use for Edit information of question

  const changeQuestion = (val) => {
    let temp = [...questionList]
    temp[val.index][val.type] = val.newValue
    setQuestionList(temp)
  }
  // Use for Remove Question

  const removeQuestion = (val) => {
    if (questionList.length > 1) {
      let temp = [...questionList]
      temp.splice(val, 1)
      setQuestionList(temp)
    }
  }

  // Use for change Page

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

  // Use for Render Page

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
          />
        )
      case 5:
        return <Page5 goto={goto} name={name} />
    }
  }
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-title">
          <span className="navy-text"></span>
          <EdquizText />
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
