import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
const Content = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {}, [email]);
  return (
    <Fragment>
      <div className="login">
        <div className="admin-login-page-img">
        <img
          className="admin-login-img"
          alt="admin-login-page-img"
          src="/images/admin-login-img.svg"
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
              <input
                className="login-textfield"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="login-textfield"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="login-button">
                <span className="login-button-text">Log In</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .login {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 2% 5% 0% 5%;
            cursor: default;
          }
          .login-textfield {
            background: #eff0f6;
            border-radius: 10px;
            width: 100%;
            padding: 5%;
            border: none;
            font-size: 1.1em;
            color: #3d467f;
            margin-bottom: 5%;
          }
          .login-textfield ::placeholder {
            color: #3d467f;
            opacity: 0.75;
          }
          .admin-login-page-img {
            width: 60%;
            padding: 4%;
          }
          .admin-login-img{
            width: 100%;
          }
          .login-content {
            width: 40%;
            padding: 12% 5%;
            font-family: 'Quicksand', sans-serif;
          }
          .login-header {
            font-size: 2.4em;
            font-family: 'Quicksand', sans-serif;
            font-weight: bold;
            color: #3d467f;
          }
          .login-form {
            text-align: center;
          }
          .login-description {
            padding: 5% 0% 5% 0%;
            font-size: 1em;
            font-family: 'Quicksand', sans-serif;
            font-weight: normal;
            color: #3d467f;
          }
          .login-button {
            background: #F39AC4;
            border-radius: 25px;
            padding: 0.75rem 5.3rem;
            margin-bottom: 5%;
            border: none;
            transition: 0.25s;
          }
          .login-button:hover {
            cursor: pointer;
            opacity: 0.9;
            transition: 0.2s;
          }
          .login-button-text {
            color: white;
            font-weight: 700;
            font-size: 1.5em;
            font-family: 'Quicksand', sans-serif;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Content;
