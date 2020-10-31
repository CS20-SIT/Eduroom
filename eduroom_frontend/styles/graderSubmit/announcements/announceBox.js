import css from "styled-jsx/css"
export default css`
  .box {
    width: 95%;
    height: 30%;
    padding: 1.5rem;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 12px #bdbdbd;
  }
  .title,
  .right {
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 60%;
  }
  .right {
    width: 40%;
  }
  p {
    margin-top: 0;
    font-size: 1.125rem;
    font-weight: bold;
    color: #f39ac4;
  }
  .admins,
  .times {
    display: flex;
  }
  .admins {
    width: 30%;
  }
  .times {
    width: 70%;
  }
  .left {
    align-items: center;
  }
  h2 {
    margin-top: 0;
  }
  .announceList {
    height: 80%;
    overflow: auto;
  }
`
