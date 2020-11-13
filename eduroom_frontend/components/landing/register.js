import React, { Fragment, useContext, useEffect, useState } from 'react';
import style from '../../styles/landing/register';
import Image from 'next/image';
import UserContext from '../../contexts/user/userContext';
import InputText from '../utils/InputText';
import { useRouter } from 'next/router';

const Register = () => {
  const userContext = useContext(UserContext);
  const { registerUser } = userContext;
  const router = useRouter();

  const handleChange = (e) => {
    let temp = { ...data };
    temp[e.target.name].value = e.target.value;
    if (e.target.value.length === 0) {
      temp[e.target.name].error = true;
    } else {
      temp[e.target.name].error = false;
    }
    setData(temp);
  };

  const [data, setData] = useState({
    firstname: {
      label: 'Firstname',
      name: 'firstname',
      type: 'text',
      errorText: 'Firstname is required',
      placeholder: 'Firstname',
      error: false,
      value: '',
    },

    lastname: {
      label: 'Lastname',
      name: 'lastname',
      type: 'text',
      errorText: 'lastname is required',
      placeholder: 'Lastname',
      error: false,
      value: '',
    },

    email: {
      label: 'Email',
      name: 'email',
      type: 'email',
      errorText: 'Email is required',
      placeholder: 'Email',
      error: false,
      value: '',
    },
    password: {
      label: 'Password',
      name: 'password',
      type: 'password',
      errorText: 'Password is required',
      placeholder: 'Password',
      error: false,
      value: '',
    },
  });

  const handleClick = (e) => {
    let temp = { ...data };
    let i = -1;
    Object.keys(temp).map((el) => {
      if (temp[el].value == '') {
        temp[el].error = true;
        if (i == -1) {
          i = el;
        }
      } else {
        temp[el].error = false;
      }
    });
    if (i != -1) {
      document.getElementsByName(data[i].name)[0].focus();
    } else {
      const formData = {};
      Object.keys(temp).map((el) => {
        formData[el] = temp[el].value;
      });
      registerUser(formData);
      
    }
    setData(temp);
  };

  const handleGoogleLogin = () => {
    window.location.pathname = '/api/auth/google';
  };

  return (
    <Fragment>
      <div className="register">
        <div className="register-content">
          <div className="register-form">
            <form style={{ width: '80%' }} onSubmit={(e) => e.preventDefault()}>
              {Object.keys(data).map((el) => {
                return (
                  <InputText
                    key={data[el].name}
                    label={data[el].label}
                    name={data[el].name}
                    placeholder={data[el].placeholder}
                    error={data[el].error}
                    type={data[el].type}
                    value={data[el].value}
                    errorText={data[el].errorText}
                    handleChange={handleChange}
                    style={{ padding: '3.5%', margin: '10px 0' }}
                  />
                );
              })}
              <div style={{ textAlign: 'center' }}>
                <button className="register-button" onClick={handleClick}>
                  <span className="register-button-text">Register</span>
                </button>
                <div className="or-text">
                  <div className="striaght-line"></div>
                  <span className="or-text-text">or</span>
                  <div className="striaght-line"></div>
                </div>
                <button
                  className="register-google-button"
                  onClick={handleGoogleLogin}
                >
                  <div className="register-google-button-text">
                    <img
                      src="/images/google-logo.png"
                      alt="google-icon"
                      className="google-logo"
                    />
                    <span>Sign Up With Google</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div style={{ width: '50%', zIndex: '50' }}>
          <div style={{ width: '100%', paddingLeft: '10%' }}>
            <div style={{ paddingBottom: '5%' }}>
              <div>
                <h1 className="register-header">CREATE AN ACCOUNT</h1>
                <span style={{ color: '#3d467f', fontSize: '1.4em' }}>
                  Let your education journey begin!
                </span>
              </div>
            </div>
            <Image
              alt="register-img"
              src="/images/register_img.svg"
              width="510"
              height="432"
            />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Register;
