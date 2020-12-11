import css from 'styled-jsx/css';
export default css`
  .landing {
    width: 95%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    padding: 2% 5% 0% 5%;
    cursor: default;
    background-image: url('/images/BG_Landing.svg');
    background-size:cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
  }
  .landing-img {
    width: 55%;
  }
  .landing-content {
    position: absolute;
    left: 5%;
    top: 24%;
    font-family: 'Quicksand', sans-serif;
  }
  .landing-header {
    font-size: 3em;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: #3d467f;
  }
  .landing-description {
    padding: 5% 0% 10% 0%;
    font-size: 1.1em;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color: #5b5b5b;
  }
  .landing-button {
    background: #fb9ccb;
    border-radius: 25px;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
  }
  .landing-button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s;
  }
  .landing-button-text {
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    font-family: 'Quicksand', sans-serif;
  }
`;
