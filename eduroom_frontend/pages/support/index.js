import Head from 'next/head'
import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Container, Button, TextField } from '@material-ui/core'

const Support = () => {
  const [supportForm, setForm] = useState({
    name: '',
    username: '',
    email: '',
    title: '',
    content: '',
  })
  const [alert, setAlert] = useState({
    name: false,
    username: false,
    email: false,
    title: false,
    content: false,
  })
  const handleChange = (e) => {
    e.preventDefault()
    setForm({ ...supportForm, [e.target.name]: e.target.value })
  }
  const Priority = [
    'Immediate: Fix Immediately',
    'Medium',
    'Low: Not in priority until updated',
  ]
  const Category = ['Account/Login Issues', 'General', 'Purchases', 'etc.']
  const subCategory = {
    'Account/Login Issues': [
      'Changing display name',
      'Changing username',
      'Delete/Deactivate Account',
      'Email Issues',
      'Payout Suspension',
      'Reactivate Account',
      'Suspension',
      'Warning',
    ],
    General: [
      'Accessibility issue',
      'My Coin',
      'My Sticker',
      'Feedback',
      'Notifications issue',
    ],
    Purchases: [
      'Fraudulent / Unauthorized charges',
      'Course Purchase',
      'Discount Code',
    ],
    'etc.': ['Other Problem'],
  }
  const [subCat, setSubCat] = useState([])
  const handleSelect = (e) => {
    setSubCat(subCategory[e.target.value] ?? [])
  }
  const handleSubmit = (e) => {
    if (validator()) {
      console.log(supportForm)
    } else {
      console.log('This form is not valid')
    }
  }
  const validator = () => {
    let keys = Object.keys(supportForm);
    let temp = {...alert}
    for(let key of keys){
        if(supportForm[key] == ''){
            temp[key] = true
        } else {
            temp[key] = false
        }
    }
    setAlert(temp)
  }
  return (
    <Fragment>
      <Head>
        <title>Submit Support Form</title>
      </Head>
      <main>
        <Container>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Your Name</label>
              <TextField
                name="name"
                type={'text'}
                placeholder={'enter your name'}
                value={supportForm.name}
                onChange={handleChange}
                error={alert.name}
              />
              {alert.name ? (
                <span style={{ color: 'red', fontSize: '0.8em' }}>
                  name is required
                </span>
              ) : null}
            </div>
            <div>
              <label>Your Username</label>
              <TextField
                name="username"
                type={'text'}
                placeholder={'enter your username'}
                value={supportForm.username}
                onChange={handleChange}
                error={alert.username}
              />
              {alert.username ? (
                <span style={{ color: 'red', fontSize: '0.8em' }}>
                  username is required
                </span>
              ) : null}
            </div>
            <div>
              <label>Your Email Address</label>
              <TextField
                name="email"
                type={'email'}
                placeholder={'enter your email'}
                value={supportForm.email}
                onChange={handleChange}
                error={alert.email}
              />
              {alert.email ? (
                <span style={{ color: 'red', fontSize: '0.8em' }}>
                  email is required
                </span>
              ) : null}
            </div>
              <div>
                <label>Category</label>
                <select
                  name={'cat'}
                  onChange={handleSelect}
                  defaultValue="default"
                >
                  <option disabled value="default">
                    --None--
                  </option>
                  {Category.map((el) => {
                    return <option value={el} key={el}>{el}</option>
                  })}
                </select>
              </div>
              <div>
                <label>Sub Category</label>
                <select name={'subCat'} defaultValue="default">
                  <option disabled value="default">
                    --None--
                  </option>
                  {subCat.map((el) => {
                    return <option value={el} key={el}>{el}</option>
                  })}
                </select>
              </div>
              <div>
                <label>Title</label>
                <TextField
                  name={'title'}
                  type={'text'}
                  placeholder={'enter title'}
                  value={supportForm.title}
                  onChange={handleChange}
                  error={alert.title}
                />
                {alert.title ? (
                  <span style={{ color: 'red', fontSize: '0.8em' }}>
                    title is required
                  </span>
                ) : null}
              </div>
              <div>
                <label>Content</label>
                <TextField
                  name={'content'}
                  type={'text'}
                  placeholder={'enter content'}
                  value={supportForm.content}
                  onChange={handleChange}
                  error={alert.content}
                />
                {alert.content ? (
                  <span style={{ color: 'red', fontSize: '0.8em' }}>
                    content is required
                  </span>
                ) : null}
              </div>
              <div>
                <label>Priority</label>
                <select name={'priority'} defaultValue="default">
                  <option disabled value="default">
                    --None--
                  </option>
                  {Priority.map((el) => {
                    return <option value={el} key={el}>{el}</option>
                  })}
                </select>
              </div>
            <div>
              <Button
                variant={'outlined'}
                color={'primary'}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </Container>
      </main>
    </Fragment>
  )
}

export default Support
