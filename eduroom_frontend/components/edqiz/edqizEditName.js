import React, { Fragment, useState } from 'react'
import InputText from '../utils/InputText'
const EditName = ({ name, changeName }) => {
  const [isEditName, setIsEditName] = useState(false)
  const [quizName, setQuizName] = useState(name)
  const [error, setError] = useState(false)
  const handleTypeName = (e) => {
    e.preventDefault()
    setQuizName(e.target.value)
    setError(e.target.value == '')
  }
  const handleChangeName = (e) => {
    e.preventDefault()
    if (!error) {
      changeName(quizName)
      setIsEditName(false)
    }
  }
  const renderText = () => {
    if (isEditName) {
      return (
        <Fragment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.1em',
            }}
          >
            <div style={{ width: '300px' }}>
              <InputText
                value={quizName}
                errorText="Quiz Name is Required"
                error={error}
                handleChange={handleTypeName}
                style={{ padding: '5%' }}
              />
            </div>
            <i
              className="fas fa-save"
              style={{ marginLeft: '20px' }}
              onClick={handleChangeName}
            ></i>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '2em',
            }}
          >
            <span>{quizName}</span>
            <i
              className="fas fa-pen"
              style={{ marginLeft: '20px', fontSize: '0.9em' }}
              onClick={() => {
                setIsEditName(true)
              }}
            ></i>
          </div>
        </Fragment>
      )
    }
  }
  return <Fragment>{renderText()}</Fragment>
}
export default EditName
