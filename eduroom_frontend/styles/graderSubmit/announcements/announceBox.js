import css from "styled-jsx/css"
export default css`
  .box {
    width: 95%;
    padding: 25px;
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
  .left,
  .right {
    width: 50%;
  }
  p {
    font-weight: bold;
    color: #f39ac4;
  }
  .admins {
    display: flex;
    justify-content: flex-end;
  }
  .left {
    align-items: center;
  }
`
