import React, { Fragment, useEffect } from 'react'
import QuestionAnswer from './questionAnswer'
import style from '../../styles/edqiz/questionCard'
const QuiztionCard = ({ data, index, add, remove, change }) => {
  useEffect(() => {
    if (data.image) {
      var reader = new FileReader()
      reader.onload = function (e) {
        document.getElementById('show-image' + index).src = e.target.result
      }
      reader.readAsDataURL(data.image)
    }
  }, [])
  const handleChangeQuestion = (e) => {
    let newValue = e.target.value
    change({ index, type: 'question', newValue })
  }
  const handleChangeSelect = (e) => {
    let newValue = e.target.value
    let type = e.target.name
    change({ index, type, newValue })
  }
  const handleChangeAnswer = (val) => {
    let temp = [...data.answer]
    temp[val.opt] = val.newValue
    let newValue = temp
    let type = 'answer'
    change({ index, type, newValue })
  }
  const selectCorrect = (val) => {
    let newValue = val
    let type = 'correct'
    change({ index, type, newValue })
  }
  const renderAnswer = () => {
    let temp = [0, 1, 2, 3]
    return temp.map((el) => {
      return (
        <QuestionAnswer
          key={el}
          handleChange={handleChangeAnswer}
          handleCorrect={selectCorrect}
          correct={data.correct == el}
          index={el}
          ans={data.answer[el]}
        />
      )
    })
  }
  const handleuploadFile = (e) => {
    let newValue = e.target.files[0]
    let type = 'image'
    change({ index, type, newValue })
  }

  return (
    <Fragment>
      <div className="question-card">
        <div className="question-row">
          <div className="col-6 left">
            <span className="question-title">Question {index + 1}</span>
          </div>
          <div className="col-6 right">
            <button
              onClick={() => {
                add(index)
              }}
              className="addReButton"
            >
              <span>+</span>
            </button>
            <button
              onClick={() => {
                remove(index)
              }}
              className="addReButton"
            >
              <span>-</span>
            </button>
          </div>
          <div className="col-8">
            <div className="question-row flex-col">
              <div className="col-12 pb-3hf">
                <input
                  type="text"
                  placeholder="Your Question"
                  value={data.question}
                  onChange={handleChangeQuestion}
                />
              </div>
              <div className="col-12 flex1">
                <div
                  className="imageUpload"
                  onClick={() => {
                    document.getElementById('image' + index).click()
                  }}
                >
                  <input
                    id={'image' + index}
                    type="file"
                    accept="image/*"
                    hidden={true}
                    onChange={handleuploadFile}
                  />
                  {data.image ? (
                    <div className="show-img">
                      <img
                        src=""
                        id={'show-image' + index}
                        className="mw600 mh300"
                      />
                    </div>
                  ) : (
                    <div>
                      <span className="fs-13">
                        <i className="far fa-file"></i>
                      </span>
                      <br />
                      <span>Click here to add a document</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="question-row">
              <div className="col-12 pb-6">
                <select
                  name="time"
                  onChange={handleChangeSelect}
                  defaultValue="default"
                >
                  <option value="default" disabled>
                    {data.time == '' ? 'Times' : data.time}
                  </option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                  <option value="90">90</option>
                </select>
              </div>
              <div className="col-12 pb-6">
                <select
                  name="point"
                  onChange={handleChangeSelect}
                  defaultValue="default"
                >
                  <option value="default" disabled>
                    {data.point == '' ? 'Points' : data.point}
                  </option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                </select>
              </div>
              {renderAnswer()}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default QuiztionCard
