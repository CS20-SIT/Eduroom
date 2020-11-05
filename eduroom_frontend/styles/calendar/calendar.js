import css from "styled-jsx/css";
export default css`
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #FFFFFF;
    border-radius: 2px;
    padding: 8rem;
    
  }
  .gridItem {
    background-color: #FFFFFF;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    color: #3D467F;
    font-weight : bold;
    
  }
  .month-size{
   font-size :  100px
  }  .month-color{
    color: #3D467F;
    font-weight : bold;
    text-align : center;
  }
  .headerCell {
    background-color: #FFFFFF;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }

  .currentDate {
    position: relative;
    z-index: 0;
  }
  .currentDate::after {
    content: '';
    background-color: #ffdc7c;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
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
