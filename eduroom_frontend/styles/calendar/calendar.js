import css from "styled-jsx/css";
export default css`
  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #FFFFFF;
    border-radius: 2px;
    margin: 5rem;
    
  }
  .gridItem {
    background-color: #FFFFFF;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    color: #3D467F;
    font-weight : bold;
  }

  .EmptyItem {
    background-color: #FFFFFF;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    color: #FFFFFF;
    font-weight : bold;
  }

  .month-size{
   font-size :  50px
  }  .month-color{
    color: #3D467F;
    font-weight : bold;
    text-align : center;
    margin-top : 5rem;
  }
  .headerCell {
    background-color: rgba(254,117,183);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    color: white;
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

.d-calendar {
  width: 25vw;
  height: 50vh;
  background-color: white;
  position: fixed;
  top: 50% ;
  left: 50%;
  z-index: 2; 
  transform: translate(-50%,-50%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  
}
.d-close{
  position: fixed;
  top: 0%;
  right: 0%;
  margin: 2rem;
  padding: 0.5rem;
  cursor: pointer; 
  font-weight: 800;
  font-size : 28px;
  color : #999999;
}
.bg-overlay{
 background-color : rgba(255, 255 ,255 , .2);
  height : 100vh;
  width : 100vw;
  position : fixed;
  z-index : 1;
  
}

.content{
  height : 77%;
  overflow-y : scroll;

}
.content *{
  height : 70rem;

}
.d-top{
  border-bottom : rgba(0,0,0,.1) 1px solid;
  height 45px;
  color: #3D467F;
  font-weight : bold;
  text-align : center;
}
.d-buttom{
  border-top : rgba(0,0,0,.1) 1px solid;
  color: #3D467F;
  font-weight : bold;
  text-align : center;
  
}
.d-day{
  position : absolute;
  margin:10px;
}

`;
