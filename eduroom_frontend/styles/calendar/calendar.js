import css from "styled-jsx/css";
export default css`
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #FFFFFF;
    border-radius: 2px;
    padding: 5rem;
    
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
   font-size :  50px
  }  .month-color{
    color: #3D467F;
    font-weight : bold;
    text-align : center;
  }
  .headerCell {
    background-color: rgba(255,0,0 ,.2);
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
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
    background : #f4f5f7;
  }
  .addEvent-button:hover {
    background: #fe75b7;
    
    padding: 0.5rem 1.5rem;
    outline: none;
    transition: 0.25s;
  }


.previous-m {
  border: none;
  outline: none;
  background : #f4f5f7;
  cursor: pointer;
}
.forward-m {
  border: none;
  outline: none;
  background : #f4f5f7;
  cursor: pointer;
}
`;
