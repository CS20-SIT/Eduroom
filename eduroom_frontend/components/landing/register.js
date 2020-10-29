import React, { Fragment, useEffect, useState } from 'react';
import style from '../../styles/landing/register'
import Image from 'next/image'
const Register = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const register = async () => {
    console.log(user);
  };
  return (
    <Fragment>
      <div className="register">
        <div className="register-content">
          <div className="register-form">
            <form style={{ width: '80%' }} onSubmit={(e) => e.preventDefault()}>
              <label className="label-text">Firstname
              <input
                className="register-textfield"
                type="text"
                placeholder="Firstname"
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
              /></label>

              <label className="label-text">Lastname
              <input
                className="register-textfield"
                type="text"
                placeholder="Lastname"
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              /></label>

              <label className="label-text">Email
              <input
                className="register-textfield"
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              /></label>

              <label className="label-text">Password
              <input
                className="register-textfield"
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              /></label>
              <div style={{ textAlign: 'center' }}>
                <button className="register-button" onClick={register}>
                  <span className="register-button-text">Register</span>
                </button>
                <div className="or-text">
                  <div className="striaght-line"></div>
                  <span className="or-text-text">or</span>
                  <div className="striaght-line"></div>
                </div>
                <button className="register-google-button">
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
        <div style={{width:'50%',zIndex:'50'}}>
          <div style={{ width: '100%',paddingLeft:'10%' }}>
            <div style={{ paddingBottom:'5%' }}>
              <div>
                <h1 className="register-header">CREATE AN ACCOUNT</h1>
                <span style={{ color: '#3d467f', fontSize: '1.4em' }}>
                  Let your education journey begin!
                </span>
              </div>
            </div>
            <Image alt="register-img" src="/images/register_img.svg" width="510" height="432"/>
          </div>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  );
};
export default Register;
