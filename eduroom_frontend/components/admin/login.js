import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import style from '../../styles/admin/login'
import Image from 'next/image'
const Content = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {}, [email]);
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
        {style}
      </style>
    </Fragment>
  );
};
export default Content;
