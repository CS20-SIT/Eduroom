import css from 'styled-jsx/css'
export default css`
  .error {
    width: 100vw;
    height: 100vh;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .error-number {
    font-size: 3em;
    font-weight: black;
  }
  .error-text {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    width: 100%;
    height: fit-content;
  }
  .row {
    padding: 1%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .home-button {
    cursor: pointer;
    width: fit-content;
    padding: 0.5% 1%;
    background: #fb9ccb;
    border-radius: 20px;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
  }
`

