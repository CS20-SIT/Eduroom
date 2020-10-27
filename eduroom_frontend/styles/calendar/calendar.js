import css from "styled-jsx/css";
export default css`
  .test {
    color: blue;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #2196f3;
    padding: 10px;
  }
  .gridItem {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  }
`;
