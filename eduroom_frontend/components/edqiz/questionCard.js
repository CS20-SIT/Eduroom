import React, { Fragment, useEffect } from 'react'
import QuestionAnswer from './questionAnswer'
import Image from 'next/image'
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
  const handleUplaodFile = (e) => {
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
            <div
              className="question-row"
              style={{ flexFlow: 'column', height: '100%' }}
            >
              <div
                className="col-12"
                style={{ paddingBottom: '3%', height: 'fit-content' }}
              >
                <input
                  type="text"
                  placeholder="Your Question"
                  value={data.question}
                  onChange={handleChangeQuestion}
                />
              </div>
              <div className="col-12" style={{ flex: '1' }}>
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
                    onChange={handleUplaodFile}
                  />
                  {data.image ? (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'contents',
                      }}
                    >
                      <img
                        src=""
                        id={'show-image' + index}
                        style={{ maxWidth: '600px', maxHeight: '300px' }}
                      />
                    </div>
                  ) : (
                    <div>
                      <span style={{ fontSize: '1.3em' }}>
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
              <div className="col-12" style={{ paddingBottom: '6%' }}>
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
              <div className="col-12" style={{ paddingBottom: '6%' }}>
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
      <style>
        {`
        .imageUpload{
            height: 100%;
            border: 1px dashed #B3ABBC;
            border-radius: 8px;
            display:flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        input,select {
            border: 1px solid #5B5B5B;
            padding: .75rem;
            border-radius: .5rem;
            width: 100%;
            font-size: 1.2em;
            outline:none;
        }
       
        .question-title {
            font-size: 2em;
            font-weight: 700;
            color: #3D467F;
        }
        
                    .question-card {
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
                        background: white;
                        padding: 3%;
                        border-radius: 24px;
                        margin: 2% 2% 3% 2%;
                    }
                    .addReButton{
                        border: 3px solid #5B5B5B;
                        color: #5B5B5B;
                        background: transparent;
                        font-size: 1.6em;
                        font-weight: 500;
                        border-radius: 40px;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        padding:0px;
                        outline:none;
                        justify-content: center;
                        align-items: flex-start;
                        margin: 2%;
                        cursor:pointer;
                        opacity: 0.7;
                    }
                    .addReButton:hover {
                      cursor: pointer;
                      width: 5vw;
                      opacity: 1;
                      transition: 0.25s;
                    }
                    .question-row {
                        display: flex;
                        flex: 1 1 auto;
                        flex-wrap: wrap;
                    }
                    .left {
                        text-align:start;
                    }
                    .right {
                        justify-content: flex-end;
                        display:flex;
                    }
                    .col-12 {
                        width: 100%;
                    }
                    .col-6 {
                        width: 50%;
                    }
                    .col-8 {
                        width: 67%;
                        padding-right: 1.5%;
                    }
                    .col-4 {
                        width: 33%;
                        padding-left: 1.5%;
                    }
                    .col-9 {
                        width: 80%;
                        padding-right: 1.5%;
                    }
                    .col-3 {
                        width: 20%;
                        padding-left: 1.5%;
                    }
                    `}
      </style>
    </Fragment>
  )
}
export default QuiztionCard
