import css from "styled-jsx/css";
export default css`
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #6ba292;
    padding: 10px;
  }
  .gridItem {
    background-color: #e4fde1;
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
  .headerCell {
    background-color: red;
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: right;
  }

  .currentDate {
    background-color: #ffdc7c;
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }

  .addEvent-button {
    background: #fe75b7;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
  }
  .addEvent-button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s;
  }
`;
