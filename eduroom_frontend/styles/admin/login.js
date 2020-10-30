import css from 'styled-jsx/css'
export default css`
  .login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2% 5% 0% 5%;
    cursor: default;
  }
  .admin-login-page-img {
    width: 60%;
    padding: 4%;
  }
  .admin-login-img {
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
    background: #f39ac4;
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
`
