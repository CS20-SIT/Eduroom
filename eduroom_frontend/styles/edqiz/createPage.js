import css from 'styled-jsx/css'
export default css`
  .landing-header {
    font-size: 2em;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #3d467f;
    margin: 0;
  }
  .content {
    width: 100vw;
    padding: 3% 5%;
    height: 82vh;
  }
  .col-12 {
    width: 100%;
    padding: 1% 0%;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    padding-bottom: 2.5%;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    background: white;
    padding: 3%;
    border-radius: 2vh;
    transition: 0.3s;
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    justify-content: space-around;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }

  .landing-img {
    width: 35vw;
    transition: 0.3s;
    pointer-events: none;
    margin-left: 33vw;
    margin-top: 10vh;
    position: absolute;
  }
  .landing {
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url('/images/edqiz/create-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
  }
  .landing-content {
    position: absolute;
    font-family: 'Quicksand', sans-serif;
  }
  .navy-text {
    color: #3d467f;
  }
  .landing-title {
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    padding-top: 5%;
    font-size: 2.5em;
    font-weight: bold;
    cursor: default;
  }
  .landing-button {
    background: #a880f7;
    border-radius: 25px;
    height: 6.5vh;
    width: 18%;
    transition: 0.3s;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    justify: center;
    align-content: center;
  }
  .landing-button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s;
  }
  .landing-button-text {
    color: white;
    font-weight: 540;
    font-size: 3vh;
    font-family: 'Quicksand', sans-serif;
  }

  input[type='text'],
  select {
    width: 25%;
    padding: 1.5%;
    transition: 0.3s;
    color: #6e5a5c;
    font-weight: 500;
    font-size: 2vh;
    background-color: #eff0f6;
    display: inline-block;
    border: none;
    border-radius: 2vh;
    box-sizing: border-box;
  }
`
