import css from 'styled-jsx/css'
export default css`
  .footer {
    position: absolute;
    bottom: 4%;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.2em;
  }
  .purple {
    color: #a880f7;
    font-weight: bold;
    cursor: pointer;
  }
  .bg-img {
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    pointer-events: none;
    cursor: default;
  }
  .landing-img {
    width: 25%;
    margin-left: 44vw;
    margin-top: 35vh;
    position: absolute;
  }
  .landing {
    width: 100vw;
    height: 100vh;
    background-image: url('/images/edqiz/landing-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .landing-title {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100vw;
    font-size: 4em;
    padding-bottom: 1%;
    font-weight: bold;
    cursor: default;
  }
  .landing-content {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-family: 'Quicksand', sans-serif;
  }
  .col-12 {
    width: 100%;
  }
  .landing-button {
    background: #3d467f;
    border-radius: 25px;
    width: 20%;
    padding: 1%;
    border: none;
    outline: none;
    justify: center;
    align-content: center;
  }
  .row {
    padding: 0.8%;
    justify-content: center;
    width: 100%;
    display: flex;
  }
  .landing-button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s;
  }
  .landing-button-text {
    color: white;
    font-weight: 700;
    font-size: 2vh;
    font-family: 'Quicksand', sans-serif;
  }
  input[type='text'],
  select {
    width: 20vw;
    padding: 1.5vh 1vh;
    color: #6e5a5c;
    font-weight: 700;
    font-size: 2vh;
    text-align: center;
    display: inline-block;
    border: 0.3vh solid #a6ceee;
    border-radius: 5vh;
    box-sizing: border-box;
    outline:none;
  }
`
