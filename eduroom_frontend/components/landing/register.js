import React, { Fragment, useEffect, useState } from 'react';
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
              <label className="label-text">Firstname</label>
              <input
                className="register-textfield"
                type="text"
                placeholder="Firstname"
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
              />

              <label className="label-text">Lastname</label>
              <input
                className="register-textfield"
                type="text"
                placeholder="Lastname"
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />

              <label className="label-text">Email</label>
              <input
                className="register-textfield"
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <label className="label-text">Password</label>
              <input
                className="register-textfield"
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
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
                      src="images/google-logo.png"
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
        <div>
          <div style={{ width: '50%' }}>
            <div style={{ paddingLeft: '20%' }}>
              <div>
                <h1 className="register-header">CREATE AN ACCOUNT</h1>
                <span style={{ color: '#3d467f', fontSize: '1.4em' }}>
                  Let your education journey begin!
                </span>
              </div>
            </div>
          </div>

          <img
            className="register-page-img"
            alt="register-page-img"
            src="images/campaign_img.svg"
          />
        </div>
      </div>
      <style jsx>
        {`
          .label-text {
            color: #473f47;
          }
          .register {
            width: 100vw;
            display: flex;
            justify-content: flex-start;
            padding: 2% 0% 0% 0%;
            cursor: default;
          }
          .register-textfield {
            background: #eff0f6;
            border-radius: 10px;
            width: 100%;
            padding: 4%;
            border: none;
            color: #3d467f;
            margin-bottom: 3%;
          }
          .register-textfield ::placeholder {
            color: #3d467f;
            opacity: 0.75;
          }
          .register-page-img {
            width: 100%;
          }
          .register-content {
            width: 38vw;
            position: absolute;
            right: 8%;
            top: 15%;
          }
          .register-link {
            font-size: 1em;
            font-weight: bold;
            color: #fe75b7;
            text-decoration-line: underline;
            cursor: pointer;
          }
          .striaght-line {
            border-bottom: 1px solid rgba(71, 63, 71, 0.6);
            width: 45%;
            height: 12px;
          }
          .register-header {
            font-size: 2.4em;
            font-family: 'Quicksand', sans-serif;
            font-weight: bold;
            color: #3d467f;
            margin-bottom: 10px;
          }
          .register-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(255, 255, 255, 0.6);
            box-shadow: 6px 4px 19px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            padding: 30px 20px 30px 20px;
          }
          .register-description {
            padding: 5% 0% 5% 0%;
            font-size: 1em;
            font-weight: normal;
            color: #3d467f;
          }
          .register-button {
            background: #3d467f;
            border-radius: 25px;
            padding: 0.75rem 5.3rem;
            margin-bottom: 5%;
            margin-top: 2.5%;
            border: none;
            outline: none;
          }
          .register-button:hover {
            cursor: pointer;
            opacity: 0.9;
            transition: 0.2s;
          }
          .register-button-text {
            color: white;
            font-weight: 700;
            font-size: 1.5em;
            font-family: 'Quicksand', sans-serif;
          }
          .register-google-button {
            background: white;
            border-radius: 25px;
            padding: 0.75rem 2rem;
            border: 2px solid rgba(0, 0, 0, 0.3);
            cursor: pointer;
            outline: none;
          }
          .register-google-button:hover {
            cursor: pointer;
            opacity: 0.7;
            transition: 0.25s;
          }
          .or-text {
            color: rgba(71, 63, 71, 0.6);
            margin-bottom: 5%;
            display: flex;
            font-weight: bold;
          }
          .or-text-text {
            margin: 0% 2%;
          }
          .google-logo {
            width: 20px;
            margin-right: 12px;
          }
          .register-google-button-text {
            display: flex;
            align-items: center;
            color: rgba(71, 63, 71, 0.6);
            font-weight: 700;
            font-size: 1em;
            font-family: 'Quicksand', sans-serif;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Register;
