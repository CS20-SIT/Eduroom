import css from "styled-jsx/css"
export default css`
  .box {
    display: flex;
    border: 1px solid #5b5b5b;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .trophy,
  .content {
    padding: 1.5rem 0 1.5rem 0;
  }
  .date,
  .duration,
  .type {
    display: flex;
    margin: 0 0.2rem 0 0.2rem;
    padding: 0 0.7rem 0 0.7rem;
    font-weight: bold;
    border-radius: 10px;
    color: #ffffff;
    align-items: center;
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
  .trophy {
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    width: fit-content;
  }
  .content {
    width: 65%;
  }
  .detail {
    display: flex;
  }
  .contest-name {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #5b5b5b;
  }
  p {
    font-size: 0.85rem;
    margin-top: 0;
    margin-bottom: 0;
  }
  .detail {
    postion: absolute;
    align-content: center;
  }
  .status {
    display: flex;
    height: fit-content;
    justify-content: flex-end;
    width: 23%;
    padding-top: 10px;
  }
  img {
    width: 25px;
    padding: 3px 5px 3px 5px;
  }
  .status-box {
    display: flex;
    padding: 0.25rem 0.75rem;
    border: 1px solid #3d467f;
    border-radius: 100px;
  }
  .status-dot {
    width: 20px;
  }
  .contest-status {
    font-size: 0.875rem;
    color: #3d467f;
  }
  .contest-list:hover {
    cursor: pointer;
  }
`
