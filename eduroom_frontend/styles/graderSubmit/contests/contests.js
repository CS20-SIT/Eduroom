import css from "styled-jsx/css"
export default css`
  .contest {
    width: 100%;
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .top-left {
    width: 40%;
  }
  .top-right {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    color: #5b5b5b;
  }
  .date,
  .duration,
  .type {
    width: fit-content;
    display: flex;
    padding: 0 15px 0 15px;
    border-radius: 30px;
    align-self: center;
    font-weight: bold;
    color: #ffffff;
  }
  img {
    padding-right: 10px;
  }
  .date {
    background-color: #eb7db1;
  }
  .duration {
    background-color: #d5c1fc;
  }
  .type {
    background-color: #f3b496;
  }
  .bottom {
    height: 65%;
    overflow: auto;
    color: #bdbdbd;
  }
`
