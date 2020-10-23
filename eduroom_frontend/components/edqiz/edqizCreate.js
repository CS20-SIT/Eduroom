import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/edqiz/createPage'
import EdquizText from './edqiz-text'
import Page1 from './edqizCreatePage1'
import Page2 from './edqizCreatePage2'
import Page3 from './edqizCreatePage3'
const Content = () => {
  const router = useRouter()
  const [current, setCurrent] = useState(1)
  const [name,setName] = useState('')
  const [questionList, setQuestionList] = useState([
    {
      question: '',
      time: '',
      point: '',
      ans: ['', '', '', ''],
      correct: 0,
      image: null,
    }
  ])
  const addQuestion = (val) => {
    let temp = questionList.splice(0, val + 1)
    temp.push({
      question: '',
      time: '',
      point: '',
      ans: ['', '', '', ''],
      correct: 0,
      image: null,
    })
    temp.push(...questionList)
    setQuestionList(temp)
  }
  const handleChangeQuizName = (val) => {
    setName(val)
  }
  const changeQuestion = (val) => {
    let temp = [...questionList]
    if(val.type == 'question'){
      temp[val.index].question = val.newValue
    } else if(val.type == 'time'){
      temp[val.index].time = val.newValue
    } else if(val.type == 'point'){
      temp[val.index].point = val.newValue
    } else if(val.type == 'answer'){
      temp[val.index].ans[val.opt] = val.newValue
    } else if(val.type == 'correct'){
      temp[val.index].correct = val.newValue
    } else if(val.type == 'image'){
      if(val.newValue){
        temp[val.index].image = val.newValue
        var reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('show-image'+val.index).src = e.target.result;
        }
        reader.readAsDataURL(val.newValue);
      }
    }
    setQuestionList(temp)
  }
  const removeQuestion = (val) => {
    if (questionList.length > 1) {
      let temp = [...questionList]
      temp.splice(val, 1)
      setQuestionList(temp)
    }
  }
  const goto = (val) => {
    setCurrent(val)
  }
  const renderPage = () => {
    switch (current) {
      case 1:
        return <Page1 goto={goto} name={name} change={handleChangeQuizName}/>
      case 2:
        return <Page2 goto={goto} name={name} questionList={questionList} add={addQuestion} remove={removeQuestion} change={changeQuestion} changeName={handleChangeQuizName}/>
      case 3:
        return <Page3 goto={goto} name={name} />
    }
  }
  return (
    <Fragment>
      <div className="landing">
        <div>
          <div className="landing-title">
            <span className="navy-text">
              CREATE NEW <EdquizText />
            </span>
          </div>
          <div className="content">
            <div className="card">{renderPage()}</div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Content
