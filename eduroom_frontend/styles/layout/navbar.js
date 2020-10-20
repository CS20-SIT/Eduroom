import css from 'styled-jsx/css'
export default css`
  .navStyle {
    padding: 1% 4% 0% 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: default;
  }
  .navHeader {
    color: #3d467f;
    font-size: 2em;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
  }
  .navItemLayout {
    width: 35vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .navItem {
    color: #5b5b5b;
    font-weight: 500;
    font-size: 1.2em;
    transition: 0.25s;
  }
  .navItem:hover {
    color: black;
    transition: 0.25s;
    cursor: pointer;
  }
  .navLogin {
    background: #fe75b7;
    border-radius: 25px;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.25s;
  }
  .navLogin:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s;
  }
  .navLoginText {
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    font-family: 'Quicksand', sans-serif;
  }
`
