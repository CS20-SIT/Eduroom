import React, { Fragment, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import style from '../../styles/landing/login';
const Content = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleEmail = (e) => {
    if (e.target.value.length === 0) setEmailError('Email are required');
    else setEmailError('');
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    if (e.target.value.length === 0) setPasswordError('Password are required');
    else setPasswordError('');
    setEmail(e.target.value);
  };
  return (
    <Fragment>
      <div className="login">
        <div className="login-content">
          <div className="login-header">
            WELCOME BACK <br />
          </div>
          <div className="login-description">
            new here?
            <Link href="/register">
              <span className="register-link">create an account</span>
            </Link>
          </div>
          <div className="login-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className="login-textfield"
                type="text"
                placeholder="Email"
                onChange={(e) => handleEmail(e)}
              />
              <div className="error">{emailError}</div>
              <input
                className="login-textfield"
                type="password"
                placeholder="Password"
                onChange={(e) => handlePassword(e)}
              />
              <div className="error">{passwordError}</div>

              <button className="login-button">
                <span className="login-button-text">Log In</span>
              </button>
              <div className="or-text">
                <div className="striaght-line"></div>
                <span className="or-text-text">or</span>
                <div className="striaght-line"></div>
              </div>
              <button className="login-google-button">
                <div className="login-google-button-text">
                  <img
                    src="/images/google-logo.png"
                    alt="google-icon"
                    className="google-logo"
                  />
                  <span>Sign Up With Google</span>
                </div>
              </button>
            </form>
          </div>
        </div>
        <img
          className="login-page-img"
          alt="login-page-img"
          src="/images/login-img.svg"
        />
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
