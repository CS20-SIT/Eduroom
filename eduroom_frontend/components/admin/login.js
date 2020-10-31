import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import style from '../../styles/admin/login'
import Image from 'next/image'
import InputField from '../utils/InputText'
const Login = () => {
  const [data,setData] = useState({email:{
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    error: false,
    type: 'text',
    value: '',
    errorText: 'Email is Required'
  },password:{
    label: 'Password',
    name: 'password',
    placeholder: 'Password',
    error: false,
    type: 'password',
    value: '',
    errorText: 'Password is Required'
  }})
  const handleChange = (e) => {
    let temp = {...data};
    temp[e.target.name].value = e.target.value;
    setData(temp);
  }
  const handleClick = (e) => {
    let temp = {...data}
    let i = -1
    Object.keys(temp).map(el=>{
      if(temp[el].value == ''){
        temp[el].error = true
        if(i == -1){
          i = el;
        }
      } else {
        temp[el].error = false;
      }
    })
    if(i != -1){
      document.getElementsByName(data[i].name)[0].focus();
    } else {
      const formData = {}
      Object.keys(temp).map(el=>{
        formData[el] = temp[el].value;
      })
      console.log(formData)
    }
    setData(temp)
  }
  return (
    <Fragment>
      <div className="login">
        <div className="admin-login-page-img">
        <Image
          className="admin-login-img"
          alt="admin-login-page-img"
          src="/images/admin-login-img.svg"
          width="731"
          height="605"        
        />
        </div>
        <div className="login-content">
          <div className="login-header">
            WELCOME ADMIN <br />
          </div>
          <div className="login-description">
            hope you enjoy!
          </div>
          <div className="login-form">
            <form onSubmit={(e) => e.preventDefault()}>
              {
                Object.keys(data).map(el=>{
                  return (
                    <InputField key={data[el].name} label={data[el].label} name={data[el].name} placeholder={data[el].placeholder} error={data[el].error} type={data[el].type} value={data[el].value} errorText={data[el].errorText} handleChange={handleChange} />
                  )
                })
              }
              <button className="login-button" onClick={handleClick}>
                <span className="login-button-text">Log In</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  );
};
export default Login;
